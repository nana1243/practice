import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from "lucide-react";
import {usePostStore} from "../store/usePostStore";
import {twMerge} from "tailwind-merge";

function Pagination() {
    const currentPage = usePostStore((state) => state.currentPage);
    const totalPages = usePostStore((state) => state.getTotalPages());
    const setPages = usePostStore((state) => state.setCurrentPage);
    const pageLists = Array.from({length:totalPages}, (_, index) => index + 1);


    const handleClickResetPrevious = () => {
        setPages(1);
    }

    const handleClickResetNext = () => {
        setPages(totalPages);
    }


    const handleClickPrevious = () => {
        const newPage = currentPage -1;
        if(newPage>=1){
            setPages(newPage);
        }
    }
    const handelClickNext = () => {
        const newPage = currentPage +1;
        if(newPage <=totalPages){
            setPages(newPage);
        }

    }

    const handleClickPage = (pageNumber: number) => {
        console.log('this is pageNumber',pageNumber);
        setPages(pageNumber);
    }


    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg shadow-sm">
            <div className="flex flex-1 justify-between sm:hidden">
                <button
                    className={twMerge(`relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium`, currentPage !==1? 'text-gray-700 hover:bg-gray-50' :'text-gray-300 cursor-not-allowed')}
                >
                    Previous
                </button>
                <button
                    className={twMerge('relative ml-3 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium', totalPages === currentPage ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50')}
                >
                    Next
                </button>
            </div>

            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing page <span className="font-medium">{currentPage}</span> of{" "}
                        <span className="font-medium">{totalPages}</span> pages
                    </p>
                </div>

                <div>
                    <nav
                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                        aria-label="Pagination"
                    >
                        <button
                            className={twMerge('relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0', currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-gray-50')}
                            onClick={handleClickResetPrevious}
                        >
                            <span className="sr-only">First page</span>
                            <ChevronsLeft className="h-5 w-5" aria-hidden="true" />
                        </button>

                        {/* 클릭하면 1페이지 감소 */}
                        <button
                            className={twMerge('relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0', currentPage === 1 ? 'cursor-not-allowed' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-gray-50')}
                            onClick={handleClickPrevious}
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>

                        {pageLists.map((pageNumber)=>(
                            <>
                                <button
                                    className={twMerge('relative inline-flex items-center px-4 py-2 text-sm font-semibold', currentPage === pageNumber ? 'z-10 bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0')}
                                    onClick={()=>handleClickPage(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            </>))}
                        {/* 클릭하면 맨 1페이지 증가 */}
                        <button
                            className={twMerge('relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0', currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-gray-50')}
                            onClick={handelClickNext}
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>

                        {/* 클릭하면 맨 마지막 페이지로 */}
                        <button
                            className={twMerge('relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0', currentPage === totalPages ? 'cursor-not-allowed' : 'hover:bg-gray-50 focus:z-20 focus:outline-offset-0 hover:bg-gray-50')}
                            onClick={handleClickResetNext}
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