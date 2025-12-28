import React, { useState, useEffect} from 'react';
class User extends React.Component {
    constructor(props) {   //props will be received here
        super(props); //why need to call super ? to call the constructor of parent class (React.Component)
        
        this.state = {
            count:0,
            userInfo: ""
        }; //state is an object
    
    
    }

    async componentDidMount() {
        await fetch("https://api.github.com/users/priyanka23ait")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
               userInfo: data,
            });
        });
    }
    
    render(){ 
        let {login ,location, avatar_url} = this.state.userInfo;        
        return (
           
            <div className="user-class">

               {/* <button onClick={()=>{
                     this.setState({count: this.state.count + 1})
               }}>Increment</button> 
                <h1>Count: {this.state.count} </h1> */}
                <div className="user-image">
                    <img src={avatar_url} alt="user-image" width="100" height="100"/>
                </div>
                <div className="user-data">

                    <h2>Name: {login}</h2>
                    <h2>Location: {location}</h2>
                </div>
               
            </div>
        )
    }
}

export default User;