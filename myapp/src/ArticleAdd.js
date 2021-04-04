import React, { Component } from 'react';
import axios from 'axios';
class ArticleAdd extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            author: ''
        }
    }

    changeHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler= e =>{
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8000/api/articles/", this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })

    }
    render() {
        const { title, description, author } = this.state;
        return (
        <div className="ArticleAdd">
            <h4>Create an Article</h4>
            <form onSubmit={this.submitHandler}>
              <label>Title:</label>
              <input type="text" name="title" value={title} onChange={this.changeHandler}/><br></br>
              <label>Description:</label>
              <input type="text" name="description" value={description} onChange={this.changeHandler}/><br></br>
              <label>Author:</label>
              <input type="text" name="author" value={author} onChange={this.changeHandler}/><br></br>
              <input type="submit" value="Save"/>
            </form>
        </div>
        );
    }
}
export default ArticleAdd;