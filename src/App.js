import React from "react";
import Container from "./components/container/Container";
import data from './data.json';

function App() {
  return (
    <div className='mt-5'>
      <h1 className='text-center font-bold text-3xl'>Fund Raising Ceremony</h1>
      <Container data={data} />
    </div>
  );
}

export default App;
