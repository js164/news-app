import React, { Component } from 'react'
import News from './news';
import Loading from './loading';

export default class NewsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            totalpage: 0,
            page: 1,
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({
            loading: true
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0a5247d99efb45238d358f9c8fd45f75&pageSize=${this.props.pageSize}&page=1`
        let data = await fetch(url)
        let jsondata = await data.json()
        console.log(jsondata);
        this.setState({
            articles: jsondata.articles,
            totalpage: Math.ceil(jsondata.totalResults / this.props.pageSize),
            loading: false
        })
    }

    moveToPrevious = async () => {
        this.setState({
            loading: true
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0a5247d99efb45238d358f9c8fd45f75&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`
        let data = await fetch(url)
        let jsondata = await data.json()
        this.setState({
            articles: jsondata.articles,
            page: this.state.page - 1,
            loading: false
        })
    }

    moveToNext = async () => {
        this.setState({
            loading: true
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0a5247d99efb45238d358f9c8fd45f75&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`
        let data = await fetch(url)
        let jsondata = await data.json()
        this.setState({
            articles: jsondata.articles,
            page: this.state.page + 1,
            loading: false
        })
    }
    render() {
        return (
            <div style={{background:this.props.mode === 'dark' ? '#061020' : 'white',color:this.props.mode === 'dark' ? 'white' : 'black'}}>
                <div className='container'>
                    <h1 className='text-center'>News</h1>
                    {this.state.loading ? <Loading mode={this.props.mode}/> : <> <div className="row">
                        {this.state.articles && this.state.articles.map((news) => {
                            return <News key={news.url} title={news.title} url={news.url} urlToImage={news.urlToImage} description={news.description} author={news.author}
                             source={news.source.name} publishedAt={news.publishedAt} mode={this.props.mode}/>
                        })}
                    </div>
                        <div className="d-flex justify-content-between py-5">

                            <button disabled={this.state.page === 1} onClick={this.moveToPrevious} className={`btn btn-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>&larr; Previous</button>
                            <button disabled={this.state.page === this.state.totalpage} onClick={this.moveToNext} className={`btn btn-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>Next &rarr;</button>
                        </div></>
                    }
                </div>
            </div>
        )
    }
}
