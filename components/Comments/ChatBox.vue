<template>
  <div class="md:p-4 md:w-full lg:w-[85%] xl:w-full mx-auto">
    <div class="max-h-[300px] overflow-y-scroll md:max-h-[500px] xl:max-h-[500px] scroll">
      <div class="scroll--sublime">
        <CommnentBox
          v-for="(comment, index) in comments"
          :time="comment.createdAt"
          :isReply="comment.isReply"
          :isReplying="comment.isReplying"
          :user="comment.user"
          :score="comment.score"
          :content="comment.content"
          :current-user="currentUser.username"
          :repliedTo="comment.repliedTo"
          :key="comment.id"
          :id="index"
          @replied="onReply"
          @score-changed="onScoreChanged"
          @delete="onDelete"
          @updated="onUpdated"
        />
      </div>
    </div>

    <div class="bg-white mt-4 items-start flex-wrap md:flex-nowrap flex flex-col md:flex-row p-5 gap-x-6 gap-y-4 rounded-lg chat-shadow">
      <div class="h-9 w-9 hidden md:block rounded-full overflow-hidden object-cover shrink-0">
        <img src="@/assets/images/anh-1-beau.jpg"  class="object-cover"   />
        <!-- <img :src="@/assets/images/currentUser.image" :alt="currentUser.username" /> -->
      </div>
      <textarea v-model="userComment" @keyup.enter.prevent="newComment" autofocus></textarea>
      <div class="flex w-full md:w-auto justify-between">
        <div class="h-9 block md:hidden w-9 rounded-full overflow-hidden object-cover shrink-0">
          <img src="@/assets/images/anh-1-beau.jpg" class="object-cover"/>
          <!-- <img :src="@/assets/images/currentUser.image" :alt="currentUser.username" /> -->
        </div>
        <button v-if="!idReply" @click="newComment" class="px-5 py-2 rounded-md bg-moderate-blue text-white hover:bg-light-grayish-blue uppercase">Send</button>
        <button v-else @click="onUpdated(idReply, userComment)" class="px-4 py-2 rounded-md bg-moderate-blue text-white hover:bg-light-grayish-blue">Reply</button>
      </div>
    </div>
  </div>
</template>
  
<script>
import json from '../../data.json';
import parseComments, { getUser, commentTemplate, prepareForWrite } from '@/utils/parse-json';
import { parseDate, jsonFilter } from '@/utils/index.ts';
import CommnentBox from './CommnentBox.vue';

export default {
  name: 'ChatBox',
  components: {
    CommnentBox,
  },
  methods: {
    _addComment(i, comment) {
      let newComments = [...this.comments];
      newComments.splice(comment.id, 0, comment);
      return newComments;
    },
    _updateComment(index, comment) {
      let newComments = [...this.comments];
      newComments[index] = comment;

      return newComments;
    },
    _deleteComment(i) {
      console.log(`output->this.comments`, this.comments);
      let newComments = [].concat(this.comments);
      console.log(`output->this.newComments`, this.newComments);
      newComments.splice(i, 1);
      console.log(`output->this.newComments`, this.newComments);
      return newComments;
    },
    _closeOtherReplies() {
      let tempComments = this.comments;
      tempComments.forEach((comment) => {
        if (comment.isReplying) {
          this.comments = this._deleteComment(comment.id);
        }
      });
    },
    onReply(index) {
      let template = { ...commentTemplate };
      console.log(`output->onReply`, template);
      /** Edit Comment Template */
      template.user = this.currentUser;
      template.createdAt = parseDate(new Date());
      template.isReply = true;
      template.id = index + 1;
      this.idReply = index + 1;
      let user = this.comments[index].user;
      template.repliedTo = user.username;
      template.content = ``;
      template.isReplying = true;
      template.isCommented = false;
      this.userComment = `@${template.repliedTo} `;

      if (this.comments[index].isReply) {
        this.comments[this.comments[index].repliedToId].replies.push(index + 1);
      } else this.comments[index].replies.push(template.id);
      this._closeOtherReplies();

      this.comments = this._addComment(index, template);
      this.saveComments();
    },
    onScoreChanged(score, index) {
      console.log(`output->onScoreChanged`);
      let comment = this.comments[index];
      comment.score = score;
      this.comments = this._updateComment(index, comment);
      this.saveComments();
    },
    onDelete(index) {
      console.log(`output->onDelete`);
      if (this.comments[index].user.username == this.currentUser.username) this.comments = this._deleteComment(index);
      this.saveComments();
    },

    newComment() {
      console.log(`output->newComment`);
      if (!this.userComment) return;
      let template = commentTemplate;
      let index = this.comments.length;
      /** Edit Comment Template */
      template.user = this.currentUser;
      template.createdAt = parseDate(new Date());
      template.id = index;
      template.content = this.userComment;

      this.comments = this._addComment(index, template);
      this.userComment = '';
      this.saveComments();
    },
    onUpdated(index, content) {
      let comment = this.comments[index];
      if (comment.isReplying) {
        content = content.replace(`@${this.comments[index].repliedTo}`, '');
        comment.isReplying = false;
      }
      comment.content = content;

      this.comments = this._updateComment(index, comment);
      this.saveComments();
    },
    saveComments() {
      console.log(`output->saveComments`);
      let results = prepareForWrite(this.comments, this.currentUser);
      results = JSON.stringify(results);
      window.localStorage.setItem('comment-data', results);
    },
  },
  data() {
    let jsonData;

    if (!json) {
      jsonData = [];
    } else {
      jsonData = parseComments(json);
    }

    return {
      currentUser: getUser(json),
      comments: jsonFilter(jsonData),
      userComment: '',
      idReply: '',
    };
  },
  beforeMount() {
    let cm_d = JSON.parse(window.localStorage.getItem('comment-data'));
    let cmt = jsonFilter(parseComments(cm_d));
    if (cm_d && cmt.length > 0) {
      this.comments = cmt;
    }
  },
};
</script>
<style lang="scss" scoped>
// .scroll {
//   &--sublime::-webkit-scrollbar {
//     width: 10px;
//     height: 10px;
//   }
//   &--sublime::-webkit-scrollbar-track {
//     border-radius: 10px;
//     background: linear-gradient(left, #212121, #323232);
//     box-shadow: 0 0 1px 1px #111;
//   }
//   &--sublime::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//     background: linear-gradient(left, #4a4a4a, #404040);
//     box-shadow: inset 0 0 1px 1px #191919;
//   }
//   &--sublime::-webkit-scrollbar-thumb:hover {
//     background: linear-gradient(left, #555555, #4e4e4e);
//   }
// }
// .container {
//   background-color: #fdfdfd;
//   height: 100%;
//   width: 100%;
//   border-radius: 6px;
//   box-shadow: 0 4px 28px rgba(123, 151, 158, 0.25);
//   border: 1px solid #d6dee1;
//   padding: 1rem;
//   overflow: scroll;
// }
h1 {
  margin: 0;
  text-align: center;
}

/* custom scrollbar */
.scroll {
  margin: 0 -10px 0 -10px;
  padding: 0 3px 0 10px;
}
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 1px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
textarea {
  border: 1px solid #44444444;
}
</style>