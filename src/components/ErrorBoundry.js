import React, { Component } from 'react'

export default class ErrorBoundry extends Component {

  state={
    hasError:false,
    error:null,
    errorMessage:null
  }

  
      
      componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
          hasError:true,
          error,
          errorInfo
        })
        // You can also log error messages to an error reporting service here
      }
      render() {
        if (this.state.hasError) {
          // Error path
          return (
            <div>
              <h2>Something went wrong.</h2>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo.componentStack}
              </details>
            </div>
          );
        }
        // Normally, just render children
        return this.props.children;
      }  
    }

