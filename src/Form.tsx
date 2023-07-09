import React from "react"
import { useGlobalContext } from "./Context"

export const Form = () => {
    const { information, setInformation } = useGlobalContext()
    return (
        <div>
            <h1>Form</h1>
            <input type="text" onChange={(e) => setInformation(e.target.value)} value={information} />
        </div>
    )
}