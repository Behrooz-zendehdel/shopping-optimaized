import { Link } from "react-router-dom";
import "./navigation.css";
import { BiCart, BiCaretDown } from "react-icons/bi";
import { useCart } from "../../Providers/ProductProvider";
import { useAuth } from "../../Providers/AuthProvider";

const Navigation = () => {
  const userData = useAuth();
  const { cart } = useCart();
  return (
    <header>
      <nav className="mainNavigation">
        <ul>
          <div>
            <span style={{ fontWeight: "bold" }}>BZ</span>
          </div>
          <li>
            <Link to="/buy">
              <BiCart style={{ width: "30px", height: "30px" }} />
              <span className="shownumber">{cart.length}</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/product">
              product <BiCaretDown />
            </Link>
          </li>
        </ul>
        <ul>
          <li className="signin">
            <Link to={userData ? "profile" : "/login"}>
              {userData ? "profile" : "exit"}
            </Link>
          </li>
          <li className="signup">
            <Link to="/signup">{userData ? "logOut" : ""}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
