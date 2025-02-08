"use client"

import React, { FormEvent } from "react";
import { Button, Checkbox, Form, Input, Link } from "@heroui/react";

interface LoginProps {
	registerSubmitHandler?: (handler: (e: FormEvent<HTMLFormElement>) => void) => void;
}

const LoginForm = () => {
	// const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	const formData = new FormData(e.currentTarget);
	// 	const email = formData.get("email") as string;
	// 	const password = formData.get("password") as string;

	// 	console.log("Login Submitted:", { email, password });
	// };

	return (
		<Form className="flex flex-col gap-4 items-center bg-white rounded shadow-md" style={{padding: '1rem'}}>
			<Input
				label="Email"
				placeholder="Enter your email"
				variant="bordered"
				name="email"
				className="mb-2"
			/>
			<Input
				label="Password"
				placeholder="Enter your password"
				type="password"
				variant="bordered"
				name="password"
			/>
			<div className="flex w-full">
				<Checkbox
					classNames={{
						label: "text-small m-0",
						base: "m-0"
					}}
				>
					Remember me
				</Checkbox>
				<Link color="primary" href="#" size="sm">
					Forgot password?
				</Link>
			</div>
			<Button type="submit">Submit</Button>
		</Form>
	);
};

export default LoginForm;