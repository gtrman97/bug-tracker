import "../bootstrap-css/nucleo-icons.css";
import "../bootstrap-css/nucleo-svg.css";
import "../bootstrap-css/material-dashboard.css?v=3.0.0";

function Ticket() {
  return (
      <tr>
        <td className="align-middle text-center">
          <div className="d-flex flex-column justify-content-center">
            <h6 className="text-center text-xs mb-0 text-secondary">Task 1</h6>
          </div>
        </td>
        <td className="text-center">
          <p className="text-xs text-secondary mb-0">John Michael</p>
        </td>
        <td className="align-middle text-center">
          <span className="text-secondary text-xs">1h</span>
        </td>
      </tr>
  );
}

export default Ticket;
