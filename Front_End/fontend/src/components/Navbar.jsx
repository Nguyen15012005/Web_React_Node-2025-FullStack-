import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles = "" }) => {
  const navItems = [
    { path: "/", label: "Home", icon: <MdHomeFilled /> },
    { path: "/mens", label: "Men", icon: <MdCategory /> },
    { path: "/womens", label: "Women", icon: <MdShop2 /> },
    { path: "/kids", label: "Kids", icon: <MdContacts /> },
  ];

  return (
    <nav className={containerStyles}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            isActive ? "active_link" : "hover:text-secondary"
          }
        >
          <div className="flexCenter gap-x-1">
            {item.icon} {item.label}
          </div>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
