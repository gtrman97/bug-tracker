import StatusColumn from "./demo-components/StatusColumn";
import Dropdown from "./demo-components/Dropdown";
import CreateButton from "./demo-components/CreateButton";
import './App.css';

function App() {

  let createTicket = () => {
    let ticket = {
      name : 'Task 10', 
      developer : 'Timmy', 
      time : '1h' 
    }
    return ticket;
  }

  return (
    <div>
      <div id='header'>
        <Dropdown id='dropdown' style={{width: 3000}}/>
        <CreateButton />
      </div>
    <div style={{display: "flex", gap: "2%", padding: "2.5%", margin: "1%", border: "solid 2px black"}}>
      <StatusColumn status={'not started'} color={'primary'} ticket={createTicket()}/>
      <StatusColumn status={'in progress'} color={'secondary'} ticket={createTicket()}/>
      <StatusColumn status={'completed'} color={'success'} ticket={createTicket()}/>
      
    </div>
    </div>
  );
}

export default App;
