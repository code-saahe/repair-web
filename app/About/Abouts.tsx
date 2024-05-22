import React from 'react'
import Image from 'next/image'

function Abouts() {
    return (
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row md:space-x-12">
            <div className="w-full md:w-1/2">
                <Image src="/bluetruck.jpg" alt="About Us" className="rounded-lg shadow-md" width={200} height={300} />
            </div>
            <div className="w-full md:w-1/2 prose leading-relaxed">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">About Us</h2>
                <p>
                    Kearney Unlocking Services is a fast and reliable iPhone screen repair company dedicated to providing top-notch service to its customers. Our skilled technicians use only the highest quality parts to ensure that every repair is done to perfection. We understand the inconvenience of a broken screen, so we strive to offer quick turnaround times, often completing repairs within the same day. Our commitment to efficiency and excellence makes us a trusted choice for iPhone screen repairs.
                </p>
                <p>
                    Customer satisfaction is our top priority at Kearney Unlocking Services. We guarantee that each repair will meet your expectations, offering a warranty on all our services to give you peace of mind. Our friendly and knowledgeable staff is always ready to assist you with any questions or concerns, ensuring a smooth and pleasant experience from start to finish. Trust us to restore your iPhone to its original condition, and experience the exceptional service that sets us apart from the rest.
                </p>
            </div>
        </div>
    )
}

export default Abouts;