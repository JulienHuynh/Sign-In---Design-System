import {Input} from "../../atoms/Input/Input";
import PropTypes from "prop-types";

export const FormInput = ({ label, name, placeholder, lock, error, size, ...props }) => {
    return (
        <div className="form-input">
            <label className="label -regular">{label}</label>
            <Input placeholder={placeholder} name={name} lock={lock} error={error} size={size} {...props}></Input>
        </div>
    );
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    lock: PropTypes.bool,
    error: PropTypes.bool,
    size: PropTypes.oneOf(['medium', 'large']),
    placeholder: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
    label: 'Label',
    name: 'input-name',
    lock: false,
    size: 'medium',
    error: false,
    placeholder: 'Placeholder...',
};
