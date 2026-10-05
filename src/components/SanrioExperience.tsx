import React from "react";
import { Sparkles, Heart, Camera, Gift, ShoppingBag, Music } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

interface SanrioExperienceProps {
  lang: "es" | "en";
}

export const SanrioExperience: React.FC<SanrioExperienceProps> = ({ lang }) => {
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#FFCCD5]">
      
      <div className="bg-gradient-to-br from-[#FFF0F4] via-[#FFE5EC] to-[#FFF0F4] rounded-3xl p-6 sm:p-14 border-2 border-[#FFCCD5] shadow-md relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff809f]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#ff809f] font-bold block">
              // sanrio_ternurines_corner
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#791529] tracking-tight leading-tight">
              {lang === "es"
                ? "El rincón más aesthetic de Guadalajara."
                : "Guadalajara's most aesthetic pastel haven."}
            </h2>

            <p className="text-sm sm:text-base text-[#7A3E52] leading-relaxed">
              {lang === "es"
                ? "En Meow Café combinamos la calidez de una cafetería japonesa con la ternura de Sanrio y Ternurines (Sylvanian Families). Puedes abrir blind boxes en tu mesa, tomar fotos inolvidables y llevarte artículos coleccionables exclusivos."
                : "At Meow Café we blend authentic Japanese cafe hospitality with the irresistible charm of Sanrio and Sylvanian Families. Unbox surprise blind bags right at your table and take home official collectible merch."}
            </p>

            {/* Experience Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-white/90 border border-[#FFCCD5] shadow-xs flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFF0F4] text-[#ff809f] shrink-0">
                  <Gift size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#821c45] mb-0.5">
                    {lang === "es" ? "Blind Boxes Originales" : "Original Blind Boxes"}
                  </h4>
                  <p className="text-[11px] text-[#7A3E52]">
                    {lang === "es" ? "Ternurines y accesorios miniatura oficiales." : "Official flocked critters & miniature accessories."}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-[#FFCCD5] shadow-xs flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFF0F4] text-[#ff809f] shrink-0">
                  <Camera size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#821c45] mb-0.5">
                    {lang === "es" ? "Photo Spots & TikToks" : "Photo & TikTok Spots"}
                  </h4>
                  <p className="text-[11px] text-[#7A3E52]">
                    {lang === "es" ? "Fondos pastel iluminados y peluches gigantes." : "Pastel illuminated backdrops & giant plushies."}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-[#FFCCD5] shadow-xs flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFF0F4] text-[#ff809f] shrink-0">
                  <Music size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#821c45] mb-0.5">
                    {lang === "es" ? "Lofi Chill & Relajación" : "Lofi Chill Ambience"}
                  </h4>
                  <p className="text-[11px] text-[#7A3E52]">
                    {lang === "es" ? "Música suave ideal para leer o trabajar." : "Gentle beats perfect for reading or sketching."}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-[#FFCCD5] shadow-xs flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFF0F4] text-[#ff809f] shrink-0">
                  <Heart size={18} className="fill-[#ff809f]" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#821c45] mb-0.5">
                    {lang === "es" ? "Adopción Responsable" : "Responsible Rehoming"}
                  </h4>
                  <p className="text-[11px] text-[#7A3E52]">
                    {lang === "es" ? "Colaboramos con refugios locales de Jalisco." : "We partner with local cat rescues in Jalisco."}
                  </p>
                </div>
              </div>

            </div>

            {/* Social CTA */}
            <div className="pt-2">
              <a
                href="https://instagram.com/meowcafe.gdl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FFF0F4] border-2 border-[#ff809f] text-[#821c45] font-bold text-xs shadow-sm hover:scale-105 active:scale-95 transition-all"
              >
                <InstagramIcon size={16} className="text-[#ff809f]" />
                <span>{lang === "es" ? "Síguenos en Instagram @meowcafe.gdl" : "Follow on Instagram @meowcafe.gdl"}</span>
              </a>
            </div>

          </div>

          {/* Right Column Showcase Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#FFCCD5] shadow-lg space-y-6 text-center">
            
            <div className="w-16 h-16 rounded-2xl bg-[#FFF0F4] text-[#ff809f] mx-auto flex items-center justify-center shadow-inner">
              <Sparkles size={32} />
            </div>

            <h3 className="font-display text-2xl font-bold text-[#791529]">
              {lang === "es" ? "¿Listo para tu dosis de ternura?" : "Ready for your daily cute dose?"}
            </h3>

            <p className="text-xs sm:text-sm text-[#7A3E52] leading-relaxed">
              {lang === "es"
                ? "Estamos en Paseo de los Filósofos 1916, Col. Jardines Alcalde en Guadalajara. Abiertos todos los días de 3:00 PM a 10:00 PM (martes cerrado)."
                : "Find us at Paseo de los Filósofos 1916, Col. Jardines Alcalde in Guadalajara. Open daily 3:00 PM to 10:00 PM (closed Tuesdays)."}
            </p>

            <div className="p-4 rounded-2xl bg-[#FFF5F7] border border-[#FFD6DF] text-xs font-semibold text-[#821c45] flex items-center justify-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>{lang === "es" ? "Acceso libre a cafetería · Sala de Michis" : "Free walk-in cafe · Kitty lounge access"}</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
