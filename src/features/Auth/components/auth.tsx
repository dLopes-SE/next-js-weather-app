"use client"

import { Button, Form } from "@heroui/react";
import { FormEvent, RefObject, useRef } from "react";
import LoginForm from "./loginForm";

interface AuthProps {
  mode: "login" | "signup";
  submitRef?: RefObject<(() => void) | null>;
}

const Auth = ({ mode, submitRef }: AuthProps ) => {
	const formRef = useRef<HTMLFormElement | null>(null);
	let authSubmitHandler: ((e: FormEvent<HTMLFormElement>) => void) | null = null;

	const registerSubmitHandler = (handler: (e: FormEvent<HTMLFormElement>) => void) => {
    authSubmitHandler = handler;
  };

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
		console.log("im in handlesubmit")

    if (authSubmitHandler) {
      authSubmitHandler(e); // Pass the event to the Auth handler
    } else {
      console.warn("No submit handler registered from Auth.");
    }
  };

	// Assign the submit function to the submitRef during render
  if (submitRef) {
    submitRef.current = () => {
      formRef.current?.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    };
  }

  return (
		<div
			className="bg-gray-200"
			style={
				submitRef === undefined
					? { marginTop: "10rem", minHeight: "100vh" }
					: {}
			}
		>
			<Form ref={formRef} onSubmit={handleSubmit} className="items-center">
				{mode === "login" ? (
					<LoginForm registerSubmitHandler={registerSubmitHandler} />
				) : (
					<div>SignUp</div>
				)}
				{!submitRef && <Button type="submit">Sign in</Button>}
			</Form>
		</div>
	);
};

export default Auth;