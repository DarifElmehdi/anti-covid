import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

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