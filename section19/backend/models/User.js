const { putItem, getItem, updateItem, deleteItem } = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const TABLE_NAME = "User";

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


const getUserById = async ({userId, refreshToken}) => {
    return await getItem(TABLE_NAME, { userId, refreshToken });
};

const getUserByKakaoId = async (kakaoId) => {
    let Items = null;
    const params = {
        TableName: TABLE_NAME,
        IndexName: 'kakaoId-index',
        KeyConditionExpression: 'kakaoId = :kakaoId',
        ExpressionAttributeValues: {
            ':kakaoId': kakaoId
        }
    };

    try {
        Items = await getItem(TABLE_NAME, params);

    }catch (error) {
        console.error('this is error', error);
    }
    return Items && Items.length>0 ? Items[0] : null;
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
    const updateData = { ...userData, updatedAt: now };

    let updateExpression = 'SET ';
    const expressionAttributeValues = {};
    const expressionAttributeNames = {};

    const updateExpressions = Object.entries(updateData).map(([key, value], index) => {
        const keyPlaceholder = `#${key}`;
        const valuePlaceholder = `:${key}`;

        expressionAttributeNames[keyPlaceholder] = key;
        expressionAttributeValues[valuePlaceholder] = value;

        return `${keyPlaceholder} = ${valuePlaceholder}`;
    });

    updateExpression += updateExpressions.join(', ');

    // 수정된 updateItem 호출 부분
    return await updateItem(
        TABLE_NAME,
        { userId },
        updateExpression,
        expressionAttributeValues,
        expressionAttributeNames
    );
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