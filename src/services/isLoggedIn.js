import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function IsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoginStatus = () => {
      const storageLoggedIn = localStorage.getItem("token");
      if (storageLoggedIn) {
        console.log("Usuário logado");
        setIsLoggedIn(true);
      } else {
        console.log("Usuário não logado");
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();

    const intervalId = setInterval(checkLoginStatus, 15000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  return null;
}

export default IsLoggedIn;
