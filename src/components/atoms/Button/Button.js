import React from 'react';
import PropTypes from 'prop-types';
import '../../../static/css/style.css'

export const Button = ({variant, size, disabled, label}) => {
    const mode = disabled ? '-disabled' : '';
    return (
        <button className={"button " + `-${size} ` + `-${variant} ` + mode}>{label}</button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'destructive']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xl']),
};

Button.defaultProps = {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
    disabled: false,
};

export default Button