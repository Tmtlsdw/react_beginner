import React from "react";

const Card = ({name, email, id}) => {
    return (
        <div className='code bg-light-purple br4 shadow-5 grow fl w-10-l ma1-l w-20-m ma2-m w-50-ns ma1-ns'>
            <img alt='Cat' src={`https://robohash.org/?${id}&set=set4&size=200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        </div>
    )
}
    export default Card;