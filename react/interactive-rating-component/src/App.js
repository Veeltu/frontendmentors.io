import MainCard from "./Main/MainCard";

const background = {
  backgroundColor: "hsl(216, 12%, 8%)",
  width: "100%",
  height: "100vh",
  padding: "0",
  margin: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

function App() {
  return (
    <div className="App" style={background}>
      <MainCard/>
    </div>
  );
}

export default App;
