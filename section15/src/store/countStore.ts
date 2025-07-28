import {create} from "zustand";
import {createJSONStorage, devtools, persist, subscribeWithSelector} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

interface CountStore{
    count: number;
    decrement: () => void;
    increment: (amount:number) => void;
    reset: () => void;
}

export const useCountStore = create<CountStore>(
    devtools(subscribeWithSelector(
        persist(
            immer((set) => ({
                count: 0,
                decrement: async () => {
                    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
                    console.log('Decrementing count...');
                    set((state) => ({ count: state.count - 1 }));
                },
                increment: (amount) => set((state) => ({ count: state.count + amount })),
                reset: () => set(() => ({ count: 0 })),
            })),
            {
                name: 'count-storage', // unique name for the storage
                storage: createJSONStorage(() => sessionStorage), // use sessionStorage for persistence
            }
        )
    )),{
        enabled: import.meta.env.MODE === 'development', // Enable devtools only if the environment variable is set
    }
);