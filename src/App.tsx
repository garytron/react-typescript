import { Counter } from "./components/Counter";
import { TimerFather } from "./components/TimerFather";
import { User } from "./components/User";
import CounterRed from './components/CounterRed';
import Form from "./components/Form";
import Todo from "./Todo";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr />

      <h2>useState</h2>
      <Counter />
      <User />

      <h2>useEffect - useRef</h2>
      <hr />

      <TimerFather />
      <hr/>

      <CounterRed />
      <hr/>

      <Form />

      <br />
      <br />
      <hr />

      <Todo />
    </>
  );
}

export default App;
