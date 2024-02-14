import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  useEffect(() => navigate('/employees'), [navigate])

  return <></>;
}

export default App;
