import React from 'react'

const Cart = ({ doners }) => {
    const donationAmount = doners.map(doner => doner.donate);

    return (
        <div className='col-span-1 order-1 '>
            <div className='bg-blue-200 m-5 px-3 py-8 rounded-lg text-center md:order-2'>

                <h2 className='text-xl font-bold border-b-2 border-blue-400 mb-3'>Donation</h2>
                <p className='font-bold text-gray-600 mb-2'>No of person donated: <span className='text-gray-800'>{doners.length}</span></p>
                <p className='font-bold text-gray-600'>Total Amount: $<span className='text-gray-800'>{donationAmount.reduce(((total, num) => total + num), 0)}</span></p>
            </div>
        </div>
    )
}

export default Cart
