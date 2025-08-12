const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");

// DynamoDB 클라이언트 생성 및 설정
const client = new DynamoDBClient({ region: "your-region" }); // AWS 리전 설정
const docClient = DynamoDBDocumentClient.from(client); // Document Client로 변환

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
    // 재시도 로직을 포함하여 오류 처리를 할 수 있습니다.
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

// 사용 예시
const run = async () => {
  const myItem = {
    id: "123",
    name: "John Doe",
    email: "john.doe@example.com"
  };
  await putItem("MyTable", myItem);
  await getItem("MyTable", { id: "123" });
};

run();