import { produce } from "immer";
import {
  createComment,
  deleteComment,
  getComment,
  getRepliesForComment,
} from "../helpers/comment.helpers";

export const actions = {
  create: "create",
  reply: "reply",
  update: "update",
  delete: "delete",
  increase: "increase",
  decrease: "decrease",
};

export const commentsReducer = (comments, action) => {
  return produce(comments, (draft) => {
    let comment;
    if (action.type === actions.create || action.type === actions.reply) {
      comment = createComment(action.content, action.user);
    } else {
      comment = getComment(draft, action.id);
    }

    if (!comment) return;

    switch (action.type) {
      case actions.create:
        draft.push(comment);
        break;
      case actions.reply: {
        const replies = getRepliesForComment(draft, action.parentCommentID);
        if (!replies) {
          // nested replies don't have a replies property yet, so this needs to be created
          const parentComment = getComment(draft, action.parentCommentID);
          parentComment.replies = [comment];
        } else {
          replies.push(comment);
        }
        break;
      }
      case actions.update:
        comment.content = action.content;
        break;
      case actions.delete:
        deleteComment(draft, action.id);
        break;
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
