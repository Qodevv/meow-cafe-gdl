import React from "react";
import { REVIEWS } from "../data/meowData";
import { Star, MapPin, Clock, ExternalLink, Heart, MessageSquare } from "lucide-react";

interface ReviewsAndLocationProps {
  lang: "es" | "en";
}

export const ReviewsAndLocation: React.FC<ReviewsAndLocationProps> = ({ lang }) => {
  return (
    <section id="visita" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#FFCCD5]">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-[#ff809f] font-bold block mb-2">
          // location_community
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#791529] tracking-tight mb-4">
          {lang === "es" ? "Visítanos en Guadalajara" : "Visit Us in Guadalajara"}
        </h2>
        <p className="text-sm sm:text-base text-[#7A3E52] leading-relaxed">
          {lang === "es"
            ? "Un oasis kawaii en Jardines Alcalde para desconectar del estrés de la ciudad con un café aromático y gatitos cariñosos."
            : "A kawaii haven in Jardines Alcalde to disconnect from daily city rush with fragrant coffee and affectionate cats."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Location Card (5 Cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#FFCCD5] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0F4] text-[#ff809f] flex items-center justify-center shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[#791529]">
                Meow Café GDL
              </h3>
              <span className="text-xs text-[#821c45] font-semibold">
                Jardines Alcalde, Guadalajara Centro
              </span>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#7A3E52]">
            <div className="p-4 rounded-2xl bg-[#FFF5F7] border border-[#FFD6DF]">
              <strong className="text-[#821c45] block mb-1">
                {lang === "es" ? "Dirección Completa:" : "Full Address:"}
              </strong>
              <p className="leading-relaxed">
                C. Paseo de los Filósofos 1916, Fraccionamiento Jardines Alcalde, C.P. 44270, Guadalajara, Jalisco, México.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF5F7] border border-[#FFD6DF] flex items-start gap-3">
              <Clock size={18} className="text-[#ff809f] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#821c45] block mb-0.5">
                  {lang === "es" ? "Horario de Atención:" : "Opening Hours:"}
                </strong>
                <p className="leading-relaxed">
                  {lang === "es"
                    ? "Miércoles a Lunes: 3:00 PM – 10:00 PM"
                    : "Wednesday to Monday: 3:00 PM – 10:00 PM"}
                </p>
                <p className="text-[11px] text-[#B34065] font-bold mt-1">
                  {lang === "es" ? "★ Martes: Cerrado por descanso de los michis" : "★ Tuesday: Closed for kitty rest day"}
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=Paseo+de+los+Filosofos+1916+Guadalajara"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-full bg-[#ff809f] hover:bg-[#f26d8f] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#ff809f]/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
          >
            <span>{lang === "es" ? "Abrir en Google Maps" : "Open in Google Maps"}</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Right Reviews Grid (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <Star size={20} className="fill-[#ff809f] text-[#ff809f]" />
              <span className="font-display text-xl font-bold text-[#791529]">
                4.8 / 5.0
              </span>
              <span className="text-xs text-[#7A3E52] font-semibold">
                (Google Reviews · 150+ {lang === "es" ? "opiniones" : "reviews"})
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {REVIEWS.map((rev, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-[#FFCCD5] shadow-xs space-y-2 hover:border-[#ff809f] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs sm:text-sm text-[#821c45]">
                      {rev.name}
                    </span>
                    <span className="text-[10px] text-[#B34065]">
                      · {rev.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: rev.rating }).map((_, rIdx) => (
                      <Star key={rIdx} size={13} className="fill-[#ff809f] text-[#ff809f]" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-[#7A3E52] leading-relaxed italic">
                  "{lang === "es" ? rev.comment : rev.commentEn}"
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
};
