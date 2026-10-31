import TechnicalGradeCard from "./TechnicalGradeCard";

export default function TechnicalGradesGrid({
  grades,
  category,
  searchQuery,
  onReset,
}) {
  if (grades.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-12 text-center border border-gray-200 space-y-3">
        <p className="text-base font-bold text-gray-800">
          No matching technicals found for &quot;{searchQuery}&quot;
        </p>
        <p className="text-xs text-gray-500">
          Try searching with another formulation name or click below to reset.
        </p>
        <button
          type="button"
          suppressHydrationWarning
          onClick={onReset}
          className="inline-flex items-center px-4 py-2 bg-[#0D4E22] text-white text-xs font-bold rounded-xl cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {grades.map((grade, idx) => (
        <TechnicalGradeCard
          key={`${grade.name}-${idx}`}
          grade={grade}
          index={idx}
          category={category}
        />
      ))}
    </div>
  );
}
