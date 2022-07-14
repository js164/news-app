import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default class News extends Component {

  render() {
    return (
        <div className="col-md-4 my-2" >
        <Card style={{background:this.props.mode === 'dark' ? '#061020' : 'white',color:this.props.mode === 'dark' ? 'white' : 'black',border:"none"}}>
        <Badge bg="info" style={{width:"fit-content", position:"absolute",right:"-10px",top:"-10px"}}>{this.props.source}</Badge>
        <Card.Img variant="top" src={this.props.urlToImage?this.props.urlToImage:"https://images.news18.com/ibnlive/uploads/2022/01/untitled-design-1-108-164329132916x9.png"} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description?this.props.description.slice(0,100)+"...":""}</Card.Text>
          <Card.Text>By {this.props.author?this.props.author:"Unknown"} at {new Date(this.props.publishedAt).toLocaleString()}</Card.Text>
          <a href={this.props.url} className={`btn btn-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>Read More</a>
        </Card.Body>
      </Card>
        </div>
    )
  }
}
