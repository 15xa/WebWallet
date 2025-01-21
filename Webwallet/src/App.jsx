  import { useState } from 'react'
  import './App.css';
  import { CreateMnemonic } from './components/createMnemonic';

  function App() {
    const [count, setCount] = useState(0)

    return (
      <>
      <CreateMnemonic></CreateMnemonic>
      
      </>
    )
  }

  export default App
