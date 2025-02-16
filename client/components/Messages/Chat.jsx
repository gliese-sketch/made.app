import { Avatar, Card, CardBody, Image } from "@heroui/react";
import NewUser from "./NewUser";

function Chat({ message, own }) {
  return (
    <Card className={`w-fit bg-transparent ${own && "bg-emerald-100 ml-auto"}`}>
      <CardBody className="flex items-center flex-row gap-1">
        {!own && <Avatar name={message.name.toUpperCase()} />}

        {/* For new user */}
        {message.type === "user" && <NewUser name={message.name} />}

        {/* For image message */}
        {message.type === "image" && (
          <Image width="400" src={message.content} />
        )}

        {/* For text message */}
        {message.type === "text" && <p>{message.content}</p>}

        {/* For link message */}
        {message.type === "link" && (
          <p>
            <a href={message.content} className="underline">
              {message.content}
            </a>
          </p>
        )}
      </CardBody>
    </Card>
  );
}

export default Chat;
