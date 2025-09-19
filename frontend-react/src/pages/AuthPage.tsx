import { useState } from "react";
import { Button } from "antd";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

interface Props {
  onLogin: (token: string) => void;
}

export default function AuthPage({ onLogin }: Props) {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="auth-container">
      <div>
        {mode === "login" ? <LoginForm onLogin={onLogin} /> : <SignupForm />}
        <div style={{ textAlign: "center", marginTop: "12px" }}>
          <Button type="link" onClick={() => setMode(mode === "login" ? "signup" : "login")}>
            {mode === "login" ? "No account? Signup here" : "Already have an account? Login"}
          </Button>
        </div>
      </div>
    </div>
  );
}
