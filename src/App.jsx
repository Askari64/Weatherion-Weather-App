import "./App.css";
import { MdSearch } from "react-icons/md";

function App() {
  return (
    <>
      <div>
        <div className="bg">
          <h1 className="heading">Weatherion</h1>
          <div className="form-container">
            <input className="form" type="form" placeholder="Location" />
            <button className="search-button">
              <MdSearch />
            </button>
          </div>
        </div>
        <div className="Card-container">
          <div className="Card">
            <h1>Hello</h1>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
