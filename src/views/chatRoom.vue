<template>
  <div class="text-xs-center chatting" xs12 sm6 lg8>
    <h1>
      Chatting in
      <span class="city">{{id}}</span>
    </h1>
    <div id="chat" class="chat">
      <div>
        <div id="posts" class="box" wrap v-for="(chat, key, index) in chats" :key="index">
          <div class="user1" v-if="chat.name == $store.state.user.displayName">
            <span class="userName">{{chat.name}}</span>
            <br />
            <span>{{chat.text}}</span>
          </div>
          <div class="user2" v-else>
            <span class="userName">{{chat.name}}</span>
            <br />
            <span>{{chat.text}}</span>
          </div>
        </div>
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
      chats: {},
      firstTime: true
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
      //   Sólo sube el nuevo mensaje si el input NO está vacio
      if (text != "") {
        firebase
          .database()
          .ref(this.id)
          .push(object);
        this.textInput = "";
      }
    },
    getPosts() {
      let that = this;
      firebase
        .database()
        .ref(this.id)
        .on("value", function(data) {
          var messages = data.val();
          that.chats = messages;
          let container = document.getElementById("chat");
          if (that.firstTime) {
            setTimeout(() => {
              container.scrollTop = container.scrollHeight;
              that.firstTime = false;
            }, 0);
          } else {
            setTimeout(() => {
              container.scrollTo({
                top: container.scrollHeight,
                behavior: "smooth"
              });
            }, 200);
          }
        });
    }
  },
  mounted() {
    this.getPosts();
  }
};
</script>

<style scoped>
.city {
  color: #009688;
}
.chatting {
  position: fixed;
  overflow-y: auto;
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
  overflow-wrap: break-word;
}
.inputs {
  display: inline-block;
  width: 80%;
  left: 10px;
}
.button {
  display: inline-block;
  vertical-align: 5px;
}
.userName {
  font-weight: bold;
  color: #009688;
}
.user1 {
  text-align: right;
  margin-right: 10px;
  margin-left: 10px;
}
.user2 {
  text-align: left;
  margin-left: 10px;
  margin-right: 10px;
}
.box {
  margin-right: 5px;
  margin-left: 5px;
  padding-top: 10px;
  /* moment JS */
}
@media (orientation: landscape) {
  .chat {
    height: 150px;
  }
  .chatting {
    overflow: hidden;
  }
}
</style>
