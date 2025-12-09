const Comp1 = ({age, myMsg}) => {
    return (
        <div>
          <h2 style={{ color: 'blue' }}>Component 1 created</h2>
          <h1>Age: {age}-{myMsg}</h1>
        </div>
    );
}
export default Comp1;