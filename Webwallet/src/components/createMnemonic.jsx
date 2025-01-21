import { generateMnemonic } from "bip39";
import { useState, useEffect } from "react";
import { Buffer } from 'buffer';

if (typeof window !== "undefined") {
    window.Buffer = Buffer;
}
const [error, setError] = useState(null); // Add this to your component

export const CreateMnemonic = () => {

    const [mnemonic, setMnemonic] = useState("");

    useEffect(() => {
        const fetchMnemonic = async () => {
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
        };
        fetchMnemonic();
        
    }, [])
    
   return(
   <div>
   {mnemonic ? `Mnemonic phase is: ${mnemonic}`: "generating....."}
   </div> 
   )
}