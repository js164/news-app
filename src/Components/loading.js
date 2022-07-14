import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
        <div className='text-center' style={{position:'relative',top:"40vh",background:this.props.mode === 'dark' ? '#061020' : 'white',color:this.props.mode === 'dark' ? 'white' : 'black'}}>
      <img src="Spinner-2.gif" alt="loading..."/>
        </div>
    )
  }
}
