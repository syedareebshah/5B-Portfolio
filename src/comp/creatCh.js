import React, { Component } from 'react'

import MyComponent from 'react-full-page-scroller'
import 'react-full-page-scroller/dist/index.css'
import NavBar from './nav/nav'

class Example extends Component {
  render() {
    return (
      <MyComponent>
        <div>
          <h1>1</h1>
        </div>
        <div>
          <h1>2</h1>
        </div>
        <div>
          <h1>3</h1>
        </div>
      </MyComponent>
    )
  }
}

export default Example;