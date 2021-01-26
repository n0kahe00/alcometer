import { useState } from 'react'
import './App.css'

function App () {
  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] =useState(1);
  const [time, setTime] =useState(1)
  const [gender, setGender] =useState('male');
  const [result, setResult] =useState(0)
  function handleSubmit(e) {
    e.preventDefault();
    let alcohol_level = 0;
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let grams_left = grams - (burning * time)
    
    if (gender === 'male') {
      alcohol_level = grams_left / ( weight * 0.7)
      
    } else {
      alcohol_level = grams_left / (weight * 0.6)
    }
    if (alcohol_level <= 0) {
      setResult("No alcohol in blood")
    } else {
      setResult(alcohol_level.toFixed(2))
    }
   
  }
  return (
    <div class="container mt-4 p-4 bg-info">
      <h3>Calculating blood alcohol level</h3>
      <form class="row" onSubmit={handleSubmit}>
        <div class="form-group col-4">
          <p>Weight</p>
          <input  class="form-control" name="weight" type='number' value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div class="form-group col-4">
          <p>Bottles</p>
          <input  class="form-control" name="bottles" type='number' value={bottles} onChange={e => setBottles(e.target.value)}></input>
        </div>
        <div class="form-group col-4">
          <p>Time</p>
          <input class="form-control" name="time" type='number' value={time} onChange={e => setTime(e.target.value)}></input>
        </div>
        <div class="pt-3">
          <p>Gender: </p>
          <input type='radio' name='gender' value='male' defaultChecked onChange={e => setGender(e.target.value)}/>
          <label>Male</label>
          <input type='radio' name='gender' valeu='female' onChange={e => setGender(e.target.value)} />
          <label>Female</label>
        </div>
        
        <button class="btn btn-primary mb-3">Calculate</button>
        <div>
          <output>Your alcohol level is: {result} </output>
        </div>
      </form>
    </div>
  )
}

export default App
