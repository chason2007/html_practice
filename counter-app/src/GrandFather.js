import Father from "./Father";

const GrandFather = () => {
    return (
        <div className="gf">
            <h2>This is GrandFather Component</h2>
            <Father></Father>
        </div>
    );
}
export default GrandFather;