import ButtonContainer from "./ButtonContainer";
const Counter = ({ val, handleIncrement, handleDecrement }) => {
    let v=""
    if(val<0){
        v = <p>Negative Value</p>
    }
    else if(val>5){
        v = <p>Value is too high</p>
    }
  return (
    <div className="counter">
      <h1>{val}</h1>
      {v}
      <ButtonContainer
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></ButtonContainer>
    </div>
  );
};

export default Counter;
