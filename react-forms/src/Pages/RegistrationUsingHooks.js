import { useForm } from "react-hook-form";

const RegistrationUsingHooks = ()=>{
    const{register, handleSubmit} = useForm();
    const onSubmit = (data) =>{
        console.log(data)
    };

    return(
        <div>
            <h1>Registration Using Hooks</h1>   
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name: </label>
                <input {...register("name")} type="text"></input><br/>

                <label>Age: </label>
                <input {...register("age")} type="number"></input><br/>

                <label>Email: </label>
                <input {...register("email")} type="email"></input><br/>

                <label>Password: </label>
                <input {...register("password")} type="password"></input><br/>

                <label>College name: </label>
                <input {...register("clgName")} type="text"></input><br/>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default RegistrationUsingHooks;
