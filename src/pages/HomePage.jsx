import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <p>Home Page</p>
      <Link to="/me">Go To Profile Page</Link>
    </div>
  );
};

export default HomePage;
