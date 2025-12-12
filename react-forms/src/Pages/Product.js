import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Product = () => {
    const {id} = useParams();
    const {data} = useOutletContext();
    const [myData, setMyData] = useState(null);
    console.log(data);

    useEffect(()=>{
        let a = data.find((as)=>as.id == parseInt(id));
        console.log(a);

        setMyData(a);
    }, [id, data]);

    return (
        <div>
            <h1>Product id: {id}</h1>
            {myData ? (
                <div>
                    <p>Name: {myData.name}</p>
                    <p>Age: {myData.age}</p>
                    <p>Email: {myData.email}</p>
                    <p>College: {myData.clgName}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div> 
    );
}
export default Product; 