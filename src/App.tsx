import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import moduleOne from "./one.module.css";
// import moduleTwo from "./two.module.css";

const modules = import.meta.glob<{ default: string }>("./svg-images/*.svg", {
  eager: true,
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {Object.values(modules).map((src) => (
          <img src={src.default} />
        ))}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className={moduleOne.highlight}>Reactttttt</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <a href="/another-route/"> Go To Second Page</a>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
