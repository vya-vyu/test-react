import Card from "../Card/Card";

import { useEffect } from "react";
import s from "./CardList.module.css";

import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/usersOperations";

const CardsList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const filter = useSelector((state) => state.users.filter);
  const filterUsers = () => {
    if (filter === "all") return users;
    if (filter === "follow") {
      return users.filter(
        (el) => el.isClicked === undefined || el.isClicked === false
      );
    }
    if (filter === "followings") {
      return users.filter((el) => el.isClicked === true);
    }
  };
  const filteredUsers = filterUsers();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {filteredUsers &&
          filteredUsers.map(({ id, user, tweets, followers, avatar }) => (
            <Card
              id={id}
              user={user}
              tweets={tweets}
              followers={followers}
              avatar={avatar}
              key={id}
            />
          ))}
      </ul>
    </div>
  );
};
export default CardsList;
