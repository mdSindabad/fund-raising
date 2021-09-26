import React from 'react';
import Card from '../card/Card';

const Container = ({ data, doners, setDoners }) => {
    return (
        <section className='p-5 grid grid-cols-1 md:grid-cols-3 gap-4 col-span-3 order-2 md:order-1'>
            {
                data.map((person, index) => (
                    <Card key={index} person={person} doners={doners} setDoners={setDoners} />
                ))
            }
        </section>
    )
}

export default Container;
