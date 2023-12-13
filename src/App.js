import { useState } from 'react';
import './App.css';
import { numbers, upperCase, lowerCase, symbols } from './character';

function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(20);
  const [UpperCase, setUppercase] = useState(false);
  const [LowerCase, setLowercase] = useState(false);
  const [Numbers, setNumbers] = useState(false);
  const [Symbols, setSymbols] = useState(false);

  const handleGeneratePassword = () => {
    let characterList = '';
    if (LowerCase) {
      characterList = characterList + lowerCase;
    }
    if (UpperCase) {
      characterList = characterList + upperCase;
    }
    if (Numbers) {
      characterList = characterList + numbers;
    }
    if (Symbols) {
      characterList = characterList + symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterList.length);
      generatedPassword += characterList.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="header">Password Generator</h2>
          <div className="password">
            <h3>{password}</h3>
            <button className="copy_btn">
              <i className="far fa-clipboard"></i>
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="password-length">Password Length</label>
            <input
              value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type="number"
              id="password-length"
              name="password-length"
              max="20"
              min="10"
            />
          </div>
          <div className="form-group">
            <label htmlFor="uppercase-letters">Uppercase Letters</label>
            <input
              checked={UpperCase}
              onChange={(e) => setUppercase(e.target.checked)}
              type="checkbox"
              id="uppercase-letters"
              name="uppercase-letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lowercase-letters">Lowercase Letters</label>
            <input
              checked={LowerCase}
              onChange={(e) => setLowercase(e.target.checked)}
              type="checkbox"
              id="lowercase-letters"
              name="lowercase-letters"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-numbers">Include Number</label>
            <input
              checked={Numbers}
              onChange={(e) => setNumbers(e.target.checked)}
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
            />
          </div>
          <div className="form-group">
            <label htmlFor="include-symbols">Include Symbols</label>
            <input
              checked={Symbols}
              onChange={(e) => setSymbols(e.target.checked)}
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
            />
          </div>
          <button onClick={handleGeneratePassword} className="generator-button">
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
