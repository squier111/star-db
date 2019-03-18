import React, { Component } from 'react'
import ErrorIndicator from '../error-indicator'




export default class ErrorBoundry extends Component {
  constructor() {
      super();
      this.state = {
          hasError: false,
      }
  }

  componentDidCatch(error , info) {
      this.setState({
          hasError: true
      });
  }

  render() {
      if(this.state.hasError) {
          return <ErrorIndicator/>
      }
      return this.props.children;
  }
}