import React from "react";

export default function Saludar(props) {
    const {userInfo,saludarFn} = props;

    //props por defecto
    //const {name = "Default"} = props;
    return (
        <div>
            <p>Hola {userInfo.name} , tiene {userInfo.age} años de edad, le gusta el color {userInfo.color}</p>
            <div>
                <button onClick={()=>saludarFn(userInfo.name)}>Saludar</button>
            </div>
        </div>
    );
}