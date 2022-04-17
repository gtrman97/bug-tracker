import StatusColumn from "./demo-components/StatusColumn";

function App() {

  let createTicket = () => {
    alert('New Ticket!');
  }

  return (
    <div>
      <button onClick={createTicket}>Create Ticket</button>
    <div style={{display: "flex", gap: "2%", padding: "2.5%", margin: "5%", border: "solid 2px black"}}>
      <StatusColumn status={'not started'} color={'primary'}/>
      <StatusColumn status={'in progress'} color={'secondary'}/>
      <StatusColumn status={'completed'} color={'success'}/>
      
    </div>
    </div>
  );
}

export default App;
