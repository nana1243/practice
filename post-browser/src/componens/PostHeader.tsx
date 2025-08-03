import { LayoutGrid, Search } from "lucide-react";
import {usePostStore} from "../store/usePostStore";

function PostHeader() {
    const setLimit = usePostStore((state) => state.setLimit);
    const limit = usePostStore((state) => state.limit);
    const term = usePostStore((state) => state.term);
    const setTerm = usePostStore((state) => state.setTerm);

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const {value} = event.target;
        setLimit(Number(value));
    }
    const handleSetTerm = (event) => {
        const {value} = event.target;
        setTerm(value);
    }



    return (
        <div className="mb-8 space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          <span className="inline-flex items-center gap-2">
            <LayoutGrid className="h-6 w-6 text-indigo-600" />
            <span>Posts Browser</span>
          </span>
                </h1>

                <div className="flex items-center gap-2">
                    <label
                        htmlFor="pageSize"
                        className="text-sm font-medium text-gray-700"
                    >
                        Show:
                    </label>
                    <select
                        id="pageSize"
                        className="block w-20 rounded-md border-gray-300 py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                        onChange={handlePageSizeChange}
                        defaultValue={limit}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                    </select>
                </div>
            </div>

            <div className="relative rounded-md shadow-sm  w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 w-full">
                    <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                    type="text"
                    placeholder="Search posts by title..."
                    className="block w-full rounded-md border-0 py-3 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm"
                    onChange={handleSetTerm}
                    value={term}
                />
            </div>
        </div>
    );
}

export default PostHeader;