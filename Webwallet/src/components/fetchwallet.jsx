 export const Fetchwallet = ({mnemonic , givenMnemonic}) => {


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
      {mnemonic && <Fetchwallet mnemonic={mnemonic}/>}
      {givenMnemonic && <Fetchwallet mnemonic={givenMnemonic} /> }
       

  
    </div>
      )
}
