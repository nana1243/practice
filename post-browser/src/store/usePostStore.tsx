import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";

interface PostStore {
    currentPage : number;
    limit : number;
    getTotalPages : () => number;
    setCurrentPage : (page: number) => void;
    setLimit : (amount: number) => void;
}

export const usePostStore = create<PostStore>(
    immer((set,get)=>({
        currentPage: 1,
        limit: 10,
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
        }
    })

    )
)