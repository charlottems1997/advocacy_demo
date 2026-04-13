export function AISummaryTable () {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Table Container */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm overflow-hidden">
        
        {/* Table Header */}
        <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-gray-50 dark:bg-gray-800">
          <div className="text-lg font-semibold text-gray-900 dark:text-white">
            Recent Articles
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            0 results
          </div>
        </div>

        {/* Empty State */}
        <div className="min-h-[420px] flex flex-col items-center justify-center p-12 text-center">
          
          {/* Icon */}
          <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-8 h-8 text-gray-400" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M20 13V6a2 2 0 01-2-2H6a2 2 0 01-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-4a2 2 0 01-2 2v2m-4-6v6" 
              />
            </svg>
          </div>

          {/* Text Content */}
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
            No articles yet
          </h3>
          <p className="max-w-sm text-gray-500 dark:text-gray-400">
            Once you summarize some web articles, they will appear here in a clean table format.
          </p>

          {/* CTA Button */}
          <button className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors flex items-center gap-2">
            Summarize New Article
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-4 h-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={3}
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 4v16m8-8H4" 
              />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default AISummaryTable;