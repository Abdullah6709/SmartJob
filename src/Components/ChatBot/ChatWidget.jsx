import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { IconButton, Box, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 9999,
      }}
    >
      {isOpen ? (
        <Paper elevation={6} sx={{ width: 350, height: 500, position: "relative" }}>
          {/* Close/Minimize Button */}
          <IconButton
            size="small"
            onClick={toggleChat}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1000,
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          {/* Chatbot UI */}
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </Paper>
      ) : (
        // Floating Chat Icon when minimized
        <IconButton
          onClick={toggleChat}
          color="primary"
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
            "&:hover": { backgroundColor: "#115293" },
            width: 56,
            height: 56,
          }}
        >
          <QuestionAnswerIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default ChatWidget;
