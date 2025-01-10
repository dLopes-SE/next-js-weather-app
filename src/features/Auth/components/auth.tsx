"use client"

import { Form } from "@nextui-org/react";
import { useState } from "react";
import Login from "./login";

interface AuthProps {
  mode: "login" | "signup";
  externalSubmitHandler?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Auth: React.FC<AuthProps> = ({ mode, externalSubmitHandler }) => {
  // Used to define the internal handler (which can be submitted by a login or signup)
  const [internalSubmitHandler, setInternalSubmitHandler] = useState(() => (e: React.FormEvent<HTMLFormElement>) => e.preventDefault());

  // Define which handler to pass
  const onSubmit = externalSubmitHandler || internalSubmitHandler;

  return (
		<div
			className="bg-gray-200"
			style={
				externalSubmitHandler === undefined
					? { marginTop: "10rem", minHeight: "100vh"}
					: {}
			}
		>
			<Form onSubmit={onSubmit} className="items-center">
				{mode === "login" ? (
					<Login setSubmitHandler={setInternalSubmitHandler} />
				) : (
					<div>SignUp</div>
				)}
			</Form>
		</div>
	);
};

export default Auth;