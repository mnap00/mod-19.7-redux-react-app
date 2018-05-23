import React, {Component} from 'react';
import {connect} from 'react-redux';
import SubmitForm from './SubmitForm';
import CommentsList from './CommentsList';
import {addComment} from './actions';

class CommentsListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleOnChange = event => {
        event.preventDefault();
        this.setState({
            value: event.target.value
        });
        console.log(this.state.value);
    }

    handleKeyPress = event => {
        if (event.keyCode === 13
            && event.shiftKey === true
            && this.state.value) {
            this.props.addComment(this.state.value);
            this.setState({value: ''});
            event.preventDefault();
        }
    }

    render() {
        return (
            <div>
                <SubmitForm
                    handleKeyPress={this.handleKeyPress}
                    handleOnChange={this.handleOnChange}
                    value={this.state.value}
                />
                <CommentsList comments={this.props.comments} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    comments: state.comments
});

const mapDispatchToProps = dispatch => ({
    addComment: text => {
        dispatch(addComment(text));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentsListContainer);
