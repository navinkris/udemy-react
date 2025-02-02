import { useEffect, useState } from 'react';
import { MainApp } from './assets/styled';

function App() {
  const storageKeyName = "count";
  const retrieveCountValue = () => String(localStorage.getItem(storageKeyName)) || 0;
  const [count, setCount] = useState(retrieveCountValue);
  const addCount = (count) => setCount(Number(count) + 1);
  
  useEffect(() => {
    localStorage.setItem(storageKeyName, count)
  }, [count]);

  return (
    <MainApp>
      <div className='App'>
        Hello World  
        <button onClick={() => addCount((count))}>
          count is {count}
        </button>
      </div>
        
    </MainApp>
  )
}

export default App
