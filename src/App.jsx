import './App.css'
import { useState } from 'react'

function App() {
  // State declaration
  const [bill, setBill] = useState();
  const [tip, setTip] = useState();
  const [numberOfPeople, setNumberOfPeople] = useState();
  const [tipTotal, setTipTotal] = useState();
  const [billTotal, setBillTotal] = useState();

  return (
    <div className='splitter-container'>
     <div className='splitter-title-container'>
        <span className='splitter-title'>SPLI</span>
        <span className='splitter-title'>TTER</span>
      </div>
      <div className='splitter-body'>
        <div className='splitter-left'>
          <div className='bill-input-container'>
            <div className='section-label'>Bill</div>
            <input
            className='splitter-input'
            placeholder='0'
            >
            </input>
          </div>
          <div className='tip-selection-section'>
            <div className='section-label'>Select Tip %</div>
            <div className='button-row top-row'>
              <button className='tip-button'>5%</button>
              <button className='tip-button'>10%</button>
              <button className='tip-button'>15%</button>
            </div>
            <div className='button-row'>
              <button className='tip-button'>25%</button>
              <button className='tip-button'>50%</button>
              <input 
              className='tip-input'
              placeholder='Custom'
              ></input>
            </div>
          </div>
          <div className='patron-label-container'>
            <div className='section-label'>Number of People</div>
            <input
            className='splitter-input'
            placeholder='0'
            >
            </input>
          </div>
        </div>
        <div className='splitter-right'>
          <div className='totals-container'>
            <div className='total-amount-container top-amount-row'>
              <div className='total-amount-left'>
                <div className='right-title'>Tip Amount</div>
                <div className='right-subtitle'>/ person</div>
              </div>
              <div className='total-amount-right'>$0.00</div>
            </div>

            <div className='total-amount-container'>
              <div className='total-amount-left'>
                <div className='right-title'>Total</div>
                <div className='right-subtitle'>/ person</div>
              </div>
              <div className='total-amount-right'>$0.00</div>
            </div>
          </div>
          <button className='reset-button'>RESET</button>
        </div>
      </div>
    </div>
  )
}

export default App
