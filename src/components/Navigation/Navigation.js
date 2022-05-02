import { Link } from "react-router-dom";
import "./navigation.css";
import { BiCart, BiCaretDown } from "react-icons/bi";

const Navigation = () => {
  return (
    <header>
      <nav className="mainNavigation">
        <ul>
          <div>
            <span style={{ fontWeight: "bold" }}>BZ</span>
          </div>
        </ul>
        <ul>
          <li>
            <Link to="/">
              Home <BiCaretDown />
            </Link>
          </li>
          <li>
            <Link to="/product">
              product <BiCaretDown />
            </Link>
          </li>
          <li>
            <Link to="/Blog">
              Blog <BiCaretDown />
            </Link>
          </li>
          <li>
            <Link to="/buy">
              <BiCart style={{ width: "30px", height: "30px" }} />
            </Link>
          </li>
        </ul>
        <ul>
          <li className="signin">
            <Link to="/signin">SignIn</Link>
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
