import '../asset/css/style.css';
import { useEffect, useState } from 'react';
import { Planet } from '../component/Planet';
import { Title } from '../component/Title';

type PlanetType = {
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

export const App = () => {

  const [data,setData] = useState<PlanetType[]>()
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
    .then(response=>response.json())
    .then(data=>setData(data.results))
  },[])

  const attack = (id:number) => {
    const rand = Math.floor(101 + Math.random() * (2300 - 101));
    if (data) {
      const newList = data.map((item,key) => {
        if (key === id) {
          let newPop:number = item.population === "unknown" ? 0 : Math.floor(parseInt(item.population) - rand - (parseInt(item.population)/100*10));
          const updatedItem = {
            ...item,
            population: `${newPop < 0 ? 0 : newPop}`,
          };
          return updatedItem;
        }
        return item;
      });
      setData(newList);
    }
  }

  return (
    <div className="App">
      {/* {showTitle && 
        <Title
          onClick={() => setShowTitle(false)}
          title='Usage de composant'
          text1='Composant customisable'
          text2='props (données)'
          text3='Composant customisé'
        />} */}
      <div className='planetContainer'>
        {data?.map((item:PlanetType,key:number) => 
          <Planet 
            data={item}
            key={key} 
            image={item.name === 'Yavin IV' ? 'Yavin' : item.name}
            buttonFct={() => attack(key)}
            buttonText='ATTAQUER'
          />
        )}
      </div>
    </div>
  )
}
