import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function ThirdWidget() {
    return (
        <div className="widget flex flex-col items-center justify-center bg-orange-600 shadow-md rounded-md p-4 md:p-8 mx-auto max-w-full md:ml-40 md:mr-40 ">
            <Image className=' border-yellow-600 rounded-full'
                src="/repair.jpg"
                alt="iPhone"
                width={200}
                height={300}
            />
            <h2 className="text-xl font-bold text-center mb-4 md:text-2xl text-yellow-500 ">
                Check Out Some Of Are Incredible Prices
            </h2>
            <h3 className=' text-yellow-500' >Click Here to find out Prices</h3>
            <Link href='/Prices'>
                <button className="bg-yellow-500 hover:bg-yellow-100 text-blue-500 font-bold py-2 px-4 rounded-md focus:outline-none">
                    $ Prices
                </button>
            </Link>

        </div>
    )
}

export default ThirdWidget;