import React from 'react';
import PropTypes from 'prop-types';
import '../../../static/css/style.css'

/**
 * Primary UI component for user interaction
 */
export const Button = ({variant, size, disabled}) => {
    const mode = disabled ? '-disabled' : '';
    return (
        <button className={"button " + `-${size} ` + `-${variant} ` + mode}>This is a buttton</button>
    );
};

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    variant: PropTypes.oneOf(['primary', 'secondary', 'destructive']),
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xl']),
};

Button.defaultProps = {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
    disabled: false,
};

export default Button