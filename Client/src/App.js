import React from "react";
import FAQs from "./Ayeni-Kazeem/Faq";
import './Ayeni-Kazeem/Ayeni.css';
import image from './images/faq.png'

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img className="image" src={image} alt="FAQS"/>
        < FAQs />
      </header>
    </div>
  );
}

export default App;
