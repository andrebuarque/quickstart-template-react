import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<footer className="footer">
        <div className="container-fluid">
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#">
                  Link 2
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright pull-right">
            Copyright
          </div>
        </div>
      </footer>
		);
	}
}

export default Footer;