import { getComment } from "../helpers/comment.helpers";
import { produce } from "immer";

export const actions = {
  increase: "increase",
  decrease: "decrease",
};

export const commentsReducer = (comments, action) => {
  return produce(comments, (draft) => {
    const comment = getComment(draft, action.id);
    if (!comment) return;

    switch (action.type) {
      case actions.increase:
        comment.score = comment.score + 1;
        break;
      case actions.decrease:
        comment.score = Math.max(comment.score - 1, 0);
        break;
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  });
};
