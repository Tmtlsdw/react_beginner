import React from "react";
import Card from "./Card";

const CardList = ({cats}) => {
    return (
        <div className="flex flex-wrap items-center justify-around">
            {
                cats.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                            username={user.username}
                        />
                    );
                })
            }
        </div>
    );
}
export default CardList;