import './Button.css'

const Button = props =>{
    return (
        <div className={props.classes} style={props.style} onClick={props.buttonClick}>
            <p>{props.text}</p>
        </div>
    )
}

export default Button