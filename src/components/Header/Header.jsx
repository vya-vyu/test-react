import { useState } from "react";
import { filterUsers } from "../../redux/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import s from "./Header.module.css";
import logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Header = ({ options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const filter = useSelector((state) => state.users.filter);

  console.log(filter);
  const dispatch = useDispatch();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const handleOptionSelect = (option) => {
    dispatch(filterUsers(option));
  };
  console.log(isHomePage);
  return (
    <header className={s.container}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      {isHomePage ? (
        <Link to="/tweets" className={s.link}>
          Tweets
        </Link>
      ) : (
        <div className={s.dropdown}>
          <button
            className={s.dropdownToggle}
            onClick={() => setShowOptions(!showOptions)}
          >
            {filter || "all"}
          </button>
          {showOptions && (
            <ul className={s.dropdownOptions}>
              {options.map((option) => (
                <li key={option} onClick={() => handleOptionSelect(option)}>
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
