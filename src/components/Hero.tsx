import React from "react";
import { Sparkles, MapPin, Clock, Star, Heart, ArrowRight } from "lucide-react";

interface HeroProps {
  lang: "es" | "en";
  onExploreMenu: () => void;
  onExploreCats: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onExploreMenu,
  onExploreCats,
  onOpenReservation,
}) => {
  return (
    <section id="hero" className="relative pt-8 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-8 overflow-hidden bg-gradient-to-b from-[#FFF0F4] via-[#FFF5F7] to-[#FFF5F7]">
      
      {/* Ambient Pastel Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#ff809f]/30 via-[#FFB3C6]/25 to-[#F3D8C7]/30 blur-[90px] sm:blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Top Kawaii Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FFCCD5] text-xs font-bold text-[#821c45] shadow-sm mb-6 sm:mb-8 animate-float-soft">
          <span className="w-2 h-2 rounded-full bg-[#ff809f] animate-ping" />
          <span>{lang === "es" ? "Somos una cafetería kawaii en GDL" : "Kawaii Cat Café in Guadalajara"}</span>
          <span className="text-[#FFCCD5]">·</span>
          <span className="text-[#B34065]">Sanrio & Ternurines</span>
        </div>

        {/* Big Display Title in Calistoga font */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-[#791529] tracking-tight leading-[1.12] mb-6 sm:mb-8 max-w-4xl mx-auto">
          {lang === "es" ? (
            <>
              Postres de ensueño, bebidas boba y el amor de{" "}
              <span className="text-[#ff809f] underline decoration-wavy decoration-[#FFB3C6] underline-offset-8">
                nuestros michis.
              </span>
            </>
          ) : (
            <>
              Dreamy pastries, artisan boba, and the warm purrs of{" "}
              <span className="text-[#ff809f] underline decoration-wavy decoration-[#FFB3C6] underline-offset-8">
                our resident cats.
              </span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#7A3E52] max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 font-medium">
          {lang === "es" ? (
            <>
              Ubicados en <strong>Jardines Alcalde, Guadalajara</strong>. Disfruta de pancakes japoneses soufflé, ramen kawaii, coleccionables de Sanrio y Ternurines mientras te relajas con nuestros gatitos.
            </>
          ) : (
            <>
              Located in <strong>Jardines Alcalde, Guadalajara</strong>. Savor Japanese soufflé pancakes, kawaii ramen, Sanrio collectibles, and cuddle with our rescued resident kitties.
            </>
          )}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12 sm:mb-16">
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#ff809f] hover:bg-[#f26d8f] text-white font-bold text-sm shadow-lg shadow-[#ff809f]/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{lang === "es" ? "Ver Menú & Ordenar" : "Explore Menu & Order"}</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onExploreCats}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-[#FFF0F4] border-2 border-[#FFCCD5] text-[#821c45] font-bold text-sm hover:border-[#ff809f] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <Heart size={16} className="text-[#ff809f] fill-[#ff809f]" />
            <span>{lang === "es" ? "Conocer a los Michis" : "Meet Our Cats"}</span>
          </button>

          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#821c45] hover:bg-[#6c1437] text-white font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>{lang === "es" ? "Reservar Mesa" : "Book Table"}</span>
          </button>
        </div>

        {/* Quick Facts Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          
          <div className="bg-white/90 border border-[#FFD6DF] rounded-2xl p-4 shadow-sm flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0F4] text-[#ff809f] flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#821c45] uppercase tracking-wider block">
                {lang === "es" ? "Ubicación GDL" : "Location"}
              </span>
              <span className="text-xs text-[#6B3A4A] font-semibold leading-tight block">
                P.º de los Filósofos 1916, Jardines Alcalde
              </span>
            </div>
          </div>

          <div className="bg-white/90 border border-[#FFD6DF] rounded-2xl p-4 shadow-sm flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0F4] text-[#ff809f] flex items-center justify-center shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#821c45] uppercase tracking-wider block">
                {lang === "es" ? "Horario de Visita" : "Visiting Hours"}
              </span>
              <span className="text-xs text-[#6B3A4A] font-semibold leading-tight block">
                3:00 PM – 10:00 PM · {lang === "es" ? "Mié a Lun (Martes Cerrado)" : "Wed to Mon (Closed Tue)"}
              </span>
            </div>
          </div>

          <div className="bg-white/90 border border-[#FFD6DF] rounded-2xl p-4 shadow-sm flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0F4] text-[#ff809f] flex items-center justify-center shrink-0">
              <Star size={20} className="fill-[#ff809f]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#821c45] uppercase tracking-wider block">
                Google Reviews
              </span>
              <span className="text-xs text-[#6B3A4A] font-semibold leading-tight block">
                4.8 / 5.0 ⭐ · {lang === "es" ? "150+ Clientes felices" : "150+ Happy guests"}
              </span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
