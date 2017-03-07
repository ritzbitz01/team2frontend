import '../css/base.css'
import '../css/bootstrap.min.css'

import React from 'react';
import ServiceDetail from './ServiceDetail';


export default React.createClass ({
  render: function() {
    var serviceList = this.props.data.map(function(services) {
      return (
        <ServiceDetail serviceName={services.serviceName} completeDate={services.completeDate} isSuccessful={services.isSuccessful} numDeletions={services.numDeletions} numDeleteActions={services.numDeleteActions} numComplete={services.numComplete} key={services.serviceName}/>
      );
    });
    return (
      <div className="serviceDetail">
        <h5>Service List</h5>
        {serviceList}
      </div>
    );
  }
})
