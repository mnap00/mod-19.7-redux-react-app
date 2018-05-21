import {connect} from 'react-redux';
import CommentsList from './CommentsList';
import {addComment} from './actions';

const mapStateToProps = state => ({
    comments: state.comments
});

const mapDispatchToProps = dispatch => ({
    handleAddComment: event => {
        event.preventDefault();
        const text = document.getElementById('comment').value;
        dispatch(addComment(text));
        document.getElementsByName('comment-input')[0].reset();
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
