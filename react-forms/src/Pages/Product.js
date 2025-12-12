import { useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Product = () => {
    const {id} = useParams();
    const {data} = useOutletContext();
    let[myData, setMyData] = useState();
    console.log(data);

    useEffect(()=>{
        let a = data.find((as)=>as.id==id);
        console.log(a);

        setMyData(a);
    }, [id, data]);

    return (
        <div>
            <h1>Product id: {id}</h1>
            <h1>{myData}</h1>
        </div> 
    );
}
export default Product; 