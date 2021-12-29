import {useEffect, useState} from "react";
import './App.css';

function App() {
  const [dogImg, setDogImg] = useState(null);

  const fetchDoggo = () => {
    setDogImg('')
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then(res => res.json())
      .then((dogInfo) => {
        setDogImg(dogInfo.message)
      })
  }

  useEffect(() => {
    if (!dogImg) {
      fetchDoggo()
    }
  }, [])

  return (
    <div className="App">
      <header>
        <h3>Doggo of the day</h3>
        <div>
          <button onClick={() => fetchDoggo()}>New Doggo</button>
        </div>
        {dogImg !== '' ? (
          <div>
            <img src={dogImg} alt="Doggo"/>
          </div>
        ) : (
          <div>Loading image</div>
        )}
      </header>
    </div>
  );
}

export default App;
