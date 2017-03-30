import React, { Component } from 'react';
import { Link } from 'react-router';

class MenuItem extends Component {
	static defaultProps = {
	  href: '#'
	}

	constructor(props) {
	  super(props);

	  this.isActive = this.isActive.bind(this);
	}

	isActive() {
		return window.location.pathname.split('/')[1] === this.props.href.split('/')[1];
	}

	componentDidMount() {
		const { menuActive, name } = this.props;
		if (this.isActive())
			menuActive(name);
	}

	render() {
		const { name, icon, href, menuActive } = this.props;

		return (
			<li className={ this.isActive() ? "active" : ""}>
        <Link to={ href } onClick={ (e) => { menuActive(name) } }>
					<i className={ icon }></i>
					<p>{ name }</p>
				</Link>
      </li>
		);
	}
}

export default MenuItem;