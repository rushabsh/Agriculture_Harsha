import { Search, Filter } from "lucide-react";

export default function TechnicalCatalogFilter({
  filteredCount,
  searchQuery,
  onSearchChange,
  subCategories,
  selectedSubCategory,
  onSelectSubCategory,
}) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D4E22] bg-[#5BC242]/15 px-3.5 py-1 rounded-full">
            Technical Catalog ({filteredCount} Products)
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif mt-2">
            Available Grades & Technical Specifications
          </h3>
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            aria-label="Search technical grades and products"
            placeholder="Search grade, role, or technical..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#5BC242] text-gray-800 placeholder-gray-400"
          />
          {searchQuery && (
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Subcategory Filter Pills */}
      {subCategories && subCategories.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-bold text-gray-500 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" /> Sub-Group:
          </span>
          {subCategories.map((sub) => {
            const isSubActive = selectedSubCategory === sub;
            return (
              <button
                key={sub}
                type="button"
                suppressHydrationWarning
                onClick={() => onSelectSubCategory(sub)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer shadow-2xs ${
                  isSubActive
                    ? "bg-[#0D4E22] text-white shadow-xs ring-1 ring-[#5BC242]/50"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {sub}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
