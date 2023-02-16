import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ lock, error, name, placeholder, size, ...props }) => {
    const mode = lock ? 'lock-input' : null;
    const state = error ? 'error-input' : 'default-input';
    return (
        <input
            disabled={lock ? true : false}
            className={[`input-size--${size}`, mode, state].join(' ')}
            placeholder={placeholder}
            name={name}
            {...props}/>
    );
};

Input.propTypes = {
    lock: PropTypes.bool,
    error: PropTypes.bool,
    size: PropTypes.oneOf(['medium', 'large']),
    placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
    lock: false,
    error: false,
    size: 'medium',
    placeholder: 'Placeholder...',
};
