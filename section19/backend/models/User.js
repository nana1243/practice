const { putItem, getItem, updateItem, deleteItem } = require('../config/db');
const { v4: uuidv4 } = require('uuid');
const { QueryCommand } = require("@aws-sdk/lib-dynamodb");

const TABLE_NAME = "Users";

const createUser = async (userData) => {
    const userId = uuidv4();
    const now = new Date().toISOString();

    const item = {
        userId,
        ...userData,
        createdAt: now,
        updatedAt: now,
        refreshTokens: [],
    };

    await putItem(TABLE_NAME, item);
    return item;
};

const getUserById = async (userId) => {
    return await getItem(TABLE_NAME, { userId });
};

const getUserByKakaoId = async (kakaoId) => {
    const params = {
        TableName: TABLE_NAME,
        IndexName: 'kakaoId-index',
        KeyConditionExpression: 'kakaoId = :kakaoId',
        ExpressionAttributeValues: {
            ':kakaoId': kakaoId
        }
    };

    const command = new QueryCommand(params);
    // const { Items } = await docClient.send(command);
    const {Items} = await getItem(TABLE_NAME, params)
    return Items.length > 0 ? Items[0] : null;
}

const getUserByEmail = async (email) => {
    const params = {
        TableName: TABLE_NAME,
        IndexName: 'email-index',
        KeyConditionExpression: 'email = :email',
        ExpressionAttributeValues: {
            ':email': email
        }
    };
    const {Items} = await getItem(TABLE_NAME, params)
    return Items.length > 0 ? Items[0] : null;
};

const updateUser = async (userId, userData) => {
    const now = new Date().toISOString();
    userData.updatedAt = now;

    let updateExpression = 'set ';
    let expressionAttributeValues = {};
    let expressionAttributeNames = {};
    let i = 0;
    for (const key in userData) {
        const placeholder = `:val${i}`;
        const attributeKey = `#key${i}`;
        updateExpression += `${attributeKey} = ${placeholder}, `;
        expressionAttributeValues[placeholder] = userData[key];
        expressionAttributeNames[attributeKey] = key;
        i++;
    }
    updateExpression = updateExpression.slice(0, -2);

    return await updateItem(TABLE_NAME, { userId }, updateExpression, expressionAttributeValues, expressionAttributeNames);
};

const deleteUser = async (userId) => {
    return await deleteItem(TABLE_NAME, { userId });
};

module.exports = {
    createUser,
    getUserById,
    getUserByEmail,
    getUserByKakaoId,
    updateUser,
    deleteUser,
};