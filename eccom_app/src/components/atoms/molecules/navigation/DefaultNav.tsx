import DefaultBTN from "../../buttons/DefaultBTN";

function DefaultNav() {
  
  const clickedFun = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <nav className="nav_bar_default">
        <DefaultBTN btnText="Default Button" clickedFun={clickedFun}/>
      </nav>
    </>
  )
}

export default DefaultNav;