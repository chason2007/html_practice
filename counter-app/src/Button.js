const Button = ({text, func, as}) => {
    return (
        <button onClick={func} className={as}>
            {text}
        </button>
    );
};
export default Button;