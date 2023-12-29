import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
function App() {
  const [data, setData] = useState('')
  const [age, setAge] = useState('25')
  const [name, setName] = useState('Nish')
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot');
    const json = await resp.json();
    console.log(json);
    setData(json);
  }

  useEffect(() => {
    console.log("Changed State");
    getData()
  }, [])
  return (
    <div className="App">
      <h3>Hello my name is {name} age is {age} </h3>
      <button className='btn btn-outline-danger' onClick={() => setAge('100')}>Click for Age</button>
      <button onClick={() => setName('Charm')}>Click for Name</button>
   

      <div class="d-grid gap-5 d-md-block">
        <button class="btn btn-primary" type="button">Button</button>
        <button class="btn btn-primary" type="button">Button</button>
      </div>
    </div>
  );
}

export default App;
