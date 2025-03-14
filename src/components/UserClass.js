import {Component} from "react";
import {UserContext} from "../utils/UserContext";

class UserClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                name : "Dummy Name",
                location : "Dummy Location",
            },
            count : 0
        };
        console.log(this.props.name +"Child constructor");
    }

    render() {
        // const { name, location } = this.props;
        const {name,location,twitter_username,avatar_url} = this.state.userInfo;
        console.log(this.props.name +"Child render")
        // debugger;
        return (
            <div className="user-card">
                {/* <h1>{this.state.count} Class-Based </h1> */}
                <img src={avatar_url} width={200} height={200} />
                <h2>{name}</h2>
                {/* <UserContext.Consumer>
                    {
                        ({loggedInUser}) => {
                            return <p>{loggedInUser}</p>
                        }
                    }
                </UserContext.Consumer> */}
                <p>{location}</p>
                <p>{twitter_username}</p>
                {/* <p>{this.state.count}</p> */}
                
            </div>
        );
    }
    async componentDidMount(){
        console.log(this.props.name +"Child Component Did Mount");

        try {
            const response = await fetch('https://api.github.com/users/parthgupta49'); 
            const data = await response.json();
            console.log(data);
            this.setState({
                userInfo : data
            })
        } catch (error) {
            console.log("error while fetching the data");
        }

        this.timer = setInterval(()=>{
            console.log("HELLO JIII KAISE HO SAARE");
        },1000)

    }
    componentDidUpdate(prevProps,prevState){
        console.log(this.props.name + "Child is updating sir" );

        // we are saying that do the following stuff ( given in the if-condition ), whenever the component gets updated with being the state variable count gets changed
        if (this.state.count !== prevState.count){
            console.log("count has changed");
        }

    }

    componentWillUnmount(){
        console.log("Child component is unmounted");
        clearInterval(this.timer);
    }
}

export default UserClass;
