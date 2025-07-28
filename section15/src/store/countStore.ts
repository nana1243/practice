import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";

interface CountStore{
    count: number;
    decrement: () => void;
    increment: (amount:number) => void;
    reset: () => void;
}

export const useCountStore = create<CountStore>(
    persist(
        (set) => ({
    count : 0,
    decrement: async () => {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
        console.log('Decrementing count...')
        set((state => ({count: state.count - 1})));
    },
    increment: (amount) => set((state) => ({count: state.count + amount })),
    reset: () => set(() => ({count: 0})),
})),{
    name: 'count-storage', // unique name for the storage
    storage: createJSONStorage(()=> sessionStorage), // use sessionStorage for persistence
    });