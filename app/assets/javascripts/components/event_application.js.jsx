class EventApplication extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>Ryerson Table Tennis Events Log</h1>
          <p>CPS530</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable />
          </div>
        </div>
      </div>
    )
  }
}
