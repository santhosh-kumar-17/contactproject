import React from "react";

class Addcontact extends React.Component {
    state={
        name : "",
        email : "",
    };

    add = (e)=>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("all fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name : "" ,email :""})
     }
    render() {
        return (
            <div className="ui main">
                <h2>add contact</h2> 
                <h2>Add contact</h2> 
                
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name"  placeholder="Name" onChange={(e)=> this.setState({name : e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email"  placeholder="Email" onChange={(e)=> this.setState({email : e.target.value})} />
                    </div>
                    <button className="ui button blue">add</button>
                </form>
            </div>
        )
    }
}

export default Addcontact;
     