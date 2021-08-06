import { useState, useCallback } from "react";

export default function useLocalState(name, initialState = null, reviver = undefined) {
    const json = localStorage.getItem(name);
    
    if (json !== null) {
        initialState = JSON.parse(json, reviver);
    }

    const [state, setState] = useState(initialState);

    const setLocal = useCallback(
        newState => {
            if (newState === null) {
                localStorage.removeItem(name);
                setState(newState);
                return;
            }
            localStorage.setItem(name, JSON.stringify(newState));
            setState(newState);
        },
        [setState, name]
    );

    return [state, setLocal];
}