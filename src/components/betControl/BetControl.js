import React, { useState } from 'react'
import ToggleButtons from './toggleButtons/ToggleButtons'
import BetAmount from './betAmount/BetAmount'
import headerBg from '../../img/bg/header-bg.png'

import './BetControl.css'

function BetControl() {
    const [switchBtns, setSwitchBtns] = useState('')

    return (
        <div className="Bet-Control" style={{ backgroundImage: `url(${headerBg})` }}>
            <ToggleButtons />
            <BetAmount />
        </div>

    )
}

export default BetControl
