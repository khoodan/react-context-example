import React from "react"
import { GlobalContextProvider } from "./Context"
import { Display } from "./Display"
import { Form } from "./Form"
import { SetDefaultInformationButton } from "./SetDefaultInformationButton"

export const App = () => {
    return (
        <GlobalContextProvider>
            <Form />
            <Display />
            <SetDefaultInformationButton />
        </GlobalContextProvider>
    )
}