import s from "./Card.module.css";
import userIcon from "../../assets/images/user.png";

import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { isFollow } from "../../redux/usersSlice";

const Card = ({ id, user, tweets, followers, avatar }) => {
  const dispatch = useDispatch();
  const isClicked = useSelector((state) => {
    const user = state.users.users.find((user) => user.id === id);
    return user ? user.isClicked : false;
  });
  const handleIsFollow = () => {
    dispatch(isFollow({ userId: id, isClicked: !isClicked }));
  };
  return (
    <li className={s.item}>
      <img src={logo} alt="logo" className={s.logo} />
      <div className={s.itemBg}>
        <div className={s.itemContainer}>
          <div className={s.userIcon}>
            <img
              src={avatar ? avatar : userIcon}
              alt="user"
              className={s.avatar}
            />
          </div>
          <div className={s.itemContent}>
            <div>
              <span className={s.title}>{tweets.toLocaleString()} tweets</span>
              <span className={s.title}>
                {" "}
                {followers.toLocaleString()} Followers
              </span>
            </div>

            <button
              type="button"
              className={isClicked ? s.button : s.buttonClicked}
              onClick={handleIsFollow}
            >
              {isClicked ? "Following" : "follow"}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Card;
