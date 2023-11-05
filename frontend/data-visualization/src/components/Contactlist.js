import React from "react";
import Contactcard from "./Contactcard";

const Contactlist= (props)=>{
    const renderContactList = props.contacts.map((contact)=>{
        return(
            <Contactcard contact={contact} />
        )
    })

    
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default Contactlist;