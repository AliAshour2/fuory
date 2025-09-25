import { Search } from "lucide-react";

interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Sidebar = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchTerm,
  setSearchTerm,
}: SidebarProps) => {
  return (
    <aside className="w-full md:w-1/4 p-8 bg-gray-50">
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Find product..."
          alt="Search products"
          className="w-full p-2 pr-10 border border-gray-300 rounded-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" />
      </div>
      <h2 className="text-3xl font-semibold mb-4 ">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-2xl text-left text-gray-700 hover:text-green-500 ${
                selectedCategory === category ? "font-bold" : ""
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
