import { generateMnemonic } from "bip39";
import { useState, useEffect } from "react";
import { Buffer } from 'buffer';



export const CreateMnemonic = () => {


    const[loading, setLoading] = useState(false) ;
    const[created, setCreated] = useState(false);

    if (typeof window !== "undefined") {
        window.Buffer = Buffer;
    }

    const [cmnemonic, setCmnemonic] = useState("");
    
    const updateCreation = () => {
        if(cmnemonic){
            setCreated(true);
        }
        else{
            setCreated(false);
        }
    }

        
       const fetchMnemonic = async () => {
            setLoading(true);
            const timer = await setTimeout(async () => {
                try {
                    console.log("Fetching mnemonic...");
                    const generatedMnemonic = await generateMnemonic();
                    console.log("Mnemonic generated:", generatedMnemonic);
                    setCmnemonic(generatedMnemonic);
                    setLoading(false);
                  } catch (err) {
                    console.error("Error generating mnemonic:", err);
                    setError("Failed to generate mnemonic.");
                    setLoading(false);
                  }
                  clearTimeout(timer);

            }, 1500);
          
        };
        
    

    
   return(
   <div>
    <button onClick={fetchMnemonic} disabled={loading}>Create</button>
   {cmnemonic ? `Mnemonic phase is: ${cmnemonic}`: "generating....."}
   </div> 
   )
}