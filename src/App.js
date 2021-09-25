import React from "react";
import Container from "./components/container/Container";
import data from './data.json';

function App() {
  console.log(data)
  return (
    <div className=''>
      <h1 className='text-center font-bold text-3xl bg-green-200 py-3'>Fund Raising Ceremony</h1>
      <Container data={data} />
    </div>
  );
}

export default App;
