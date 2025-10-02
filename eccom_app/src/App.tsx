import './App.css'
import DefaultBTN from './components/atoms/buttons/DefaultBTN'

function App() {
  
  const clickedFun = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <div className="card">
        <DefaultBTN btnText="Default Button" clickedFun={clickedFun}/>
      </div>
    </>
  )
}

export default App
