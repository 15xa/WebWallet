import { generateMnemonic } from "bip39";
import { useState, useEffect } from "react";
import { Buffer } from 'buffer';



export const CreateMnemonic = () => {


    const[loading, setLoading] = useState("false") 

    if (typeof window !== "undefined") {
        window.Buffer = Buffer;
    }
    const [error, setError] = useState(null);

    const [mnemonic, setMnemonic] = useState("");

    useEffect(() => {
        setLoading("true");
        const fetchMnemonic = async () => {
            await setTimeout(async () => {
                try {
                    console.log("Fetching mnemonic...");
                    const generatedMnemonic = await generateMnemonic();
                    console.log("Mnemonic generated:", generatedMnemonic);
                    setMnemonic(generatedMnemonic);
                    setLoading(false);
                  } catch (err) {
                    console.error("Error generating mnemonic:", err);
                    setError("Failed to generate mnemonic.");
                    setLoading(false);
                  }
            }, 1500);
          
        };
        fetchMnemonic();
        
    }, [])
    
   return(
   <div>
   {mnemonic ? `Mnemonic phase is: ${mnemonic}`: "generating....."}
   </div> 
   )
}