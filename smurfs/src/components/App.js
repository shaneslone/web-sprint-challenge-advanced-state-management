import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../store/actions';

import Smurf from './Smurf';
import AddSmurf from './AddSmurf';

import './App.css';
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className='App'>
        {console.log(this.props.smurfs)}
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AddSmurf addSmurf={this.props.addSmurf} />
        {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, addSmurf })(App);
