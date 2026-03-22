import { useState } from 'react';

function ClickCounter() {
  const [clicks, setClicks] = useState(0);

  function increment() {
    setClicks(clicks + 1);
  }

  return (
    <div>
      <p> Vous avez cliqué {clicks} fois !</p>
      <button onClick={increment}>+1 Cliquer</button>
    </div>
  );
}

export default ClickCounter;