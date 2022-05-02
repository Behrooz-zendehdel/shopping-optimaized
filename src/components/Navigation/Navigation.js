import { Link } from "react-router-dom";
import "./navigation.css";
import { BiCart, BiCaretDown } from "react-icons/bi";
import { useCart } from "../../Providers/ProductProvider";

const Navigation = () => {
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
            <Link to="/login">LogIn</Link>
          </li>
          <li className="signup">
            <Link to="/signup">SignUp</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
