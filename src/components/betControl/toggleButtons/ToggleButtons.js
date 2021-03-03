import React from 'react'
import './ToggleButtons.css'

function ToggleButtons() {
    return (
        <label class="switch">
            <input type="checkbox" id="togBtn" />
            <div class="slider round">
                <span class="on">Bet</span>
                <span class="off">Auto</span>
            </div>
        </label>
    )
}

export default ToggleButtons
