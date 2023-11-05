import React from "react";
import Auth from "../images/Auth.png";

const Contactcard = (props)=>{
    const {id,name,email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={Auth} alt="images" /> 
                <div className="content">
                    <div className="header">
                        <div> 
                            {name} 
                        </div>
                        <div>{email}</div>
                    </div>
                    <i className="trash alternate outline icon" style={{color:"red",marginTop:"7px"}}></i>
                    {/* to add inline css we have to use {} curly braces which is render
                    in myg assumption and also another {} to render css properties 
                    and if we need to use margin-top we have to use marginTop camelCase 
                    to use it  */}
                </div>
            </div>
    )
}

export default Contactcard;