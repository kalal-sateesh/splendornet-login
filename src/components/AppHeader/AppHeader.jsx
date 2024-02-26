import { useNavigate } from "react-router-dom";
import styles from "../AppHeader/AppHeader.module.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const AppHeader = () => {
  const navigate = useNavigate();

  const { isAuth, logoutHandler } = useContext(AuthContext);
  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/registration");
  };

  const handleLogout = () => {
    logoutHandler();
  };

  return (
    <header>
      <nav>
        <div>USER LOGIN</div>
        <div className={styles.btn}>
          {!isAuth && <button onClick={handleLogin}>Login</button>}
          {isAuth && <button onClick={handleLogout}>Logout</button>}
          <button onClick={handleSignup}>Signup</button>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
