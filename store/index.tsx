import React, {createContext, useContext, useState} from 'react';

type IContext = {
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>
}

const StoreContext = createContext<IContext>({
    token: null,
    setToken: () => {},
})

export const Store = ({ children }: { children: React.ReactNode}) => {
    const [token, setToken] = useState<string | null>(null)

    return (
        <StoreContext.Provider
            value={{ token, setToken }}
        >
            {children}
        </StoreContext.Provider>
    )
};

export const useStoreContext = () => useContext(StoreContext);
