import React from "react";


function MainSection({h1 ,p ,id}){
    return (
        <div className="sections" id={id}>
                
                <h1>{h1}</h1>
                <p>{p}</p>
                
        </div>
    )
}


export default MainSection;

