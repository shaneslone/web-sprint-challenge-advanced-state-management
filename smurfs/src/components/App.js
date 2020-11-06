import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, addSmurf } from '../store/actions';

import Smurf from './Smurf';
import AddSmurf from './AddSmurf';

import './App.css';
import smurflogo from '../images/smurfslogo.png';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className='App'>
        {console.log(this.props.smurfs)}
        <img src={smurflogo} alt='the smurfs' />
        <div className='smurfForm'>
          <AddSmurf addSmurf={this.props.addSmurf} />
        </div>
        <div className='smurfs'>
          {this.props.smurfs.map(smurf => (
            <Smurf key={smurf.id} smurf={smurf} />
          ))}
        </div>
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
