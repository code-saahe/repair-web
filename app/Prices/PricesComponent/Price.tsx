import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
type items = {
    id: number;
    image: string;
    src: string;
    alt?: string;
    title: string;
    description: string;
    price: string

}
function Price() {

    const items = [
        {
            id: 1,
            image: '/8.jpg', // Replace with your image paths
            title: 'iphone 8',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$60.00',
        }, {
            id: 2,
            image: '/8.jpg', // Replace with your image paths
            title: 'iphone 8plus',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$65.00',
        }, {
            id: 3,
            image: '/8.jpg', // Replace with your image paths
            title: 'iphone SE (2020-2022)',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$65.00',
        }, {
            id: 4,
            image: '/X.jpg', // Replace with your image paths
            title: 'iphone X',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$75.00',
        }, {
            id: 5,
            image: '/XS.jpg', // Replace with your image paths
            title: 'iphone XS',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$80.00',
        }, {
            id: 6,
            image: '/xsmax.jpg', // Replace with your image paths
            title: 'iphone XS Max',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$85.00',
        }, {
            id: 7,
            image: '/xr.jpg', // Replace with your image paths
            title: 'iphone XR',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$75.00',
        }, {
            id: 8,
            image: '/11.jpg', // Replace with your image paths
            title: 'iphone 11',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$80.00',
        }, {
            id: 9,
            image: '/11po.png', // Replace with your image paths
            title: 'iphone 11 Pro',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$85.00',
        }, {
            id: 10,
            image: '/11po.png', // Replace with your image paths
            title: 'iphone 11 Pro Max',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$90.00',
        }, {
            id: 11,
            image: '/12mini.jpg', // Replace with your image paths
            title: 'iphone 12 mini',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$105.00',
        }, {
            id: 12,
            image: '/12mini.jpg', // Replace with your image paths
            title: 'iphone 12',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$110.00',
        }, {
            id: 13,
            image: '/12pro.jpg', // Replace with your image paths
            title: 'iphone 12 Pro',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$120.00',
        }, {
            id: 14,
            image: '/12pro.jpg', // Replace with your image paths
            title: 'iphone 12 Pro Max',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$130.00',
        }, {
            id: 15,
            image: '/131.jpg', // Replace with your image paths
            title: 'iphone 13',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$135.00',
        }, {
            id: 16,
            image: '/13mjpg.jpg', // Replace with your image paths
            title: 'iphone 13 mini',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$130.00',
        }, {
            id: 17,
            image: '/14.jpg', // Replace with your image paths
            title: 'iphone 14',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$150.00',
        }, {
            id: 1,
            image: '/14.jpg', // Replace with your image paths
            title: 'iphone 14 Plus',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$170.00',
        },
        // Add more items to the 'items' array following the same structure
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={200}
                        height={300}
                        className=" w-30 h-30 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-700 mb-2">{item.description}</p>
                        <p className="font-bold text-green-500">{item.price}</p><br />

                        <Link href='tel:4842747827'>
                            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700">
                                Call Now!
                            </button>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Price