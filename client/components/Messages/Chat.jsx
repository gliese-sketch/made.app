import React from "react";

function Chat({ message, own }) {
  return <div className={`${own && "bg-green-400"}`}>{message.content}</div>;
}

export default Chat;
