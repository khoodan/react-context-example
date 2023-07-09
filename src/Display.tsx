import React from "react"
import { useGlobalContext } from "./Context"

export const Display = () => {
    const { information } = useGlobalContext()

    return (
        <div>
            <h1>Information</h1>
            { information }
        </div>
    )
}