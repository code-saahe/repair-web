import React from 'react'

function Location() {
    return (
        <div className="widget bg-white rounded-lg shadow-md mx-auto max-w-sm p-8 md:max-w-md">
            <h2 className="text-blue-500 text-2xl font-bold text-center mb-4">We Come To You!</h2>
            <ul className="list-none space-y-2">
                <li>
                    <span className="font-bold text-blue-500">Locations:</span> Pennsylvania
                </li>
                <li>
                    <span className="font-bold text-blue-500">Counties and Cities:</span>
                    <ul className="list-disc pl-4 ml-4 text-orange-500">
                        <li>Philadelphia</li>
                        <li>Pottstown</li>
                        <li>Malvern</li>
                        <li>Phoenixville</li>
                        <li>Norristown</li>
                        <li>Coatesville</li>
                        <li>Collegeville</li>
                        <li>Downingtown</li>
                        <li>Royersford</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Location;
