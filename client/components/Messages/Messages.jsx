import React from "react";

function Messages({ messages }) {
  return (
    <div className="h-[90vh]">
      {messages.map((message, idx) => (
        <p key={idx}>{message.content}</p>
      ))}
    </div>
  );
}

export default Messages;
