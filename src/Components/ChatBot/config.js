import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "HelperBot",
  initialMessages: [
    createChatBotMessage("Hello! How can I help you today?")
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#1976d2" },
    chatButton: { backgroundColor: "#1976d2" }
  }
};

export default config;
