import { /*Link,*/ NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/about'>contacte</Link>
        </li>
        <li>
            <Link to='/contact'>aboute</Link>
        </li>
    </ul> */}
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "grey" : "" };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "grey" : "" };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "grey" : "" };
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post/mobile"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "grey" : "" };
            }}
          >
            Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post/mobile/1"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "grey" : "" };
            }}
          >
            Post id
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
