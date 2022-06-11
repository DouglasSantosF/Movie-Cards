import React, { Component } from 'react';
import LOAD from '../loadingfig.png';
import '../css/Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img width="250px" src={ LOAD } alt="imagem de load" />
      </div>
    );
  }
}

export default Loading;
