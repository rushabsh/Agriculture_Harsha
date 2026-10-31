export default function ProductsCategoryTabs({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2.5">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        return (
          <button
            key={cat}
            type="button"
            suppressHydrationWarning
            onClick={() => onSelectCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shadow-xs ${
              isSelected
                ? "bg-[#0D4E22] text-white shadow-md scale-105 ring-2 ring-[#5BC242]/50"
                : "bg-white text-gray-700 border border-gray-200/80 hover:bg-[#FAF8F2] hover:text-black hover:border-gray-400"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
