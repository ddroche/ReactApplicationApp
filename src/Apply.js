import React, { Component } from 'react';

class Apply extends Component {
  render() {
    return (
        <div className="row">
            <form id="apply" className="form-horizontal col-md-8 col-md-offset-2">
                <h3>Personal Information</h3>
                <div className="form-group">
                    <label htmlFor="firstName" className="col-md-4 control-label">First Name</label>
                    <div className="col-md-8">
                        <input type="text" name="firstName" id="firstName" placeholder="First Name" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName" className="col-md-4 control-label">Last Name</label>
                    <div className="col-md-8">
                        <input type="text" name="lastName" id="lastName" placeholder="Last Name" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="desiredJob" className="col-md-4 control-label">Desired Job</label>
                    <div className="col-md-8">
                        <input type="text" name="desiredJob" id="desiredJob" placeholder="Desired Job" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="desiredLocation" className="col-md-4 control-label">Desired Location</label>
                    <div className="col-md-8">
                        <div className="input-group"><span className="input-group-addon"><input type="checkbox" name="remote" id="remoteBox" aria-label="..." /><span> Remote</span></span>
                            <input type="text" name="desiredLocation" id="desiredLocation" placeholder="Desired Location" className="form-control" />
                        </div>
                    </div>
                </div>
                <h3>Employment History</h3>
                <h4>Employer 1</h4>
                <div className="form-group">
                    <label htmlFor="jobTitle" className="col-md-4 control-label">Job Title</label>
                    <div className="col-md-8">
                        <input type="text" name="jobTitle1" id="jobTitle" placeholder="Title" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="employer" className="col-md-4 control-label">Employer</label>
                    <div className="col-md-8">
                        <input type="text" name="employer1" id="employer" placeholder="Employer" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="empCity" className="col-md-4 control-label">City</label>
                    <div className="col-md-8">
                        <input type="text" name="empCity1" id="empCity" placeholder="City" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="empState" className="col-md-4 control-label">State</label>
                    <div className="col-md-8">
                        <input type="text" name="empState1" id="empState" placeholder="State" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="col-md-4 control-label">Description</label>
                    <div className="col-md-8">
                        <input type="text" name="description1" id="description" placeholder="Brief Description of Position" className="form-control" />
                    </div>
                </div>
                <h4>Employer 2</h4>
                <div className="form-group">
                    <label htmlFor="jobTitle2" className="col-md-4 control-label">Job Title</label>
                    <div className="col-md-8">
                        <input type="text" name="jobTitle2" id="jobTitle2" placeholder="Title" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="employer2" className="col-md-4 control-label">Employer</label>
                    <div className="col-md-8">
                        <input type="text" name="employer2" id="employer2" placeholder="Employer" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="empCity2" className="col-md-4 control-label">City</label>
                    <div className="col-md-8">
                        <input type="text" name="empCity2" id="empCity2" placeholder="City" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="empState2" className="col-md-4 control-label">State</label>
                    <div className="col-md-8">
                        <input type="text" name="empState2" id="empState2" placeholder="State" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description2" className="col-md-4 control-label">Description</label>
                    <div className="col-md-8">
                        <input type="text" name="description2" id="description2" placeholder="Brief Description of Position" className="form-control" />
                    </div>
                </div>
                <h4>Employer 3</h4>
                <div className="form-group">
                    <label htmlFor="jobTitle3" className="col-md-4 control-label">Job Title</label>
                    <div className="col-md-8">
                        <input type="text" name="jobTitle3" id="jobTitle3" placeholder="Title" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="employer3" className="col-md-4 control-label">Employer</label>
                    <div className="col-md-8">
                        <input type="text" name="employer3" id="employer3" placeholder="Employer" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="empCity3" className="col-md-4 control-label">City</label>
                    <div className="col-md-8">
                        <input type="text" name="empCity3" id="empCity3" placeholder="City" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="empState3" className="col-md-4 control-label">State</label>
                    <div className="col-md-8">
                        <input type="text" name="empState3" id="empState3" placeholder="State" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description3" className="col-md-4 control-label">Description</label>
                    <div className="col-md-8">
                        <input type="text" name="description3" id="description3" placeholder="Brief Description of Position" className="form-control" />
                    </div>
                </div>
                <h3>Skills</h3>
                <div className="form-group">
                    <label htmlFor="skills" className="col-md-4 control-label">Skills</label>
                    <div className="col-md-8">
                        <input type="text" name="skills" id="skills" placeholder="List of skills" className="form-control" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="submission" className="col-md-4 control-label">Apply Today!</label>
                    <div className="col-md-8">
                        <input type="submit" id="submission" value="Submit" className="btn btn-default col-md-12" />
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

export default Apply;
