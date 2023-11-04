import React from "react";
import Contactcard from "./Contactcard";

const Contactlist= (props)=>{
    console.log(props)
    const renderContactList = props.contacts.map((contacts)=>{
        return(
            <Contactcard contacts={contacts} />
        )
    })

    
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default Contactlist;