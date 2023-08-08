import { useState } from 'react';
import data from './FAQsData';



function FAQs() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    };

    setSelected(i);

  }

  return (
    <div>
        <div className="wrapper">
            <h2 className='faq'>FAQs</h2>
            <div className='accordion'>

                {data.map((item, i) => (
                <div className='item'>

                    <div className='title' onClick={() => toggle(i)}>
                        <span className='icon'>#</span>
                        <h2>{item.question}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                </div>
                ))}

            </div>
        </div>
    </div>
  );
}





export default FAQs;