function Button(props) {
    return (
        <button className={"button " + props.btnClass} onClick={() => props.setCurrentView(props.view)} /* TODO mettre ce onClick dans le composant link et l'enlever du button */>
            {props.btnLabel}
        </button>
    );
}

export default Button;