import CardsList from "../components/CardsList/CardsList";
import Header from "../components/Header/Header";

const options = ["all", "follow", "followings"];
const TweetsPage = () => {
  return (
    <>
      <Header options={options} />
      <CardsList />
    </>
  );
};
export default TweetsPage;
