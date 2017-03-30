import React, { Component } from 'react';
import NavBar from './NavBar';
import Content from './Content';
import Footer from './Footer';

class MainPanel extends Component {
	render() {
		return (
			<div className="main-panel">
				<NavBar menu={ this.props.menuActive } />
				
				<Content>
        	{ this.props.children }
        </Content>

        <Footer />
			</div>
		);
	}
}

export default MainPanel;