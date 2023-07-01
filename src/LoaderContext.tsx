import { useState, useContext, createContext } from "react"

const LoaderContext = createContext<LoaderState|null>(null)

const LoaderUpdateContext = createContext<(() => void)>(() => {})

export function useLoader() {
    return useContext(LoaderContext)
}

export function useLoaderUpdate() {
    return useContext(LoaderUpdateContext)
}

interface LoaderState {
    isAnimating: boolean 
    key: number
}

export default function LoaderProvider({children}: {children: React.ReactNode}) {
    const [loaderState, setLoaderState] = useState({
        isAnimating: false,
        key: 0
    })
    
    const toggleLoader = () => {
        if (loaderState.isAnimating) {
            setLoaderState({
                isAnimating: false,
                key: 0
            })

            return
        }

        setLoaderState({
            isAnimating: true,
            key: 1
        })
    }

    return (
        <LoaderContext.Provider value={loaderState}>
            <LoaderUpdateContext.Provider value={toggleLoader}>
                {children}
            </LoaderUpdateContext.Provider>
        </LoaderContext.Provider>
    )
}