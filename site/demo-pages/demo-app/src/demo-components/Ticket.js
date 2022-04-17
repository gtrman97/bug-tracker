import "../bootstrap-css/nucleo-icons.css";
import "../bootstrap-css/nucleo-svg.css";
import "../bootstrap-css/material-dashboard.css?v=3.0.0";

function Ticket(props) {
  return (
      <tr>
        <td className="align-middle text-center">
          <div className="d-flex flex-column justify-content-center">
            <h6 className="text-center text-xs mb-0 text-secondary">{props.name}</h6>
          </div>
        </td>
        <td className="text-center">
          <p className="text-xs text-secondary mb-0">{props.developer}</p>
        </td>
        <td className="align-middle text-center">
          <span className="text-secondary text-xs">{props.time}</span>
        </td>
      </tr>
  );
}

export default Ticket;
