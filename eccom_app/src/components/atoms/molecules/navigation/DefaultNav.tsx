import DefaultBTN from "../../buttons/DefaultBTN";
import UserBTN from "../../buttons/UserBTN";
import Header from "../../text/Header";
import SearchBar_BTN from "../filter_search/SearchBar_BTN";

function DefaultNav() {
  
  const clickedFun = () => {
    alert('Button clicked!');
  };

  return (
    <nav className="nav_bar_default py-1 w-full flex justify-between items-center">

        <Header title={"BAZAAR"} />

        <SearchBar_BTN />

        <UserBTN btnText="H" clickedFun={clickedFun}/>

        <DefaultBTN btnText="Customer" clickedFun={clickedFun}/>

    </nav>
  )
}

export default DefaultNav;