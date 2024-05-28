import React, { useState, useEffect } from "react";
import '..//CSS/Cronometro.css';

function Cronometro() {
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [iniciado, setIniciado] = useState(false);

    useEffect(() => {
        let intervalo;
        if (iniciado) {
            intervalo = setInterval(() => {
                setSegundos((segundos) => segundos + 1);
            }, 1000);
        } else {
            clearInterval(intervalo);
        }
        return () => clearInterval(intervalo);
    }, [iniciado]);

    const iniciarCronometro = () => {
        setIniciado(true);
    };

    const pausarCronometro = () => {
        setIniciado(false);
    };

    const zerarCronometro = () => {
        setSegundos(0);
        setMinutos(0);
        setHoras(0);
        setIniciado(false);
    };
    useEffect(() => {
        if (segundos === 60) {
            setSegundos(0);
            setMinutos(minutos + 1);
        }
        if (minutos === 60) {
            setMinutos(0);
            setHoras(horas + 1);
        }
    }, [segundos, minutos, horas]);

    return (
        <div className="cronometro-container">
            <h2>Cronômetro</h2>
            <div className="cronometro-display">
                <span>{horas < 10 ? `0${horas}` : horas}</span>:
                <span>{minutos < 10 ? `0${minutos}` : minutos}</span>:
                <span>{segundos < 10 ? `0${segundos}` : segundos}</span>
            </div>
            <div>
                {!iniciado ? (
                    <button className="iniciar" onClick={iniciarCronometro}>Iniciar</button>
                ) : (
                    <button className="pausar" onClick={pausarCronometro}>Pausar</button>
                )}
                <button className="zerar" onClick={zerarCronometro}>Zerar</button>
            </div>
        </div>
    );
}

export default Cronometro;
