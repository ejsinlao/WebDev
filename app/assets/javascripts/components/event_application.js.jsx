class EventApplication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        events: [],
    }
  }

  componentDidMount(){
    this.getDataFromApi();
  }

  getDataFromApi(){
    var self = this;
    $.ajax({
      url: '/api/events',
      success: function(data) {
        self.setState({ events: data });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  }

  handleSearch(){
    this.setState({ events: events });
  }

  handleAdd(event) {
    var events = this.state.events;
    events.push(event);
    this.setState({ events: events });
  }

render(){
  return(
    <div className="container">
      <div className="jumbotron">
        <h1>Ryerson Rams Events Log</h1>
        <p>CPS530</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <SearchForm handleSearch={this.handleSearch} />
        </div>
        <div className="col-md-8">
          <NewForm handleAdd={this.handleAdd} />
        </div>
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