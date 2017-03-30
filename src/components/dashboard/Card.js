import React, { Component } from 'react';

class Card extends Component {
  static defaultProps = {
    category: '',
    footer: ''
  }

	render() {
		const { title, category, children, footer } = this.props;

		return (
			<div className="card">
        <div className="header">
        	<h4 className="title">{ title }</h4>
        	<p className="category">{ category }</p>
        </div>
        <div className="content">
        	{ children }
        	<div className="footer">
            <hr/>
            <div className="stats">
              { footer }
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default Card;