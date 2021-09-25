import React from 'react';
import { FaCartPlus, FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';

const Card = ({ person }) => {
    const { name, age, country, organisation, net_worth, image, donate } = person;
    return (
        <div className='border-2 py-2 px-3 rounded-lg bg-purple-200 shadow-lg transform transition hover:scale-105'>
            <div className='h-32 w-32 rounded-full overflow-hidden mx-auto mb-2'>
                <img className='w-full h-full object-cover' src={image} alt={name} />
            </div>
            <div>
                <h3><b>Name: </b>{name}</h3>
                <h3><b>Age: </b>{age}</h3>
                <h3><b>Country: </b>{country}</h3>
                <h3><b>Company: </b>{organisation}</h3>
                <h3><b>Net Worth: </b>{net_worth}</h3>
                <h3><b>Donation: </b>{donate}</h3>
            </div>
            <div className='flex justify-center my-3'>
                <button className='flex items-center border-2 text-green-700 border-green-700 py-0.5 px-2 rounded-full hover:bg-green-700 hover:text-gray-200'>
                    <FaCartPlus className='mr-2' />
                    Add To Cart</button>
            </div>
            <div className='flex justify-center text-3xl text-green-500 '>
                <FaFacebookSquare className='hover:text-green-700 cursor-pointer mx-1' />
                <FaTwitterSquare className='hover:text-green-700 cursor-pointer mx-1' />
            </div>
        </div>
    )
}

export default Card;
