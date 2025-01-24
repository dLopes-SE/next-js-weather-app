import LoginForm from "@/features/Auth/components/loginForm";

export default function Login() {
  return (
    <div className="bg-gray-200 flex items-center justify-center min-h-[calc(100vh-var(--navbar-height))]">
      <LoginForm />
    </div>
  );
};