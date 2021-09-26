import React from 'react';
import { ImCross } from 'react-icons/im';

const DonersList = ({ person, removeDoner }) => {

    return (
        <div className='bg-blue-600 my-2 mx-5 rounded-xl flex items-center justify-between pr-2 shadow-lg'>
            <div className='w-16 h-16 overflow-hidden'>
                <img className='rounded-xl object-cover h-16 w-16' src={person?.image} alt={person?.name} />
            </div>
            <div className='mx-2 text-gray-200'>{person?.name}</div>
            <ImCross className='text-light text-gray-200 cursor-pointer' onClick={() => removeDoner(person.name)} />
        </div>
    )
}

export default DonersList;
