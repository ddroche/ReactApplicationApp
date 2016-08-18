import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
        <nav role="navigation" className="navbar navbar-default">
            <div className="navbar-header">
                <button type="button" data-toggle="collapse" data-target="#undefined" aria-expanded="false" aria-controls="navbar" className="navbar-toggle collapsed">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a href="#" className="navbar-brand">Rando Corp</a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/apply">Apply</Link></li>
                    <li><Link to="/admin">Admin</Link></li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default Nav;
