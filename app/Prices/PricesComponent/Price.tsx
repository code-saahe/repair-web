'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

type Item = {
    id: string;
    image: string;
    alt?: string;
    title: string;
    description: string;
    price: string;
}

function Price() {

    const items: Item[] = [
        {
            id: '1',
            image: '/8.jpg',
            title: 'iPhone 8',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$60.00',
        },
        {
            id: '2',
            image: '/8.jpg',
            title: 'iPhone 8 Plus',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$65.00',
        },
        {
            id: '3',
            image: '/8.jpg',
            title: 'iPhone SE (2020-2022)',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$65.00',
        },
        {
            id: '4',
            image: '/X.jpg',
            title: 'iPhone X',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$75.00',
        },
        {
            id: '5',
            image: '/XS.jpg',
            title: 'iPhone XS',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$80.00',
        },
        {
            id: '6',
            image: '/xsmax.jpg',
            title: 'iPhone XS Max',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$85.00',
        },
        {
            id: '7',
            image: '/xr.jpg',
            title: 'iPhone XR',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$75.00',
        },
        {
            id: '8',
            image: '/11.jpg',
            title: 'iPhone 11',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$80.00',
        },
        {
            id: '9',
            image: '/11po.png',
            title: 'iPhone 11 Pro',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$85.00',
        },
        {
            id: '10',
            image: '/11po.png',
            title: 'iPhone 11 Pro Max',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$90.00',
        },
        {
            id: '11',
            image: '/12mini.jpg',
            title: 'iPhone 12 mini',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$105.00',
        },
        {
            id: '12',
            image: '/12mini.jpg',
            title: 'iPhone 12',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$110.00',
        },
        {
            id: '13',
            image: '/12pro.jpg',
            title: 'iPhone 12 Pro',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$120.00',
        },
        {
            id: '14',
            image: '/12pro.jpg',
            title: 'iPhone 12 Pro Max',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$130.00',
        },
        {
            id: '15',
            image: '/131.jpg',
            title: 'iPhone 13',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$135.00',
        },
        {
            id: '16',
            image: '/13mjpg.jpg',
            title: 'iPhone 13 mini',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$130.00',
        },
        {
            id: '17',
            image: '/14.jpg',
            title: 'iPhone 14',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$150.00',
        },
        {
            id: '18',
            image: '/14.jpg',
            title: 'iPhone 14 Plus',
            description: 'We come To You Crack Screen Repair, No Extra Cost No Hidden Fees.',
            price: '$170.00',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                    <Image
                        src={item.image}
                        alt={item.alt || item.title}
                        width={200}
                        height={300}
                        className="w-30 h-30 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                        <h3 className="text-lg text-blue-500 font-bold mb-2">{item.title}</h3>
                        <p className="text-blue-700 mb-2">{item.description}</p>
                        <p className="font-bold text-green-500">{item.price}</p><br />
                        <Link href="tel:4842747827">
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