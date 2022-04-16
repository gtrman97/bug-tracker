import StatusColumn from "./demo-components/StatusColumn";

function App() {
  return (
    <div style={{display: "flex", gap: "2%", margin: "5%", border: "solid 2px black"}}>
      <StatusColumn status={'not started'}/>
    </div>
  );
}

export default App;
