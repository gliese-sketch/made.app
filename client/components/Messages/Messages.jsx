import React from "react";
import Chat from "./Chat";

function Messages({ messages, id }) {
  return (
    <div className="h-[90vh] container mx-auto pt-10">
      {messages.map((message, idx) => (
        <Chat key={idx} message={message} own={message.id === id} />
      ))}
    </div>
  );
}

export default Messages;
