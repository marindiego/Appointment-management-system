import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(5);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountDown((prevCountDown) => prevCountDown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      navigate("/");
    },5000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [navigate]);
  return (
    <div 
    style={{ 
        textAlign: "center", 
        marginTop: "100px",
        marginBottom: "100px",
        fontSize: "24px",
        fontWeight: "bold", 
    }}>
      <h1 style={{ 
        fontSize: "48px", 
        marginBottom: "20px" 
    }}>
        Page Not Found</h1>
      <p style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}>Redirecting to home page in {countDown} seconds...</p>
    </div>
  );
}

export default ErrorPage;
