"use client";
import { useState } from "react";
import { Button, HeroUIProvider } from "@heroui/react";
import { Inputs, SignUp, Messages } from "@/components";

export default function Home() {
  const [user, setUser] = useState("");

  return (
    <HeroUIProvider>
      <div>
        {user ? (
          <>
            <Inputs />
            <Messages />
          </>
        ) : (
          <SignUp setUser={setUser} />
        )}
      </div>
    </HeroUIProvider>
  );
}
