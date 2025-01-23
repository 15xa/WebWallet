import { useState } from "react"

export const Mnemoniccomponent = ({mnemonic, loading}) => {
   const [showMnemonic, setShowMnemonic] = useState(false);
   
    
    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    else if(mnemonic){
        return(
            <><div className="m-4 flex flex-col justify-center items-center">
            <div className="font-semibold text-black text-lg flex flex-col px-2"><div className="flex flex-row">Below is your 12 word mnemonic, <div className="font-extrabold text-red-800 ml-2 text-xl"> Keep it carefully, </div></div>
            <div className="flex flex-row gap-2">If you loose it Your account will <div className="text-red-800 font-extrabold text-xl "> Never be Recovered!</div></div></div>
            <div> Your Mnemonic is: {mnemonic}</div>
            </div>
            </>
        )
    }
    else {
        return(
           null
        )
    }
    
        
}