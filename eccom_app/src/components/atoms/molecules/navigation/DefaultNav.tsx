import DefaultBTN from "../../buttons/DefaultBTN";
import Header from "../../text/Header";

function DefaultNav() {
  
  const clickedFun = () => {
    alert('Button clicked!');
  };

  return (
    <nav className="nav_bar_default">

        <Header title={"Bazaar"} />

        <DefaultBTN btnText="Default Button" clickedFun={clickedFun}/>
    </nav>
  )
}

export default DefaultNav;