export function getComment(comments, id) {
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
