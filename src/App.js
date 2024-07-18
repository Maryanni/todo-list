import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    needToBeDone: ''});

  const [list, setList] = useState([
    "I need to run",
    "Eat",
    "Sleep eight hours",
  ]);

  const handlerOnChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    })
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setList([...list,
      inputValue.needToBeDone]); 
    setInputValue({needToBeDone: ""})
  };

  const deleteList = (indexToDelete) => {
    setList(list.filter((item, index) => index !== indexToDelete))
  }

  console.log(inputValue.needToBeDone);
  return (
    <div className="Container classContainer">
      <div className="classDivPrincipal">
        <h1 className="justify-content-center d-flex">Todos</h1>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleOnSubmit}>
              <input
                onChange={handlerOnChange}
                name="needToBeDone"
                value={inputValue.needToBeDone}
                className="placeholderInput"
                type="text"
                placeholder="What needs to be done?"
              />
            </form>
          </div>
        </div>
        <ul className="list-group">
          {list.map((item, index) => {
            return <li className="list-group-item trushIcon" key={index}>
            {item}
            <span onClick={() => deleteList(index)}>
              <i className="fa fa-regular fa-rectangle-xmark"></i>
            </span>
          </li>;
          })}
          <li className="list-group-item bg-secondary-subtle">  <b> {list.length} </b> items left</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
