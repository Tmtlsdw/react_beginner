import React from "react";
import Card from "./Card";

const CardList = ({props}) => {
    const cardArray = props.map((user, i) => {
        return <Card id={user[i].id} name={user[i].name} email={user[i].email}/>
    })

    return(
        <div>
            {cardArray}
        </div>
    );
}
export default CardList;