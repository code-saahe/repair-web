import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Widget() {
    const myImage = '/bluetruck.jpg'
    return (
        <div>
            <div className="widget flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4 md:p-8 mx-auto max-w-full md:ml-40 md:mr-40 ">
                <Image className="w-30 h-30 border border-r-2 border-blue-400 rounded-full mb-4 md:w-20 md:h-20" src={myImage} alt="" width={200} height={300} />
                <div className="text-center">
                    <h2 className="text-xl font-bold mb-2 md:text-2xl">Kearney Iphone Screen Repair</h2>
                    <p className="text-gray-700 mb-4">We Come To You No Extra Cost</p>
                    <p className="text-gray-700 mb-4 md:text-base">
                        Fast and affordable device repairs for iphone screens, give us a call!
                    </p>
                </div>
                <Link href='tel:4842747827'>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">
                        Call Now!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Widget