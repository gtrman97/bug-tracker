import React, { useState } from "react";
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

  let change = () => {
    // let element = document.getElementById('container').innerHTML;
    // element.render(<CreateButton />)
    // let [Ticket, SetTicket] = useState(props.ticket);
    // setTicket();
    alert("Changed!")
}

  return (
    <div>
      <div id='header'>
        <Dropdown id='dropdown' style={{width: 3000}} onChange={change}/>
        <CreateButton />
      </div>
    <div id='container' style={{display: "flex", gap: "2%", padding: "2.5%", margin: "1%", border: "solid 2px black"}}>
      <StatusColumn status={'not started'} color={'primary'} ticket={createTicket()}/>
      <StatusColumn status={'in progress'} color={'secondary'} ticket={createTicket()}/>
      <StatusColumn status={'completed'} color={'success'} ticket={createTicket()}/>
      
    </div>
    </div>
  );
}

export default App;
