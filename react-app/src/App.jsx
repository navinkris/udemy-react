import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const storageKeyName = "count";
  const retrieveCountValue = () => String(localStorage.getItem(storageKeyName)) || 0;
  const [count, setCount] = useState(retrieveCountValue);
  const addCount = (count) => setCount(Number(count) + 1);
  
  useEffect(() => {
    localStorage.setItem(storageKeyName, count)
  }, [count]);

  return (
    <>
      <div className='App'>
        Hello World  
        <button onClick={() => addCount((count))}>
          count is {count}
        </button>
      </div>
        
    </>
  )
}

export default App
