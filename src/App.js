import React, { Component } from 'react';
import Menu from './components/layout/Menu';
import MainPanel from './components/layout/MainPanel';

import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      menuActive: null
    };

    this.setMenuActive = this.setMenuActive.bind(this);
  }

  setMenuActive(menu) {
    this.setState({ menuActive: menu });
  }

  render() {
    return (
      <div>
        <Menu menuActive={ this.setMenuActive } />

        <MainPanel menuActive={ this.state.menuActive }>
        	{ this.props.children }
        </MainPanel>

      </div>
    );
  }
}

export default App;
