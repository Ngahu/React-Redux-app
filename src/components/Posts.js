import React, { Component } from 'react';
import  { connect } from 'react-redux';

import {fetchPosts } from '../actions/PostActions';



class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts(); //calling the action
    }
    
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
               {postItems}
            </div>
        );
    }
}

const mapStateToProps = state =>({
    posts:state.posts.items
});


export default connect(mapStateToProps, { fetchPosts })(Posts);