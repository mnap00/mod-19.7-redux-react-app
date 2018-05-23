import React from 'react';
import CommentContainer from './CommentContainer';


const CommentsList = ({comments}) => {
    return (
        <div>
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
