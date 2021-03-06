import React from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

function App() {
  const sampleQuote = {
    quote: "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"
  }

  const [quote, setQuote] = React.useState(sampleQuote);
  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        setQuote(data[0])
      });
  };

  return (
    <div className='simpsonsQuote'>
      <button onClick={getQuote}>
        New quote ?
      </button>
      <QuoteCard quote={quote}/>
    </div>
  );
}

export default App;
