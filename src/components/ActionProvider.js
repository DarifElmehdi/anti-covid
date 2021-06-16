import '../App.css'
class ActionProvider {
  // The action provider receives createChatBotMessage which you can use to define the bots response, and 
  // the setState function that allows for manipulating the bots internal state.
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage
  }
  
  handleMessage = (bot_response) => {
    const message = this.createChatBotMessage(bot_response, {
      withAvatar: true,
    });

    this.addMessageToBotState(message)
  };

  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };
}

export default ActionProvider;