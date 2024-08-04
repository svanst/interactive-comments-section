export const actions = {
  increase: "increase",
  decrease: "decrease",
};

export const commentsReducer = (comments, action) => {
  switch (action.type) {
    case actions.increase:
      return comments.map((comment) =>
        comment.id === action.id
          ? { ...comment, score: comment.score + 1 }
          : comment
      );
    case actions.decrease:
      return comments.map((comment) =>
        comment.id === action.id
          ? { ...comment, score: Math.max(comment.score - 1, 0) }
          : comment
      );
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
