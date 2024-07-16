import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    name: "",
  });

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
    console.log("ya casi termino");
    setList([...list,
      inputValue.needToBeDone]); 
    setInputValue({
      name: "",
    })
  };

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
            <span>
              <i className="fa fa-regular fa-rectangle-xmark"></i>
            </span>
          </li>;
          })}
          <li className="list-group-item">Aqui va la cantidad de items</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
