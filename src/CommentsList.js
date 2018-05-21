import React from 'react';
import CommentContainer from './CommentContainer';


const CommentsList = ({comments, handleAddComment}) => {
    return (
        <div>
            <form name='comment-input' onSubmit={handleAddComment}>
                <label htmlFor='comment'>Add comment: </label>
                <input type='text' id='comment' />
            </form>
            <ul>
                {comments.map(
                    comment =>
                        <CommentContainer key={comment.id} {...comment} />
                )}
            </ul>
        </div>
    );
};

export default CommentsList;
