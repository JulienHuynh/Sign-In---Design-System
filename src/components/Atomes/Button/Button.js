function Button(props) {
    return (
        <button className={"button " + props.btnClass}>
            {props.btnLabel}
        </button>
    );
}

export default Button;