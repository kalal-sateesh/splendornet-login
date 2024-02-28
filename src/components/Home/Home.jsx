import { useContext, useEffect, useState } from "react";
import styles from "../Home/Home.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [showWelcomeImage, setShowWelcomeImage] = useState(true);

  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (navigator.onLine) {
        setIsOnline(true);
        setShowWelcomeImage(false);
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <div className={styles.container}>
      {isOnline ? (
        <div>
          {showWelcomeImage && (
            <img
              src="https://media.istockphoto.com/id/1339164910/vector/welcome-back-black-line-lettering.jpg?s=612x612&w=0&k=20&c=l8KusIodwcsICTlRa_ZgZV2W-UikgOXrahL51CLwhGE="
              alt="Welcome"
            />
          )}
          <h1>Welcome to Our Website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            sequi nesciunt! Vitae, aliquid omnis? Cumque praesentium quae
            quisquam suscipit illo eligendi, deserunt exercitationem,
            voluptatibus totam incidunt, impedit corporis veritatis inventore!
          </p>
        </div>
      ) : (
        <div>
          <img
            src="https://media.istockphoto.com/id/1403358675/vector/males-hand-holding-mobile-phone-with-no-wifi-signal.jpg?s=612x612&w=0&k=20&c=bxMLQDUQp9A2mA4AC5XblJSu2dmNBogMzQ7NUJyU87Q="
            alt="No Internet Connection"
          />
          <h1>No Internet Connection</h1>
          <p>Please check your internet connection and try again.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
