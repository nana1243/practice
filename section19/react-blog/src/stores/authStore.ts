import {create} from "zustand/react";
import {devtools, persist} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

interface User {
    userId : string;
    nickname : string;
    profileImage : string;
    // updatedAt : string;
    // createdAt : string;
    refreshToken : string[];
    email?: string;
}

interface AuthStore {
    isLogIn: boolean;
    user: User | null;
    setUserData : (userData: User) => void;
}

const useAuthStore = create<{AuthStore}>(
    devtools(immer((set) => ({
        isLogIn: false,
        user: null,
        setUserData: (userData: User) => set((state) => {
            state.isLogIn = true;
            state.user = userData;
        }),
        
    }))),
    {
        enabled: import.meta.env.MODE === 'development', // Enable devtools only if the environment variable is set
    }

);

export default useAuthStore;