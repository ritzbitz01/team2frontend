import React from 'react';
import RequestHistory from './RequestHistory';
import '../css/base.css'
import '../css/bootstrap.min.css'

export default React.createClass ({
  render: function() {
    var historyNodes = this.props.data.map(function(history) {
      return (
        <RequestHistory requestId={history.requestId} services={history.dataServices} criteria={history.criteria} requestDate={history.requestDate} key={history.requestId} />
      );
    });
    return (
      <div className="dataHistoryList">
      	<h3>{history.requestId}</h3>
        {historyNodes}
      </div>
    );

  }
})
