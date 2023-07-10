import React, { Component } from 'react'
import './style.css'

export default class Title extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        <h1 className='title'>Salom {this.props.name}</h1>
        <h2 style={{color: this.props.color}}>{this.props.name} - {this.props.year} yoshda</h2>
        <hr />
      </>
    )
  }
}