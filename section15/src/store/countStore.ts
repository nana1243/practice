import {create} from "zustand";

interface CountStore{
    count: number;
    decrement: () => void;
    increment: () => void;
    reset: () => void;
}

export const useCountStore = create<CountStore>((set,get) => ({
    count : 0,
    decrement: () => set((state) => ({count: state.count - 1})),
    increment: () => set((state) => ({count: state.count + 1})),
    reset: () => set(() => ({count: 0})),
}));