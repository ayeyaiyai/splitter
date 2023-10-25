import './App.css'
import { useState, useEffect } from 'react'

function App() {
  // State declaration
  const [bill, setBill] = useState('');
  const [tipPercent, setTipPercent] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [tipTotal, setTipTotal] = useState(0);
  const [billTotal, setBillTotal] = useState(0);
  
  const [inactive, setInactive] = useState(true);
  const [peopleError, setPeopleError] = useState(false);

  useEffect(() => {
    inactiveButton();
    if (numberOfPeople === '0') {
      setPeopleError(true);
    }
    else if ((bill && tipPercent && numberOfPeople)) {
      setTipTotal((bill * (Number(tipPercent) / 100)) / numberOfPeople);
    } 
    else {
      setPeopleError(false);
      setTipTotal(0);
      setBillTotal(0);
    }
  }, [bill, tipPercent, numberOfPeople]); 

  useEffect(() => {
    if ((bill && tipPercent && numberOfPeople)) {
      setBillTotal((Number(bill) + tipTotal) / numberOfPeople);
    }
  }, [tipTotal]);


  function inactiveButton() {
    if (bill && tipPercent && numberOfPeople) {
      setInactive(false);
    } else {
      setInactive(true);
    }
  }

  function resetInputs() {
    setBill('')
    setTipPercent('')
    setNumberOfPeople('')
  }

  function handleTipButtonClick(percent) {
    setTipPercent(percent);
  }

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
            pattern="[0-9]*"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            >
            </input>
          </div>
          <div className='tip-selection-section'>
            <div className='section-label'>Select Tip %</div>
            <div className='button-row top-row'>
              <button className='tip-button' onClick={() => handleTipButtonClick(5)}>5%</button>
              <button className='tip-button' onClick={() => handleTipButtonClick(10)}>10%</button>
              <button className='tip-button' onClick={() => handleTipButtonClick(15)}>15%</button>
            </div>
            <div className='button-row'>
              <button className='tip-button' onClick={() => handleTipButtonClick(25)}>25%</button>
              <button className='tip-button' onClick={() => handleTipButtonClick(50)}>50%</button>
              <input 
              className='tip-input'
              placeholder='Custom'
              pattern="[0-9]*"
              value={tipPercent}
              onChange={(e) => setTipPercent(e.target.value)}
              ></input>
            </div>
          </div>
          <div className='patron-label-container'>
            <div className='section-label patron-label'><div>Number of People</div><div className='error-message'>{`${peopleError ? "Can't be zero" : ''}`}</div></div>
            
            <input
            pattern="[0-9]*"
            className={`splitter-input ${peopleError ? 'people-input-error' : ''}`}
            placeholder='0'
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(e.target.value)}
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
              <div className='total-amount-right'>${tipTotal.toFixed(2)}</div>
            </div>

            <div className='total-amount-container'>
              <div className='total-amount-left'>
                <div className='right-title'>Total</div>
                <div className='right-subtitle'>/ person</div>
              </div>
              <div className='total-amount-right'>${billTotal.toFixed(2)}</div>
            </div>
          </div>
          <button className={`reset-button ${inactive ? 'reset-button-inactive' : ''}`} onClick={resetInputs}>RESET</button>
        </div>
      </div>
    </div>
  )
}

export default App