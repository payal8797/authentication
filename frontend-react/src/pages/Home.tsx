import { Button, Card } from "antd";

interface Props {
  onLogout: () => void;
}

export default function Home({ onLogout }: Props) {
  return (
    <Card title="Dashboard" style={{ maxWidth: 400, margin: "auto", marginTop: 50 }}>
      <p>🎉 You are logged in!</p>
      <Button danger onClick={onLogout} block>
        Logout
      </Button>
    </Card>
  );
}
