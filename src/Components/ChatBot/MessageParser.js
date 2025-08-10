class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi")) {
      this.actionProvider.greet();
    } else {
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;
