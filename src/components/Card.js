import React from "react";

const Card = ({name, email, id, username}) => {
    return (
        <div className=' code bg-light-purple br4 shadow-5 grow ma1 tc'>
            <img className="ma3" alt={`Cat ${id}`} src={`https://robohash.org/${username}?set=set4`}/>
                <div>
                    <h2>{name}</h2>
                    <p className="pa3">{email}</p>
                </div>
        </div>
    )
}
    export default Card;