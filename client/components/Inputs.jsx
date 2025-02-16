import { useState, useRef } from "react";
import { Button, Input } from "@heroui/react";
import { SendHorizonal, UploadIcon } from "lucide-react";
import React from "react";

function Inputs() {
  const [input, setInput] = useState("");
  const inputFile = useRef(null);

  const onFileUpload = (e) => {
    const file = e.target.files[0];

    // Convert to base64
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      inputFile.current.click();
    }

    console.log(input);
    // Empty input field
    setInput("");
  };

  return (
    <form
      className="h-[10vh] flex items-end sm:items-center max-w-5xl mx-auto gap-0 sm:gap-1"
      onSubmit={onSubmit}
    >
      <Input
        type="text"
        placeholder="Enter a message"
        autoComplete="off"
        size="lg"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        radius="none"
        className="rounded-none sm:rounded-md"
      />

      <input
        type="file"
        name="file"
        accept="image/png, image/gif, image/jpeg"
        ref={inputFile}
        onChange={onFileUpload}
        hidden
      />

      <Button
        className="bg-emerald-300 rounded-none sm:rounded-md"
        size="lg"
        type="submit"
      >
        {input ? <SendHorizonal /> : <UploadIcon />}
      </Button>
    </form>
  );
}

export default Inputs;
