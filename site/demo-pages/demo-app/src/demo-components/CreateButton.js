import '../bootstrap-css/nucleo-icons.css';
import '../bootstrap-css/nucleo-svg.css';
import '../bootstrap-css/material-dashboard.css?v=3.0.0';
import './CreateButton.css';

function CreateButton(){
    return(
        <button data-modal-target="#modal" id='create' class="bg-gradient-secondary shadow-primary border-radius-lg pb-3
        text-white text-capitalize">
          create ticket
        </button>
    )
}

export default CreateButton;