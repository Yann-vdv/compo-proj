import { useEffect, useState } from 'react';
import '../asset/css/planet.css';

interface PlanetType {
    data: {
        climate: string
        created: string
        diameter: string
        edited: string
        films: string[]
        gravity: string
        name: string
        orbital_period: string
        population: string
        residents: string[]
        rotation_period: string
        surface_water: string
        terrain: string
        url: string
    }
    image: string
    buttonFct?: () => void
    buttonText?: string
}

export const Planet = (planet:PlanetType) => {

    const [isDestroyed,setIsDestroyed] = useState(false);

    useEffect(() => {
        if (parseInt(planet.data.population) <= 0) {
            setIsDestroyed(true);
        }
    },[planet.data.population])

    const formatePop = (popToFormate : string | number) => {
        let pop = popToFormate.toString()
        if (pop === "unknown") {
            return pop;
        } else {
            let newPop = "";
            for (let i = pop.length; i > 0; i = i - 3) {
                newPop = pop.substring(i,i-3) + " " + newPop;
            }
            return newPop;
        }
    }

    return (
        <div className='planet'>
            <div className="imageContainer">
                <img 
                    className='image' 
                    src={
                        isDestroyed ?
                            require('../asset/image/destroyed.jpg')
                            : require(`../asset/image/planets/${planet.image}.jpg`)
                        }
                    alt={planet.data.name}
                />
            </div>
            <h3>{planet.data.name}</h3>
            <p>Diamètre : {isDestroyed ? "unknown" : planet.data.diameter + " km"}</p>
            <p>Climat : {isDestroyed ? "unknown" : planet.data.climate}</p>
            <p>Gravité : {isDestroyed ? "unknown" : planet.data.gravity}</p>
            <p>Période de rotation : {isDestroyed ? "unknown" : planet.data.rotation_period + " h"}</p>
            <p>Population : {isDestroyed ? "unknown" : formatePop(planet.data.population)}</p>
            {!isDestroyed && <button className='attackButton' onClick={planet.buttonFct}>{planet.buttonText}</button>}
        </div>
    )
};