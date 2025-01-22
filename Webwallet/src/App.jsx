  import { useState } from 'react'
  import './App.css';
  import { CreateMnemonic } from './components/createMnemonic';

  function App() {
<<<<<<< HEAD
    const [count, setCount] = useState(0)
=======


    const [mnemonic, setMnemonic] = useState("");
    const [givenMnemonic, setGivenMnemonic] = useState("");
    const [createdMnemonic, setCreatedmnemonic] = useState("");
>>>>>>> 9c9747c (creation route working, [links soon])

    const Home = () => {


      return(
      <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <div className="text-2xl text-blue-800">Do you have your phrase?</div>
        <input
          type="text"
          id="mnemonic"
          placeholder="Enter the Mnemonic phrase"
          value={mnemonic}
          onChange={(e) => setGivenMnemonic(e.target.value)}
          className="input-class border border-black border-1"
        />
        
        {givenMnemonic && <Fetchwallet mnemonic={givenMnemonic} /> }
         
        <button className='' >Create new wallet</button>
    
      </div>
        )
  }

    return (
      <>
<<<<<<< HEAD
      <CreateMnemonic></CreateMnemonic>
=======
      <BrowserRouter>
        <Routes>
          <Route path='/createmnemonic' element={<CreateMnemonic/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          </Routes>      </BrowserRouter>
>>>>>>> 9c9747c (creation route working, [links soon])
      
      </>
    )
  }

  export default App
