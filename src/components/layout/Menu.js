import React, { Component } from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
	render() {
		const menuActive = this.props.menuActive;

		return (
			<div className="sidebar" data-background-color="white" data-active-color="danger">
				<div className="sidebar-wrapper">
					<div className="logo">
            <a href="http://www.creative-tim.com" className="simple-text">
							App Name
            </a>
          </div>

          <ul className="nav">
          	<MenuItem name="Dashboard" icon="ti-panel" href="/" menuActive={menuActive} />
	        	<MenuItem name="Reports" icon=" ti-stats-up" href="/reports" menuActive={menuActive} />
          </ul>
				</div>	
			</div>
		);
	}
}

export default Menu;