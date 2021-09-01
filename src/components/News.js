import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "health",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async updateNews() {
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62b2298dadc04a748b336f08c85601df&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json();
      this.props.setProgress(70);
      this.setState({
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          loading: false,
        });
      this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  // handlePrevClick =async ()=>{
  //     this.setState({page:this.state.page-1});
  //     this.updateNews();
  // }

  // handleNextClick =async ()=>{
  //     this.setState({page:this.state.page+1});
  //     this.updateNews();
  // }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=62b2298dadc04a748b336f08c85601df&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
    });
  };
  render() {
    return (
      <div className="container my-3 mt-3">
        <h2 className="text-center my-3">
          Peigon News- Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.totalResults !== this.state.articles.length}
          loader={<Spinner />}
        >
        <div className="container">
          <div className="row">
            {this.state.loading && <Spinner />}
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-3" key={element.urlToImage}>
                  <Newsitem
                    title={element.title ? element.title : "..."}
                    description={
                      element.description ? element.description : "..."
                    }
                    ImageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://upload.wikimedia.org/wikipedia/commons/e/ec/RandomBitmap.png"
                    }
                    newsUrl={element.url ? element.url : ""}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>

        {/* <div className="conatiner my-3 d-flex justify-content-between">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>	&#8592; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next	&#8594;</button>
                </div>
                 */}
      </div>
    );
  }
}

export default News;
