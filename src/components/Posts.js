import React, { Component } from 'react';


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[]
        }

    }

    componentWillMount() {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res =>res.json())
            .then(data=> this.setState({
                posts:data
            }));


    }

    componentDidMount() {


    }


    render() {
        console.log(this.state.posts)
        return (
            <div>
                Posts home
            </div>
        );
    }
}

export default Posts;