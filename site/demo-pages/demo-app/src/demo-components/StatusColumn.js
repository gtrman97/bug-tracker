import "../../../../assets/css/nucleo-icons.css";
import "../../../../assets/css/nucleo-svg.css";
import "../../../../assets/css/material-dashboard.css?v=3.0.0";
import "./StatusColumn.css";
import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700";
import "https://fonts.googleapis.com/icon?family=Material+Icons+Round";

function StatusColumn() {
  return (
    <div className="row" id="to-do">
      <div className="col-12">
        <div className="card my-4">
          <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
              <h6 className="text-white text-capitalize ps-3">Not Started</h6>
            </div>
          </div>
          <div className="card-body px-0 pb-2">
            <div className="table-responsive p-0" style="height: 450px;">
              <table className="table align-items-center mb-0" id="my-personnel">
                <thead>
                  <tr>
                    <th
                      className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                      style="width: 2px;"
                    >
                      Task
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Assignee
                    </th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-xs mb-0 text-secondary">Task 1</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs text-secondary mb-0">John Michael</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs">1h</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-xs mb-0 text-secondary">Task 2</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs text-secondary mb-0">John Michael</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs">2h</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-xs mb-0 text-secondary">Task 3</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs text-secondary mb-0">Jimmy Jones</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs">1h</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-xs mb-0 text-secondary">Task 4</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs text-secondary mb-0">Trevor Strnad</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs">3h</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-xs mb-0 text-secondary">Task 5</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs text-secondary mb-0">Brian Eschbach</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs">4h</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-xs mb-0 text-secondary">Task 6</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs text-secondary mb-0">Miriam Eric</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs">1h</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-xs mb-0 text-secondary">Task 7</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs text-secondary mb-0">Jimmy Jones</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs">2h</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-xs mb-0 text-secondary">Task 8</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs text-secondary mb-0">Trevor Strnad</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs">4h</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex px-2 py-1">
                        <div className="d-flex flex-column justify-content-center">
                          <h6 className="text-xs mb-0 text-secondary">Task 8</h6>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-xs text-secondary mb-0">Brian Eschbach</p>
                    </td>
                    <td className="align-middle text-center">
                      <span className="text-secondary text-xs">3h</span>
                    </td>
                  </tr>
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
