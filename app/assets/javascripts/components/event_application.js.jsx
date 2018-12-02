class EventApplication extends React.Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    this.getDataFromApi();
  }

  getDataFromApi() {
    var self = this;
    $.ajax({
      url: '/api/events',
      success: function(data) {
        self.setState({ events: data });
      }

    });
  }

  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>Table Tennis Events Log</h1>
          <p>CPS530</p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <EventTable events={this.state.events} />
          </div>
        </div>
      </div>
    )
  }
}
