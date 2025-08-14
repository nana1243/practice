const { v4: uuidv4 } = require('uuid');
const {scanItems , getItem, deleteItem , putItem} = require("../config/db");


const POSTS_TABLE = "Posts";
const COMMENTS_TABLE = "Comments";

// 게시물 생성 함수
const createPost = async (postData) => {
  const postId = uuidv4();
  const now = new Date().toISOString();

  const item = {
    ...postData,
    postId,
    createdAt: now,
    viewCount: 0,
  };


  try {
    await putItem(POSTS_TABLE, item);
    return item;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
const getPosts = async () => {

  try {
    const { Item } = await scanItems(POSTS_TABLE);
    console.log('Item:', Item);
    if (!Item || Item.length === 0) {
      return [];
    }
    return Item;
  } catch (error) {
    console.error("Error getting post by postId:", error);
    throw error;
  }
};

// 특정 게시물 조회 함수
const getPostById = async (postId) => {

  try {
    const { Item } = await getItem(POSTS_TABLE, { postId });
    return Item;
  } catch (error) {
    console.error("Error getting post by postId:", error);
    throw error;
  }
};

// 댓글 추가 함수
const addComment = async (postId, commentData) => {
  const commentId = uuidv4();
  const now = new Date().toISOString();

  const item = {
    postId,
    commentId,
    ...commentData,
    createdAt: now,
  };


  try {
    await putItem(COMMENTS_TABLE, item);
    return item;
  } catch (error) {
    console.error("Error adding comment:", error);
    throw error;
  }
};

// 특정 게시물의 모든 댓글 조회 함수
const getCommentsByPostId = async (postId) => {

  try {
    const { Items } = await getItem(COMMENTS_TABLE, { postId });
    return Items;
  } catch (error) {
    console.error("Error getting comments by postId:", error);
    throw error;
  }
};

module.exports ={
  createPost,
  getPosts,
  getPostById,
  addComment,
  getCommentsByPostId,
};
