import React from 'react';

const Comment = ({
    text, votes, id, removeComment, thumbUpComment, thumbDownComment
}) => {
    const opts = {
        readOnly: true,
        height: 'auto'
    };
    return (
        <li>
            <textarea
                value={text}
                readOnly
                style={opts}
            />
            <span>votes: {votes}</span>
            <button onClick={() => removeComment(id)}>Remove</button>
            <button onClick={() => thumbUpComment(id)}>Thumb up</button>
            <button onClick={() => thumbDownComment(id)}>Thumb down</button>
        </li>
    );
};

export default Comment;
