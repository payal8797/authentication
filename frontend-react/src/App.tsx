import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";

function App() {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  if (!token) return <AuthPage onLogin={setToken} />;

  return <Home onLogout={() => { localStorage.removeItem("token"); setToken(null); }} />;
}

export default App;
