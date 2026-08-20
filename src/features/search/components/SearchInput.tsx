"use client";

interface SearchInputProps {
  query: string;
  onQueryChange: (query: string) => void;
  onFocus: () => void;
}

export default function SearchInput({
  query,
  onQueryChange,
  onFocus,
}: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      onFocus={onFocus}
      className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
    />
  );
}
