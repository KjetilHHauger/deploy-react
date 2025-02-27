import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>I have successfully deployed</h1>
      <Link to={"/test"}>To the test site</Link>
      <br />
      <a href="/test">Ship o´hoy</a>
    </>
  );
}

export default App;
