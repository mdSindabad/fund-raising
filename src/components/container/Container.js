import React from 'react';
import Card from '../card/Card';

const Container = ({ data }) => {
    return (
        <section className='p-5 grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                data.map((person, index) => (
                    <Card key={index} person={person} />
                ))
            }
        </section>
    )
}

export default Container;
