import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";

interface PostStore {
    currentPage : number;
    limit : number;
    term?: string;
    getTotalPages : () => number;
    setCurrentPage : (page: number) => void;
    setLimit : (amount: number) => void;
    setTerm : (term: string) => void;
}

export const usePostStore = create<PostStore>(
    immer((set,get)=>({
        currentPage: 1,
        limit: 10,
        term: "",
        getTotalPages: () => Math.ceil(100/ get().limit),
        setCurrentPage: (page: number) => {
            set((state) => {
                state.currentPage = page;
            });
        },
        setLimit: (amount : number) => {
          set((state)=> {
              state.limit = amount;
          })
        },
        setTerm: (term: string) => {
            set((state) => {
                state.term = term;
            });
        }
    })

    )
)