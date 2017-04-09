import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		const menu = this.props.menu || 'Dashboard';

		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
            <button type="button" className="navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar bar1"></span>
              <span className="icon-bar bar2"></span>
              <span className="icon-bar bar3"></span>
            </button>
            <a className="navbar-brand" href="#">{ menu }</a>
          </div>
          <div className="collapse navbar-collapse">
          	<ul className="nav navbar-nav navbar-right">
          	</ul>
          </div>
				</div>
			</nav>
		);
	}
}

export default NavBar;