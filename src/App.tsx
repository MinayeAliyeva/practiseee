import "./App.css";
import { useRoute } from "./routes/Routes";

function App() {
  const myRoute = useRoute();
  // console.log(myRoute);
  return <div className="App">{myRoute}</div>;
}

export default App;
