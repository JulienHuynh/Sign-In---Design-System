function Button(props) {
    return (
        <button className={"button " + props.btnClass} /* TODO mettre onClick={() => props.setCurrentView(props.view)} dans le composant link et l'enlever du button */>
            {props.btnLabel}
        </button>
    );
}

export default Button;