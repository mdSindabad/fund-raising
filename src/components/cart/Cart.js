import React from 'react'
import DonersList from '../doners/DonersList';

const Cart = ({ doners, setDoners }) => {
    const donationAmount = doners.map(doner => doner.donate);
    const removeDoner = (name) => {
        const newDonersList = doners.filter(doner => doner.name !== name);
        setDoners(newDonersList);
    };

    return (
        <div className='col-span-1 order-1 '>
            <div className='bg-blue-200 m-5 px-3 py-8 rounded-lg text-center md:order-2 shadow-lg'>

                <h2 className='text-xl font-bold border-b-2 border-blue-400 mb-3'>Donation</h2>
                <p className='font-bold text-gray-600 mb-2'>No of person donated: <span className='text-gray-800'>{doners.length}</span></p>
                <p className='font-bold text-gray-600'>Total Amount: $<span className='text-gray-800'>{donationAmount.reduce(((total, num) => total + num), 0)}</span></p>
            </div>
            {/* show doners list */}
            <h4 className='text-sm font-bold text-center' >Doner's List:</h4>
            {
                doners.map((doner, index) => {
                    return <DonersList key={index} person={doner} removeDoner={removeDoner} />
                })
            }
        </div>
    )
}

export default Cart
