/*function Button(props) {
    return (
        <button className={"button " + props.btnClass}>This is a buttton</button>
    );
}

export default Button;*/

import React from 'react';
import PropTypes from 'prop-types';
//import './button.css';
import '../../static/css/style.css'

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
    variant: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
    variant: 'primary',
    size: 'medium',
    label: 'Button',
    disabled: false,
};

export default Button;