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

export { getComment, deleteComment, getRepliesForComment };
