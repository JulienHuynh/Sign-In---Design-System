import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Input = ({ type, lock, name, placeholder, size }) => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const state = error ? 'error-input' : 'default-input';
    const mode = lock ? 'lock-input' : null;

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        setEmail(event.target.value);
    };

    return (
        <>
            {error && <p className={'error-message'}>{error}</p>}
            <input
                disabled={lock}
                className={[`input-size--${size}`, mode, state].join(' ')}
                placeholder={placeholder}
                name={name}
                type={type}
                value={email}
                onChange={type === 'email' && handleChange}
            />
        </>
    );
};

Input.propTypes = {
    type: PropTypes.oneOf(['email', 'password']),
    lock: PropTypes.bool,
    size: PropTypes.oneOf(['medium', 'large']),
    placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
    type: PropTypes.oneOf(['email', 'password']),
    lock: false,
    size: 'medium',
    placeholder: 'Placeholder...',
};
