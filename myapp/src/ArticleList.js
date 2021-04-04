import './App.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ArticleList extends Component {
  state = {
    error: null,
    isLoaded: false,
    articles: []
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/articles/")
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            articles: data
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  deleteArticle = (id,e)=> {
    axios.delete(`http://localhost:8000/api/articles/${id}/`)
    .then((res)=> {
      const articles = this.state.articles.filter(article => article.id !== id);  
      this.setState({ articles }); 
      return res.data; 
    })
    .catch(error =>{
      console.log(error.message);
    })
   
  }
  render() {
    const { error, isLoaded, articles } = this.state;
    
    if (error) {
      return <div className="ArticleList">Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className="ArticleList">Loading...</div>;
    } else {
      return (
          <div className="ArticleList">
            <table>
              <thead>
                <th>Title</th>
                <th>Description</th>
                <th>Author</th>
                <th>Posted_at</th>
                <th>Action</th>
              </thead>
              <tbody>
              {articles.map(article => (
                <tr key={article.id}>
                  <td>{article.title}</td>
                  <td>{article.description}</td>
                  <td>{article.author}</td>
                  <td>{article.created}</td>
                  <td>
                  <button tag={Link} to={"/articles/" + article.id}>Edit</button>
                  <button onClick={(e)=> this.deleteArticle(article.id, e)}>Detele</button>&nbsp;
                  </td>
                </tr>
               
              )
              )}
              </tbody>
            </table>
          </div>
      );
    }
  }
}

export default ArticleList;
