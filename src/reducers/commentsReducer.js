import { deleteComment, getComment } from "../helpers/comment.helpers";
import { produce } from "immer";

export const actions = {
  increase: "increase",
  decrease: "decrease",
  delete: "delete",
  update: "update",
};

export const commentsReducer = (comments, action) => {
  return produce(comments, (draft) => {
    let comment = getComment(draft, action.id);
    if (!comment) return;

    switch (action.type) {
      case actions.increase:
        comment.score = comment.score + 1;
        break;
      case actions.decrease:
        comment.score = Math.max(comment.score - 1, 0);
        break;
      case actions.update:
        comment.content = action.content;
        break;
      case actions.delete:
        deleteComment(draft, action.id);
        break;
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  });
};
