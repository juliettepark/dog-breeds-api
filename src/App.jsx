import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [breed, setBreed] = useState('');
  const [height, setHeight] = useState('');
  const [bredFor, setBredFor] = useState('');
  const [descriptIndex, setDescriptIndex] = useState(null);

  const [banList, setBanList] = useState([]);

  const descriptions = [
    'Absolutely adorable',
    'Majestic',
    'Perfect in every way',
    'Way too cute',
  ]
  
  const updateDescription = () => {
    const randIndex = Math.floor((Math.random()*descriptions.length));
    setDescriptIndex(randIndex);
  }

  const makeQuery = () => {
    // let wait_until = "network_idle";
    // let response_type = "json";
    // let fail_on_status = "400%2C404%2C500-511";
    // let url_starter = "https://";
    // let fullURL = url_starter + inputs.url;
    // let query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;
    // callAPI(query).catch(console.error)
    let url = `https://api.thecatapi.com/v1/breeds`;
    url = `https://api.thedogapi.com/v1/images/search?has_breeds=1`;
    // url = `https://api.thedogapi.com/v1/images/search?breed_ids=1,5,14`;
  //   callAPI(`https://api.thecatapi.com/v1/images/search`).catch(console.error);
    callAPI(url).catch(console.error);
  }

  const callAPI = async (query) => {
    const response = await fetch(query, {headers: {
      'x-api-key': ACCESS_KEY
    }});
    const json = await response.json();
    console.log(json);
    if (json == null || json[0] == null || json[0].url == null) {
      alert("Oops! Something went wrong with that query, let's try again!")
    } else {
      const currDog = json[0];
      console.log(currDog);
      console.log(currDog.url);
      console.log(currDog.breeds[0]);
      if(banList.includes(currDog.breeds[0].name)) {
        makeQuery();
      }
      setImageUrl(currDog.url);
      console.log(currDog.breeds[0].bred_for);
      setBredFor(currDog.breeds[0].bred_for);
      setBreed(currDog.breeds[0].name);
      setHeight(currDog.breeds[0].height.imperial);
      updateDescription();
    }
  }

  const excludeBreed = () => {
    setBanList([...banList, breed]);
  }

  const removeBan = (e) => {
    const remove = e.target.innerText;
    console.log(`Removing ${remove} from ban list`);
    setBanList(banList.filter((ele) => ele != remove));
  }

  return (
    <div className='bodyBox'>
      <h1>Explore Dog Breeds!</h1>
      {breed && <h2>Breed: {breed}</h2>}
      {breed ? <img src={imageUrl} className='picture' ></img> : <h2>Click to explore!</h2>}
      { imageUrl &&
        <div>
          <h3>Bred For: {bredFor}</h3>
          <h3>Height: {height} inches</h3>
          <h3>Appearance: {descriptions[descriptIndex]}</h3>
        </div>
      }
      

      <button onClick={makeQuery}>
        Explore!
      </button>
      <button onClick={excludeBreed}>
        Exclude Breed
      </button>

      {banList.length > 0 && <h3>Excluding: </h3>}
      {banList.map((dog) => [
        <button key={dog} onClick={removeBan}>{dog}</button>
      ])}
    </div>
  )
}

export default App
