import React from 'react'
import './BetAmount.css'

function BetAmount() {
    return (
        <div className="BetAmount">
            <div className="amount__display">
                <span className="amount__count">
                    6.00
                </span>
                <div className="amount__actions">
                    <div className="amount-minus">
                        <i className="fas fa-minus-circle"></i>
                    </div>
                    <div className="amount-plus">
                        <i className="fas fa-plus-circle"></i>
                    </div>
                </div>
            </div>
            <div className="amount__buttons">
                <div className="amount__buttons-item">1$</div>
                <div className="amount__buttons-item">2$</div>
                <div className="amount__buttons-item">5$</div>
                <div className="amount__buttons-item">10$</div>
            </div>
        </div>
    )
}

export default BetAmount
