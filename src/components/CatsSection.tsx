import React, { useState } from "react";
import { RESIDENT_CATS, CAFE_RULES, ResidentCat } from "../data/meowData";
import { Heart, Sparkles, ShieldCheck, Smile, Gift } from "lucide-react";

interface CatsSectionProps {
  lang: "es" | "en";
}

export const CatsSection: React.FC<CatsSectionProps> = ({ lang }) => {
  const [selectedCat, setSelectedCat] = useState<ResidentCat>(RESIDENT_CATS[0]);
  const [purrCounts, setPurrCounts] = useState<{ [id: string]: number }>({
    mochi: 42,
    sakura: 56,
    boba: 39,
    "matcha-cat": 64,
  });

  const handlePurr = (catId: string) => {
    setPurrCounts((prev) => ({
      ...prev,
      [catId]: (prev[catId] || 0) + 1,
    }));
  };

  return (
    <section id="michis" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#FFCCD5]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-[#ff809f] font-bold block mb-2">
          // cat_residents
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#791529] tracking-tight mb-4">
          {lang === "es" ? "Conoce a nuestros Michis" : "Meet Our Resident Cats"}
        </h2>
        <p className="text-sm sm:text-base text-[#7A3E52] leading-relaxed">
          {lang === "es"
            ? "Ellos son los verdaderos dueños de Meow Café. Cada uno tiene una personalidad cariñosa y única. ¡Ven a consentirlos en persona!"
            : "They are the true owners of Meow Café. Each kitty has a unique, loving personality. Come give them gentle pets in person!"}
        </p>
      </div>

      {/* Cat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {RESIDENT_CATS.map((cat) => {
          const isSelected = selectedCat.id === cat.id;
          const purrs = purrCounts[cat.id] || 0;

          return (
            <div
              key={cat.id}
              onClick={() => setSelectedCat(cat)}
              className={`bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-between group ${
                isSelected
                  ? "border-[#ff809f] shadow-[#ff809f]/20 -translate-y-1.5"
                  : "border-[#FFCCD5] hover:border-[#ff809f]/60"
              }`}
            >
              {/* Photo with Overlay Badge */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#FFE5EC]">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-bold text-[#821c45] shadow-xs">
                  {lang === "es" ? cat.gender : cat.genderEn} · {cat.age}
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-2xl font-bold text-[#791529]">
                      {cat.name}
                    </h3>
                    {/* Cuddle Rating */}
                    <div className="flex items-center gap-0.5" title="Nivel de mimos">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Heart
                          key={i}
                          size={12}
                          className={
                            i < cat.cuddleLevel
                              ? "fill-[#ff809f] text-[#ff809f]"
                              : "text-[#FFD6DF]"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-[#B34065] block mb-2">
                    {lang === "es" ? cat.breed : cat.breedEn}
                  </span>

                  <p className="text-xs text-[#7A3E52] leading-relaxed">
                    {lang === "es" ? cat.personality : cat.personalityEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#FFE5EC] space-y-1.5 text-[11px] text-[#6B3A4A]">
                  <div>
                    <strong className="text-[#821c45]">
                      {lang === "es" ? "Snack favorito:" : "Favorite treat:"}
                    </strong>{" "}
                    {cat.favoriteSnack}
                  </div>
                  <div>
                    <strong className="text-[#821c45]">
                      {lang === "es" ? "Juguete preferido:" : "Favorite toy:"}
                    </strong>{" "}
                    {cat.favoriteToy}
                  </div>
                </div>

                {/* Virtual Purr Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePurr(cat.id);
                  }}
                  className="w-full py-2.5 rounded-full bg-[#FFF0F4] hover:bg-[#ff809f] hover:text-white text-[#821c45] text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
                >
                  <Heart size={14} className="fill-current" />
                  <span>{lang === "es" ? "Dar mimito" : "Pet kitty"}</span>
                  <span className="px-1.5 py-0.5 rounded-full bg-white/70 text-[10px] text-[#821c45]">
                    {purrs}
                  </span>
                </button>

              </div>
            </div>
          );
        })}
      </div>

      {/* Rules for Safe & Loving Cat Interaction */}
      <div className="bg-[#FFF0F4] border-2 border-[#FFCCD5] rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-8 h-8 rounded-xl bg-[#ff809f] text-white flex items-center justify-center">
            <ShieldCheck size={18} />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#791529]">
              {lang === "es" ? "Reglamento para consentir a los Michis" : "Kitty Etiquette & Care Guidelines"}
            </h3>
            <span className="text-xs text-[#821c45] font-semibold">
              {lang === "es" ? "Cuidamos su descanso y bienestar en cada momento" : "Ensuring cat happiness and peace at all times"}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAFE_RULES.map((rule, idx) => (
            <div key={idx} className="bg-white/90 rounded-2xl p-4 border border-[#FFCCD5] shadow-xs">
              <span className="text-xs font-extrabold text-[#ff809f] block mb-1">
                0{idx + 1}
              </span>
              <h4 className="font-bold text-xs sm:text-sm text-[#821c45] mb-1">
                {lang === "es" ? rule.title : rule.titleEn}
              </h4>
              <p className="text-[11px] sm:text-xs text-[#7A3E52] leading-relaxed">
                {lang === "es" ? rule.desc : rule.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
