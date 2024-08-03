export const actions = {
  increase: "increase",
  decrease: "decrease",
};

export const ratingsReducer = (ratings, action) => {
  switch (action.type) {
    case actions.increase:
      return ratings.map((rating) =>
        rating.id === action.id
          ? { ...rating, score: rating.score + 1 }
          : rating
      );
    case actions.decrease:
      return ratings.map((rating) =>
        rating.id === action.id
          ? { ...rating, score: Math.max(rating.score - 1, 0) }
          : rating
      );
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
