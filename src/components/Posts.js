import React, { Component } from 'react';
import  { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPosts } from '../actions/PostActions';



class Posts extends Component {

    componentDidMount(){
        this.props.fetchPosts(); //calling the action
    }

    componentWillReceiveProps(nextProps){
        
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }



    
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.title}>
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


Posts.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired,
    newPost:PropTypes.object

};



const mapStateToProps = state =>({
    posts:state.posts.items,
    newPost:state.posts.item
});



export default connect(mapStateToProps, { fetchPosts })(Posts);