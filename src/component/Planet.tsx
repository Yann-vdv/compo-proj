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

    return (
        <div className='planet'>
            <div className="imageContainer">
                <img className='image' src={require(`../asset/image/planets/${planet.image}.jpg`)} alt={planet.data.name}/>
            </div>
            <h3>{planet.data.name}</h3>
            <p>Diamètre : {planet.data.diameter} km</p>
            <p>Climat : {planet.data.climate}</p>
            <p>Gravité : {planet.data.gravity}</p>
            <p>Période de rotation : {planet.data.rotation_period} h</p>
            <p>Population : {planet.data.population}</p>
            <button onClick={planet.buttonFct}>{planet.buttonText}</button>
        </div>
    )
};