const Alert=({status})=>{
    switch (status) {
        case 'error':
            
            break;
        case 'warning':
        
            break;
            
        case 'info':
        
            break;
            
        case 'success':
        
            break;
        default:
            break;
    }
    return(
    <div className="mt-12 flex flex-col space-y-4 items-center mx-4 sm:mx-0">
        <div className="flex flex-row items-center rounded shadow-lg overflow-hidden w-full sm:w-11/12 md:max-w-2xl hover:shadow-xl bg-white hover:bg-red-50 dark:bg-gray-800 dark:hover:bg-gray-800 transition-transform hover:scale-95 group">
            <div className="h-full py-8 px-2 bg-red-300 group-hover:bg-red-400 dark:bg-gray-100 dark:group-hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-700 group-hover:text-red-800 dark:text-gray-600 dark:group-hover:text-gray-700"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>
            <div className="mx-4 flex-row w-full">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">Error</h1>
                <svg xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-500 pr-2 sm:pr-0 dark:text-gray-300">That password isn't right.
                Can we help you <span className="underline hover:text-red-700 dark:hover:text-gray-50 cursor-pointer">recover your
                paswword?</span></p>
            </div>
        </div>
        <div
            className="flex flex-row items-center rounded shadow-lg overflow-hidden w-full sm:w-11/12 md:max-w-2xl hover:shadow-xl bg-white hover:bg-yellow-50 dark:bg-gray-800 dark:hover:bg-gray-800 transition-transform hover:scale-95 group">
            <div className="h-full py-8 px-2 bg-yellow-300 group-hover:bg-yellow-400 dark:bg-gray-100 dark:group-hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-yellow-700 group-hover:text-yellow-800 dark:text-gray-600 dark:group-hover:text-gray-700"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            </div>
            <div className="mx-4 flex-row w-full">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">Warning</h1>
                <svg xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-500 pr-2 sm:pr-0 dark:text-gray-300">Looks like you've exceeded
                your limit. <span className="underline hover:text-yellow-700 dark:hover:text-gray-50 cursor-pointer">Need an
                upgrade?</span></p>
            </div>
        </div>
        <div
            className="flex flex-row items-center rounded shadow-lg overflow-hidden w-full sm:w-11/12 md:max-w-2xl hover:shadow-xl bg-white hover:bg-blue-50 dark:bg-gray-800 dark:hover:bg-gray-800 transition-transform hover:scale-95 group">
            <div className="h-full py-8 px-2 bg-blue-300 group-hover:bg-blue-400 dark:bg-gray-100 dark:group-hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-blue-700 group-hover:text-blue-800 dark:text-gray-600 dark:group-hover:text-gray-700"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>
            <div className="mx-4 flex-row w-full">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">Info</h1>
                <svg xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-500 pr-2 sm:pr-0 dark:text-gray-300">We've updated a few
                things. Check the <span className="underline hover:text-blue-700 dark:hover:text-gray-50 cursor-pointer">patch
                notes!</span></p>
            </div>
        </div>
        <div
            className="flex flex-row items-center rounded shadow-lg overflow-hidden w-full sm:w-11/12 md:max-w-2xl hover:shadow-xl bg-white hover:bg-green-50 dark:bg-gray-800 dark:hover:bg-gray-800 transition-transform hover:scale-95 group">
            <div className="h-full py-8 px-2 bg-green-300 group-hover:bg-green-400 dark:bg-gray-100 dark:group-hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-700 group-hover:text-green-800 dark:text-gray-600 dark:group-hover:text-gray-700"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>
            <div className="mx-4 flex-row w-full">
            <div className="flex flex-row items-center justify-between">
                <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">Success</h1>
                <svg xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 cursor-pointer text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200"
                viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
            </div>
            <p className="text-xs sm:text-sm font-medium text-gray-500 pr-2 sm:pr-0 dark:text-gray-300">The added to cart. Yay!
            </p>
            </div>
        </div>
    </div>

    )
}

export default Alert;