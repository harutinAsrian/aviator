import React from 'react'
import Display from './display/Display'
import BetControl from './betControl/BetControl'
import './View.css'

function View() {
    return (
        <div className="View" >
            <Display />
            <BetControl />
        </div>
    )
}

export default View
