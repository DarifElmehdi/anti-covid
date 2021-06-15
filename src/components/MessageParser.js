// MessageParser starter code
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    fetch('http://127.0.0.1:5000/chat/'+message)
      .then(response => response.json())
      .then( data => this.actionProvider.handleMessage(data['msg']));
  }
}

export default MessageParser;