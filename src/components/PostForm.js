import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostForm extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }   

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Title:</label> <br/>
                        <input type="text" name="title"/>
                         </div>

                         <div>
                        <label>Body:</label> <br/>
                        <textarea name="body"/>
                         </div>
                         <br/>
                         <button type="submit"> Submit </button>
                    </form>

            </div>
        );
    }
}

PostForm.propTypes = {

};

export default PostForm;