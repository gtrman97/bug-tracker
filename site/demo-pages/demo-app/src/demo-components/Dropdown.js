import './Dropdown.css';

function change(){
    alert('Changed!');
}

function Dropdown(){
    return (
        <form>
        <select name="projects" id="options" onChange={change}>
          <option value="volvo">Project 1</option>
          <option value="saab">Project 2</option>
          <option value="opel">Project 3</option>
          <option value="audi">Project 4</option>
        </select>
      </form>
    )
}

export default Dropdown;