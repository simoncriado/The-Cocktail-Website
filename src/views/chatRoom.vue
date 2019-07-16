<template>
  <div class="text-xs-center chatting" xs12 sm6>
    <h1>Chatting in {{id}}</h1>
    <div class="chat">
      <div id="posts" class="box" wrap v-for="(chat, key, index) in chats" :key="index">
        <span>
          {{chat.name}}:
          <br />
          {{chat.text}}
        </span>
      </div>
    </div>
    <div>
      <v-flex class="inputs" xs12 md3>
        <v-text-field
          v-on:keyup.enter="writeNewPost"
          background-color="#009688"
          color="#009688"
          v-model="textInput"
          label="Your message..."
          outline
          dark
        ></v-text-field>
      </v-flex>
      <v-btn
        v-on:click="writeNewPost"
        id="create-post"
        class="button is-primary"
        small
        fab
        color="#009688"
        dark
      >
        <v-icon>comment</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
      id: this.$route.params.name,
      textInput: "",
      chats: {}
    };
  },
  methods: {
    writeNewPost() {
      let text = this.textInput;
      let name = this.$store.state.user.displayName;
      let object = {
        text,
        name
      };

      firebase
        .database()
        .ref(this.id)
        .push(object);
      this.textInput = "";
    },

    getPosts() {
      let that = this;
      firebase
        .database()
        .ref(this.id)
        .on("value", function(data) {
          var messages = data.val();
          that.chats = messages;
        });
    }
  },
  created() {
    this.getPosts();
  }
};
</script>

<style scoped>
.chatting {
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.chat {
  height: 430px;
  overflow: scroll;
  margin-top: 10px;
  margin-bottom: 5px;
  border: solid;
  border-color: #009688;
  border-width: 2px;
  border-radius: 5px;
}
.inputs {
  width: 80%;
  display: inline-block;
}
.button {
  display: inline-block;
  width: 20%;
}
.box span {
  background-color: #009688;
}
.box {
  margin-right: 5px;
  margin-left: 5px;
  text-align: left;
  padding-top: 5 px;
  /* por qué no funciona el margin top? */
}
</style>
