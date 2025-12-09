import ButtonContainer from "./ButtonContainer";
const Counter = ({val, handleIncrement, handleDecrement}) => {
    return (
        <div className="counter">
            <h1>{val}</h1>
            <ButtonContainer handleDecrement={handleDecrement} handleIncrement={handleIncrement}></ButtonContainer>
        </div>
    );
}

export default Counter;