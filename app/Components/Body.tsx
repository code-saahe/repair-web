import React from 'react'
import Widget from './Subcomponents/Widget'
import SecWidget from './Subcomponents/SecWidget'
import ThirdWidget from './Subcomponents/ThirdWidget'

function Body() {
    return (
        <div ><br /><br /><br />
            <div>
                <Widget />
            </div><br />
            <div>
                <SecWidget /><br />
            </div>
            <div>
                <ThirdWidget /><br />
            </div>
        </div>
    )
}

export default Body