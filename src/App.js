import React, { Component } from 'react'
import { Route, BrowserRouter, Routes  } from 'react-router-dom'
import NewsNavbar from './Components/navbar'
import NewsList from './Components/newslist'

export default class App extends Component {
  constructor(){
    super()
    this.state={
      country:'in',
      pageSize:15,
      mode:'light'
    }
    this.toggleMode=this.toggleMode.bind(this)
  }
  toggleMode(e){
    if(e.target.checked === true){
      this.setState({
        mode: 'dark'
      })
      document.body.style.background='#061020'
    }else{
      this.setState({
        mode: 'light'
      })
      document.body.style.background='light'
    }
  }
  render() {
    return (
      <>
        <NewsNavbar toggleMode={this.toggleMode} mode={this.state.mode} />
        <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<NewsList country={this.state.country} pageSize={this.state.pageSize} category='general' mode={this.state.mode} />} />
          <Route exact path="/entertainment" element={<NewsList country={this.state.country} pageSize={this.state.pageSize} category='entertainment' mode={this.state.mode} />} />
          <Route exact path="/business" element={<NewsList country={this.state.country} pageSize={this.state.pageSize} category='business' mode={this.state.mode} />} />
          <Route exact path="/health" element={<NewsList country={this.state.country} pageSize={this.state.pageSize} category='health' mode={this.state.mode} />} />
          <Route exact path="/science" element={<NewsList country={this.state.country} pageSize={this.state.pageSize} category='science' mode={this.state.mode} />} />
          <Route exact path="/sports" element={<NewsList country={this.state.country} pageSize={this.state.pageSize} category='sports' mode={this.state.mode} />} />
          <Route exact path="/technology" element={<NewsList country={this.state.country} pageSize={this.state.pageSize} category='technology' mode={this.state.mode} />} />
          <Route exact path="/" element={<NewsList country={this.state.country} pageSize={this.state.pageSize} category='general' mode={this.state.mode} />} />
        </Routes>
        </BrowserRouter>
      </>
    )
  }
}
