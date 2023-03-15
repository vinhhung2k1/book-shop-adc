export default function parseComments(json: any) {
  let objects: any = [];
  console.log(`output->json`, json)
  if (json) {
    let comments = [...json["comments"]] || [];
    comments = comments.sort((score_A, score_B) => score_A.score - score_B.score)

    if (comments instanceof Array) {
      comments.forEach((comment) => {
        let com: any = {};

        com.user = {};
        com.user.image = comment.user.image.png || comment.user.image;
        com.user.username = comment.user.username;

        com.score = comment.score;
        com.content = comment.content;
        com.createdAt = comment.createdAt;

        com.isReply = false;

        objects[comment.id - 1] = com;

        com.replies = [];
        com.isReplying = false;
        com.id = comment.id;

        /** Append Replies */

        if (comment.replies instanceof Array) {
          comment.replies.forEach((reply: any) => {
            let rep: any = {};

            rep.user = {};
            rep.user.image = reply.user.image.png || reply.user.image;
            rep.user.username = reply.user.username;

            rep.score = reply.score;
            rep.content = reply.content;
            rep.createdAt = reply.createdAt;
            rep.repliedTo = reply.replyingTo;
            rep.isReplying = false;
            rep.repliedToId = comment.id - 1;
            rep.id = reply.id;
            rep.replies = [];

            rep.isReply = true;
            objects[reply.id - 1] = rep;
            com.replies.push(rep.id);
          });
        }
      });
    }
  }
  return objects;
}
export function getUser(json: any) {
  return {
    username: json["currentUser"]["username"],
    image: json["currentUser"]["image"]["png"],
  };
}
export const commentTemplate = {
  user: {
    username: "",
    image: "",
  },
  score: 0,
  content: "",
  createdAt: "",
  isReply: false,
  isReplying: false,
  repliedTo: "",
  replies: [],
  id: 0,
};

export function prepareForWrite(comments: any, currentUser: any) {
  let results: any = [];
  comments = JSON.parse(JSON.stringify(comments));

  let index = [1];
  let getIndex = () => {
    let i = index[0]
    index[0] = i + 1;
    return i
  }

  comments.forEach((comment: any) => {
    delete comment.isReply
    delete comment.isReplying
    let replies: any = []

    if (!comment.repliedTo) {
      comment.replies.forEach((reply: any) => {
        replies.push(comments[reply - 1]);
      })
      comment.replies = replies;
      results.push(comment)
    }
  })

  results.forEach((comm: any) => {
    comm.id = getIndex()
    comm.replies.forEach((reply: any) => { reply.id = getIndex() })
  })

  results = {
    currentUser: currentUser,
    comments: results,
  }

  return results;
}