import { useEffect, useState } from "react";
const User = () => {
    const [count,setCount] = useState(0);

// useEffect(() => { 
//     const timer = setInterval(()=>{
//         console.log("Hello Ji");
//     },1000);

//     return () => {
//         console.log("Functional Component Unmounted now");
//         clearInterval(timer);
//     }
// })

    return (
        <div className="user-card">
            <h1>{count}</h1>
            <h2>Name</h2>
            <p>Location</p>
            <p>Twitter</p>
        </div>
    )
}

export default User;