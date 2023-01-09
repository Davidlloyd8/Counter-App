import Navigation from "../component/Navigation";
import { useReducer, useRef } from "react";
import Reducer from "../component/Reducer";
import { ACTIONS } from "../component/Reducer";
import { Helmet } from "react-helmet-async";
import Footer from "../component/Footer";
import "../css/home.css";

const Counter = () => {
  const InputRef = useRef();

  const Decrement = () => {
    if (Initialstate.count === 0) {
      return;
    }
    dispatch({ type: ACTIONS.DECREMENT });
  };
  const Increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };

  const Reset = () => {
    dispatch({ type: ACTIONS.RESET });
  };

  const SetValue = (event) => {
    event.preventDefault();
    dispatch({
      type: ACTIONS.SETVALUE,
      payload: Number(event.target.number.value),
    });
    InputRef.current.value = "";
  };

  const [Initialstate, dispatch] = useReducer(Reducer, { count: 0 });
  return (
    <>
      <Helmet>
        <title>Counter App</title>
        <meta name="description" content="A counter app" />
        <link ref="canonical" href="/" />
      </Helmet>

      <div className="container">
        <div className="box_value">
          <button className="decrement-btn" onClick={Decrement}>
            -
          </button>
          <h1>{Initialstate.count}</h1>
          <button className="increment-btn" onClick={Increment}>
            +
          </button>
        </div>
        <div className="reset">
          <button onClick={Reset}>Reset</button>
        </div>

        <div className="input-section">
          <form onSubmit={SetValue}>
            <input
              ref={InputRef}
              placeholder="set value"
              type="number"
              name="number"
              className="input-field"
            />
            <button type="submit">Add value</button>
          </form>
        </div>
      </div>
    </>
  );
};

function Home() {
  return (
    <>
      <Navigation />
      <Counter />
      <Footer />
    </>
  );
}
export default Home;
