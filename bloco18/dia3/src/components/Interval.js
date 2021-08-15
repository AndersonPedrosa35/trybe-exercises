import { useState, useEffect } from 'react';

function Interval() {
  const [ number, setNumber ] = useState(0);
  const [ multiplo, setMultiplo ] = useState(1);
  useEffect(() => {
    setInterval(() => {
      const random = Math.ceil(Math.random() * 100);
      setNumber(random.toFixed(0));
    }, 1000);
  }, []);

  return (
    <section>
      <h1>{ Math.ceil(number) }</h1>
      <span>{ multiplo }</span>
    </section>
  )
}

export default Interval;
