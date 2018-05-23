import React from 'react';

const SubmitForm = ({value, handleOnChange, handleKeyPress}) => {
    return (
        <form
            name='comment-input'
            onKeyDown={e => handleKeyPress(e)}
        >
            <textarea
                id='comment'
                name='input'
                onChange={e => handleOnChange(e)}
                placeholder='Enter comment... Submit with Shift+Enter'
                value={value}
            />
        </form>
    );
};

export default SubmitForm;
