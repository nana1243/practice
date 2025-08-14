const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand, PutCommand, ScanCommand, UpdateCommand, DeleteCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const docClient = DynamoDBDocumentClient.from(client);

// DynamoDB에 아이템을 추가하는 함수
const putItem = async (tableName, item) => {
  const command = new PutCommand({
    TableName: tableName,
    Item: item,
  });
  try {
    const response = await docClient.send(command);
    console.log("Item added successfully:", response);
    return response;
  } catch (error) {
    console.error("Error putting item:", error);
    throw error;
  }
};

// DynamoDB에서 아이템을 가져오는 함수
const getItem = async (tableName, key) => {
  const command = new GetCommand({
    TableName: tableName,
    Key: key,
  });
  try {
    const response = await docClient.send(command);
    console.log("Item retrieved successfully:", response.Item);
    return response.Item;
  } catch (error) {
    console.error("Error getting item:", error);
    throw error;
  }
};

// DynamoDB에서 모든 아이템을 스캔하는 함수
const scanItems = async (tableName) => {
  const command = new ScanCommand({
    TableName: tableName,
  });
  try {
    const response = await docClient.send(command);
    console.log("Items scanned successfully:", response.Items);
    return response.Items;
  } catch (error) {
    console.error("Error scanning items:", error);
    throw error;
  }
};

// DynamoDB 아이템을 업데이트하는 함수
const updateItem = async (tableName, key, updateExpression, expressionAttributeValues) => {
  const command = new UpdateCommand({
    TableName: tableName,
    Key: key,
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: expressionAttributeValues,
    ReturnValues: "ALL_NEW",
  });
  try {
    const response = await docClient.send(command);
    console.log("Item updated successfully:", response.Attributes);
    return response.Attributes;
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
};

// DynamoDB에서 아이템을 삭제하는 함수
const deleteItem = async (tableName, key) => {
  const command = new DeleteCommand({
    TableName: tableName,
    Key: key,
  });
  try {
    const response = await docClient.send(command);
    console.log("Item deleted successfully:", response);
    return response;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};


module.exports = {
  putItem,
  getItem,
  scanItems,
  updateItem,
  deleteItem
};