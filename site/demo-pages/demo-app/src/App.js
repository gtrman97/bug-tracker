import StatusColumn from "./demo-components/StatusColumn";

function App() {
  return (
    <div style={{display: "flex", gap: "2%", padding: "2.5%", margin: "5%", border: "solid 2px black"}}>
      <StatusColumn status={'not started'} color={'primary'}/>
      <StatusColumn status={'in progress'} color={'secondary'}/>
      <StatusColumn status={'completed'} color={'success'}/>
      
    </div>
  );
}

export default App;
