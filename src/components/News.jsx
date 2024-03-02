import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/everything?q=cricket&apiKey=5a69802e53944573b99bc18f77caeda5"
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles: parsedData.articles});
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            const truncatedTitle = element.title ? element.title.slice(0, 40) : "No title available";
            const truncatedDescription = element.description ? element.description.slice(0, 50) : "No description available for this particular article";
            const imageUrl = element.urlToImage ? element.urlToImage : 'https://www.cloudways.com/blog/wp-content/uploads/wordpress-404-error.jpg';

            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem imgUrl={imageUrl} title={truncatedTitle} description={truncatedDescription} url={element.url} />
              </div>
            );
          })}
        </div>

      </div>
    )
  }
}

export default News