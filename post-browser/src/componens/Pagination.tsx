import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import {usePostStore} from "../store/usePostStore";

function Pagination() {
    const currentPage = usePostStore((state) => state.currentPage);
    const totalPages = usePostStore((state) => state.getTotalPages());


    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg shadow-sm">
            <div className="flex flex-1 justify-between sm:hidden">
                {/* 현재 페이지가 1페이지면 : text-gray-300 cursor-not-allowed  */}
                {/* 그게 아니라면(기본값): text-gray-700 hover:bg-gray-50 */}
                <button
                    className={`relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
                >
                    Previous
                </button>
                {/* page === totalPage -> text-gray-300 cursor-not-allowed */}
                {/* text-gray-700 hover:bg-gray-50 */}
                <button
                    className={`relative ml-3 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`}
                >
                    Next
                </button>
            </div>

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing page <span className="font-medium">1</span> of{" "}
                        <span className="font-medium">1</span> pages
                    </p>
                </div>

                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        {/* 클릭하면 1 페이지로 */}
                        {/* page === 1 -> cursor-not-allowed */}
                        {/* hover:bg-gray-50 */}
                        <button
                            className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 cursor-not-allowed`}
                        >
                            <span className="sr-only">First page</span>
                            <ChevronsLeft className="h-5 w-5" aria-hidden="true" />
                        </button>

                        {/* 클릭하면 1페이지 감소 */}
                        {/* page === 1 -> cursor-not-allowed */}
                        {/* hover:bg-gray-50 */}
                        <button
                            className={`relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 cursor-not-allowed`}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>

                        {/* 현재 페이지는 z-10 bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 */}
                        {/* 그게아니라면(기본값) text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 */}
                        <button
                            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                        >
                            1
                        </button>

                        {/* 클릭하면 맨 1페이지 증가 */}
                        {/* 현재 페이지가 총 페이지랑 같으면 : cursor-not-allowed */}
                        {/* 그게 아니라면(기본값): hover:bg-gray-50 */}
                        <button
                            className={`relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 hover:bg-gray-50`}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>

                        {/* 클릭하면 맨 마지막 페이지로 */}
                        {/* 현재 페이지가 총 페이지랑 같으면 : cursor-not-allowed */}
                        {/* 그게 아니라면(기본값): hover:bg-gray-50 */}
                        <button
                            className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0 hover:bg-gray-50 `}
                        >
                            <span className="sr-only">Last page</span>
                            <ChevronsRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Pagination;