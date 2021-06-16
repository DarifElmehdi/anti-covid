import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { Avatar } from "@material-ui/core";
import MessageParser from "./MessageParser";

const botName = "CoviBOT";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
    // Defines an object of custom components that will replace the stock chatbot components. 
    customComponents: {
     // Replaces the default bot avatar
     botAvatar: () => <Avatar alt="Remy Sharp" src="assets/botAvatar.gif" style={{marginRight: 10,height :55 ,width : 55}}/>,
     userAvatar: () => <Avatar alt="Remy Sharp" src="assets/userAvatar.jpg" style={{marginLeft: 10,height :55 ,width : 55}}/>,
   },
   // Defines an object of custom styles if you want to override styles
   customStyles: {
     // Overrides the chatbot message styles
     botMessageBox: {
       backgroundColor: "#376B7E",
     },
     // Overrides the chat button styles
     chatButton: {
       backgroundColor: "#5ccc9d",
     },
   },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I’m here to answer your queries about COVID-19!`
    ),
  ],
  state: {
    gist: "",
  },
};

export default config;