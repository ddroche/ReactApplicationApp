import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
        <div>
            <h2>Rando Corp Applicant Admin</h2>
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="input-group">
                        <input type="text" placeholder="Search for..." id="searchbox" className="form-control" />
                        <span className="input-group-btn">
                            <button type="submit" id="search" className="btn btn-default">Search</button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <h3>Current Applicants</h3>
                    <table id="appTable" className="table table-hover">
                    </table>
                </div>
            </div>
        </div>
    );
  }
}

export default Admin;
