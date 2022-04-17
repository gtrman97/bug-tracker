import '../bootstrap-css/nucleo-icons.css';
import '../bootstrap-css/nucleo-svg.css';
import "../bootstrap-css/material-dashboard.css?v=3.0.0";
import "./StatusColumn.css";
import Ticket from "./Ticket";

function StatusColumn(props) {

    let state = props.status, color = props.color;

  return (
    <div className="row" style={{width: '33%'}}>
      <div className="col-12">
        <div className="card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className={`bg-gradient-${color} shadow-primary border-radius-lg pt-4 pb-3`}>
              <h6 className="text-white text-capitalize ps-3">{state}</h6>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0" style={{height: 450}}>
              <table className="table align-items-center mb-0" id="my-personnel">
                <thead>
                  <tr>
                    <th
                      className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Task
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Developer
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <Ticket name={'Task 1'} developer={'John Michael'} time={'1h'}/>
                  <Ticket name={'Task 2'} developer={'John Michael'} time={'2h'}/>
                  <Ticket name={'Task 3'} developer={'Jimmy Jones'} time={'1h'}/>
                  <Ticket name={'Task 4'} developer={'Trevor Strnad'} time={'3h'}/>
                  <Ticket name={'Task 5'} developer={'Brian Eschbach'} time={'4h'}/>
                  <Ticket name={'Task 6'} developer={'Miriam Eric'} time={'1h'}/>
                  <Ticket name={'Task 7'} developer={'Jimmy Jones'} time={'2h'}/>
                  <Ticket name={'Task 8'} developer={'Trevor Strnad'} time={'4h'}/>
                  <Ticket name={'Task 9'} developer={'Brian Eschbach'} time={'3h'}/>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusColumn;
