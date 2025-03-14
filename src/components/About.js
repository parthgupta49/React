import React from 'react'
import User from './User'
import UserClass from './UserClass'
import { Component } from 'react'

class About extends Component {
    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }
    render() {
        console.log("Parent Render")
        return (
            <div>
                <h1>About Us Page</h1>
                {/* <User /> */}
                {/* when the flow comes here, it will see that there is another class-based component over here, so it will again trigger the life-cycle methods for the Child component as well */}
                <UserClass name={"First Child"} location={"Bangalore"} />
                {/* <UserClass name={"Second Child"} location={"Firozabad"} /> */}
            </div>
        )
    }

    componentDidMount(){
        // console.log("Parent Component Did Mount");
    }
    componentDidUpdate(){
        // console.log("Parent is Updted ?")
    }
    componentWillUnmount(){
        // console.log("Parent is unmounted");
    }
}


// const About = () => {
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <User />
//             <UserClass name={"Parth Gupta"} location={"Bangalore"} />
//         </div>

//     )
// }

export default About