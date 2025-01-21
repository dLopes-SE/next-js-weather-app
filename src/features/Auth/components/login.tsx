import React, { FormEvent, useEffect } from "react";
import { Checkbox, Input, Link } from "@heroui/react";

interface LoginProps {
  registerSubmitHandler: (handler: (e: FormEvent<HTMLFormElement>) => void) => void;
}

const Login = ({ registerSubmitHandler } : LoginProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log("Login Submitted:", { email, password });
  };

  useEffect(() => {
		console.log("Im in useEffect")
    registerSubmitHandler(handleSubmit);
  }, [registerSubmitHandler]);
  
  return (
		<div>
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
			<div className="flex py-3 px-5 justify-between">
				<Checkbox
					classNames={{
						label: "text-small",
					}}
				>
					Remember me
				</Checkbox>
				<Link color="primary" href="#" size="sm">
					Forgot password?
				</Link>
			</div>
		</div>
	);
};

export default Login;