import { immerable } from "immer";

function getComment(comments, id) {
  for (const comment of comments) {
    if (comment.id === id) {
      return comment;
    }
    if (comment.replies) {
      const foundComment = getComment(comment.replies, id);
      if (foundComment) {
        return foundComment;
      }
    }
  }
  return null;
}

function createComment(content, user) {
  const newComment = {
    id: crypto.randomUUID(),
    content: content,
    createdAt: "Just now",
    score: 0,
    user: user,
    replies: [],
  };

  return newComment;
}

function deleteComment(comments, id) {
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].id === id) {
      comments.splice(i, 1);
      return;
    }
    if (comments[i].replies) {
      deleteComment(comments[i].replies, id);
    }
  }
}

function getRepliesForComment(comments, id) {
  const comment = getComment(comments, id);
  return comment.replies || [];
}

export { getComment, createComment, deleteComment, getRepliesForComment };
