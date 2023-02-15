import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ lock, error, name, placeholder, ...props }) => {
    const mode = lock ? 'lock-input' : null;
    const state = error ? 'error-input' : 'default-input';
    return (
        <input
            disabled={lock ? true : false}
            className={[mode, state].join(' ')}
            placeholder={placeholder}
            name={name}
            {...props}/>
    );
};

Input.propTypes = {
    lock: PropTypes.bool,
    error: PropTypes.bool,
    placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
    lock: false,
    error: false,
    placeholder: 'Placeholder...',
};
