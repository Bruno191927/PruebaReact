import React , {useState,useEffect} from "react";

export default function HooksDeEstado(params) {
    const [stateCar , setStateCar] = useState(false);
    const [contar,setContar] = useState(0);

    useEffect(() => {
        console.log(`Total ${contar}`);
    }, [contar])

    const encenderApagar= () =>{
        //setStateCar(!stateCar);
        setStateCar(prevValue => !prevValue);
        setContar(contar+1);
    }

    return (
        <div>
            <h3>El coche esta: {stateCar ? "Encendido":"Apagado"}</h3>
            <h4>Contar : {contar}</h4>
            <button onClick={encenderApagar}>Encender/Apagar</button>
        </div>
    );
}