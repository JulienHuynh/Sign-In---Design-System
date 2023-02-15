
function Link (props) {
    return (
        <a className={"link " + props.linkClass} onClick={() => props.setCurrentView(props.view)}>
            {props.linkLabel}
        </a>
    )
}

export default Link;