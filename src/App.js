import React, { useState } from "react";
import Cart from "./components/cart/Cart";
import Container from "./components/container/Container";
import Header from "./components/header/Header";
import data from './data.json';

function App() {
  const [doners, setDoners] = useState([]);

  return (
    <div className=''>
      <Header />
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <Container data={data} doners={doners} setDoners={setDoners} />
        <Cart doners={doners} setDoners={setDoners} />
      </div>
    </div>
  );
}

export default App;
