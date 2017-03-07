import React, { Component } from 'react';
import WorldWriterService from '../services/WorldWriterService';
import LoginStore from '../stores/LoginStore';

export default React.createClass({

  getInitialState() {
    return {
      username: LoginStore.getUser(),
      firstname: '',
      lastname: '',
      email: '',
      joinmonth: '',
      joinyear: ''
    }
  },

  getMonth(monthNum) {
    var month;
    switch (monthNum) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    }
    return month;
  },

  getUserInformation() {
    var getUserInfo = WorldWriterService.getUserInformation(this.state.username);

    var self = this;

    getUserInfo.then(function(data) {
      self.setState({firstname: data.firstName});
      self.setState({lastname: data.lastName});
      console.log("USER INFO SUCCESS1: " + data.joinDate)
      var date = new Date(data.joinDate);
      var month = self.getMonth(date.getMonth());
      var year = date.getFullYear();
      console.log("USER INFO SUCCESS: " + year)
      self.setState({joinmonth: month});
      self.setState({joinyear: year});

      console.log("USER INFO SUCCESS2: " + data.joinDate)
    }).catch(function(err) {
      return self.setState({ error: true })
    })
  },

  componentDidMount: function() {
      this.getUserInformation();
  },

  render() {
    return (
      <div className="myaccountparent">
        <div className="myaccountinfo">
          <div className="myaccountpicture">
            <h1>Account Information</h1>
          </div>
          <div className="myaccountusername">
            <p style={{fontSize:'20px'}}>{this.state.firstname} {this.state.lastname}</p>
            <p>{this.state.username}</p>
          </div>
          <div className="myaccountbio">
            <p>{this.state.userbio}</p>
          </div>
          <div className="myaccountjoindate">
            <p>Member Since: {this.state.joinmonth}, {this.state.joinyear}</p>
          </div>
        </div>
      </div>
    );
  }
})
