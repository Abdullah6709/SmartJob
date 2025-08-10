class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage("Hey there! How can I help?");
    this.addMessageToState(message);
  }

  handleUnknown() {
    const message = this.createChatBotMessage("Sorry, I didn't understand that.");
    this.addMessageToState(message);
  }

  addMessageToState(message) {
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message]
    }));
  }
}

export default ActionProvider;
