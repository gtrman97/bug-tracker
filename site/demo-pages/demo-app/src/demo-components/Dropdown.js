import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown(props){

  let change = props.onChange;

    return (
        <form>
        <select name="projects" id="options" onChange={change}>
          <option value="project_1">Project 1</option>
          <option value="project_2">Project 2</option>
          <option value="project_3">Project 3</option>
          <option value="project_4">Project 4</option>
        </select>
      </form>
    )
}

export default Dropdown;