import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import ApiManager from '../../../api/ApiManager';
const $http = new ApiManager();

class HomeContainer extends Component {
  state = {
    photos: []
  }

  /**
   * 
   */
  componentDidMount() {
    this._init()
  }

  /**
   * 
   */
  render() {
    return <HomePresenter {...this.state} />;
  }

  /**
   * 
   */
  _init = () => {
    $http.get('/photos').then(r => {
      this.setState({
        photos: r.slice(0, 100)
      })
    }).catch(err => {
      alert('에러발생!')
    })
  }
}

export default HomeContainer;