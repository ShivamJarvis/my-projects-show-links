import "./App.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";
import data from "./data";
function App() {
  return (
    <div className="container">
      <Header />
      {data.map((item,index) => {
        return <CardContainer {...item} key={index} />;
      })}
    </div>
  );
}

export default App;
