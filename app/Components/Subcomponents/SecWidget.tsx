import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

function SecWidget() {

    return (
        <div className="widget flex flex-col items-center justify-center bg-yellow-400 shadow-md rounded-md p-4 md:p-8 mx-auto max-w-full md:ml-40 md:mr-40 ">
            <Image className=' border-blue-600 rounded-full'
                src="/trucklogo.jpg"
                alt="iPhone"
                width={200}
                height={300}
            />
            <h2 className="text-xl font-bold text-center mb-4 md:text-2xl text-blue-600 ">
                Your iPhone Screen Fix - No Problem!
            </h2>
            <h3 className=' text-blue-500' >Click Here to find out Areas & Surrounding Areas We Service</h3>
            <Link href='/Areas'>
                <button className="bg-white hover:bg-pink-100 text-blue-500 font-bold py-2 px-4 rounded-md focus:outline-none">
                    Areas
                </button>
            </Link>
        </div>
    )
}

export default SecWidget