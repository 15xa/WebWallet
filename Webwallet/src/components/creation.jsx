import { useEffect, useState } from "react"
import { CreateButton } from "./Createbutton"

export const Creation = ({loading, createMnemonic}) => {
    const [loadStat, setloadStat] = useState('')
    useEffect( function () {
         setloadStat(loading ? "..." : <CreateButton loading={loading} createMnemonic={createMnemonic}/>);
    }, [loading])
   return loadStat;
}