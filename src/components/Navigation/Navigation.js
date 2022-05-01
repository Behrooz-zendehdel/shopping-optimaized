import { Link } from "react-router-dom";
import "./navigation.css";
import { BiLogIn } from "react-icons/bi";

const Navigation = () => {
  return (
    <header>
      <nav className="mainNavigation">
        <ul>
          <div>
            <span>logo</span>
          </div>
        </ul>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/Login">
              <BiLogIn />
              Login
            </Link>
          </li>
          <li>
            <Link to="/logout">
              Exit <BiLogIn />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
