export const CreateButton = ({loading, createMnemonic}) => {
    return(
        <button 
        className="border border-4 border-gray-400 rounded-2xl p-2"
        onClick={() => createMnemonic()} disabled={loading}>Create New Phrase</button>
    )
}