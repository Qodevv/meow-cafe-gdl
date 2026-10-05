import React, { useState } from "react";
import { MENU_ITEMS, MenuItem } from "../data/meowData";
import { Search, Plus, Sparkles, Check, Heart, ShoppingBag } from "lucide-react";

interface MenuSectionProps {
  lang: "es" | "en";
  onAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ lang, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const categories = [
    { id: "all", labelEs: "Todo el Menú", labelEn: "All Menu" },
    { id: "bebidas", labelEs: "Bebidas & Boba", labelEn: "Drinks & Boba" },
    { id: "postres", labelEs: "Postres & Dulces", labelEn: "Desserts & Pastries" },
    { id: "salados", labelEs: "Ramen & Salados", labelEn: "Ramen & Savory" },
    { id: "sanrio", labelEs: "Sanrio & Ternurines", labelEn: "Sanrio & Merch" },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesName =
      item.name.toLowerCase().includes(query) ||
      item.nameEn.toLowerCase().includes(query);
    const matchesTagline =
      item.tagline.toLowerCase().includes(query) ||
      item.taglineEn.toLowerCase().includes(query);
    const matchesDietary = item.dietary?.some((d) =>
      d.toLowerCase().includes(query)
    );

    return matchesCategory && (matchesName || matchesTagline || matchesDietary);
  });

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemNotice(item.id);
    setTimeout(() => {
      setAddedItemNotice(null);
    }, 1200);
  };

  return (
    <section id="menu" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#FFCCD5]">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#ff809f] font-bold block mb-2">
            // kawaii_kitchen
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#791529] tracking-tight">
            {lang === "es" ? "Menú Digital & Precios" : "Digital Menu & Pricing"}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#7A3E52] max-w-md leading-relaxed">
          {lang === "es"
            ? "Bebidas artesanales con boba, repostería soufflé temiblemente esponjosa y platillos japoneses preparados al momento."
            : "Handcrafted boba drinks, cloud-soft Japanese soufflé pastries, and authentic comfort dishes prepared to order."}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
        
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#ff809f] text-white shadow-md shadow-[#ff809f]/30 scale-105"
                    : "bg-white text-[#821c45] border border-[#FFCCD5] hover:bg-[#FFF0F4]"
                }`}
              >
                {lang === "es" ? cat.labelEs : cat.labelEn}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B34065]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === "es" ? "Buscar platillo, matcha..." : "Search menu, matcha..."}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-[#FFCCD5] focus:border-[#ff809f] text-xs font-medium text-[#821c45] outline-none transition-colors"
          />
        </div>

      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => {
          const isRecentlyAdded = addedItemNotice === item.id;

          return (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#FFCCD5] hover:border-[#ff809f] transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group"
            >
              
              {/* Product Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-[#FFE5EC]">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.isPopular && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ff809f] text-white font-bold text-[10px] shadow-xs">
                      {lang === "es" ? "Popular" : "Popular"}
                    </span>
                  )}
                  {item.isKawaiiSignature && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#821c45] text-white font-bold text-[10px] shadow-xs">
                      {lang === "es" ? "Favorito Meow" : "Meow Pick"}
                    </span>
                  )}
                </div>

                {/* Price Pill */}
                <div className="absolute bottom-3 right-3 px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-xs font-display text-sm font-bold text-[#821c45] shadow-sm">
                  ${item.price} MXN
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#791529] mb-1 group-hover:text-[#ff809f] transition-colors">
                    {lang === "es" ? item.name : item.nameEn}
                  </h3>

                  <p className="text-xs font-semibold text-[#821c45] leading-relaxed mb-2.5">
                    {lang === "es" ? item.tagline : item.taglineEn}
                  </p>

                  <p className="text-[11px] sm:text-xs text-[#7A3E52] leading-relaxed mb-4">
                    {lang === "es" ? item.description : item.descriptionEn}
                  </p>

                  {/* Dietary / Feature Tags */}
                  {item.dietary && (
                    <div className="flex flex-wrap gap-1.5">
                      {item.dietary.map((d, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-[#FFF0F4] text-[10px] font-semibold text-[#821c45]"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Add to Cart CTA */}
                <div className="pt-4 border-t border-[#FFE5EC] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#821c45]">
                    ${item.price}.00
                  </span>

                  <button
                    onClick={() => handleAdd(item)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 cursor-pointer active:scale-95 ${
                      isRecentlyAdded
                        ? "bg-[#10B981] text-white shadow-md shadow-[#10B981]/30"
                        : "bg-[#ff809f] hover:bg-[#f26d8f] text-white shadow-md shadow-[#ff809f]/30 hover:scale-105"
                    }`}
                  >
                    {isRecentlyAdded ? (
                      <>
                        <Check size={14} />
                        <span>{lang === "es" ? "Agregado!" : "Added!"}</span>
                      </>
                    ) : (
                      <>
                        <Plus size={14} />
                        <span>{lang === "es" ? "Agregar a mi orden" : "Add to order"}</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
