import { useGlobalContext } from "./Context";
import React from "react";

export const SetDefaultInformationButton = () => {
    const { setDefaultInformation } = useGlobalContext();
    return <button onClick={() => setDefaultInformation()}>Set Default Information</button>
}