import React from "react";
import { Checkbox, Input, Link } from "@nextui-org/react";

interface LoginProps {
  setSubmitHandler: (handler: (e: React.FormEvent<HTMLFormElement>) => void) => void;
}

const Login: React.FC<LoginProps> = ({ setSubmitHandler }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log("Login Submitted:", { email, password });
  };

  React.useEffect(() => {
    setSubmitHandler(() => handleSubmit);
  }, [setSubmitHandler]);
  
  return (
		<div>
			<Input
				label="Email"
				placeholder="Enter your email"
				variant="bordered"
			/>
			<Input
				label="Password"
				placeholder="Enter your password"
				type="password"
				variant="bordered"
			/>
			<div className="flex py-2 px-1 justify-between">
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