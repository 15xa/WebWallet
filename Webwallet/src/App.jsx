    import './App.css';
    import { Fetchwallet } from './components/fetchwallet';
    import { generateMnemonic, mnemonicToSeed} from "bip39";
   

    import { useState, useEffect } from "react";
    import { Buffer } from 'buffer';
    import { Mnemoniccomponent } from './components/Menmoniccomponent';
    
    import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Creation } from './components/creation';
import { EtheriumWallet } from './components/etheriumWallet';

    function App() {
      const [count, setCount] = useState(0);


      const [mnemonic, setMnemonic] = useState("");
      const [givenMnemonic, setGivenMnemonic] = useState("");

    

      const[loading, setLoading] = useState(false) ;
      const[created, setCreated] = useState(false);
      const [cmnemonic, setCmnemonic] = useState("");



  const CreateMnemonic = () => {


    

      if (typeof window !== "undefined") {
          window.Buffer = Buffer;
      }

      
      const updateCreation = () => {
          if(cmnemonic){
              setCreated(true);
          }
          else{
              setCreated(false);
          }
      }

          
        const createMnemonic = async () => {
              setLoading(true);
              const timer = await setTimeout(async () => {
                  try {
                      console.log("Fetching mnemonic...");
                      const generatedMnemonic = await generateMnemonic();
                      console.log("Mnemonic generated:", generatedMnemonic);
                      setCmnemonic(generatedMnemonic);
                      setMnemonic(generatedMnemonic);
                      setLoading(false);
                    } catch (err) {
                      console.error("Error generating mnemonic:", err);
                      setError("Failed to generate mnemonic.");
                      setLoading(false);
                    }
                    clearTimeout(timer);
                    setLoading(false)
              }, 1500);
            
          };
          
      

      
    return(
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
      <Creation loading={loading} createMnemonic={createMnemonic}></Creation>
      <Link 
      to={'/fetchmnemonic'} 
      className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-center inline-block"
    >
      I have a phrase
    </Link>
      
      <Mnemoniccomponent loading={loading} mnemonic={mnemonic}></Mnemoniccomponent>
    </div> 
    )
  }

    
      return (
        <>
        <BrowserRouter>
          <Routes>
            <Route path='/fetchmnemonic' element={<Fetchwallet mnemonic={mnemonic} setMnemonic={setMnemonic}/>}/>
            <Route path='/' element={<CreateMnemonic/>}/>
            <Route path='/wallet'element={<EtheriumWallet mnemonic={mnemonic}/>}/>
          </Routes>      
            
          
        </BrowserRouter>
        
        </>
      )
    }

    export default App
