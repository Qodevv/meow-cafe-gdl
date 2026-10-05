import React from "react";
import { Heart, MapPin, ArrowUp } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

interface FooterProps {
  lang: "es" | "en";
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FFF0F4] border-t border-[#FFCCD5] pt-16 pb-12 text-[#7A3E52]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FFCCD5]">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#ff809f] flex items-center justify-center text-white shadow-md shadow-[#ff809f]/30">
                <Heart size={20} className="fill-white" />
              </div>
              <span className="font-display text-2xl font-bold text-[#821c45]">
                Meow Café GDL
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#7A3E52] max-w-sm leading-relaxed">
              {lang === "es"
                ? "Cafetería temática kawaii en Guadalajara, Jalisco. Sanrio, Ternurines, postres soufflé japoneses, boba tea y gatitos residentes felices."
                : "Kawaii themed cat cafe in Guadalajara, Mexico. Sanrio, Sylvanian Families, fluffy soufflé desserts, boba tea, and happy resident cats."}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/meowcafe.gdl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-[#FFCCD5] text-[#821c45] hover:text-[#ff809f] hover:bg-[#FFE5EC] transition-all"
                title="Instagram @meowcafe.gdl"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61558746729715"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-[#FFCCD5] text-[#821c45] hover:text-[#ff809f] hover:bg-[#FFE5EC] transition-all"
                title="Facebook Café Meow Gdl"
              >
                <FacebookIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links (4 Cols) */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-display text-sm font-bold text-[#821c45] uppercase tracking-wider">
              {lang === "es" ? "Navegación Rápida" : "Navigation"}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="hover:text-[#ff809f] transition-colors">
                  {lang === "es" ? "Menú Digital & Precios" : "Digital Menu & Prices"}
                </a>
              </li>
              <li>
                <a href="#michis" className="hover:text-[#ff809f] transition-colors">
                  {lang === "es" ? "Nuestros Michis Residentes" : "Meet the Cats"}
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-[#ff809f] transition-colors">
                  {lang === "es" ? "Sanrio & Ternurines Corner" : "Sanrio & Merch"}
                </a>
              </li>
              <li>
                <a href="#visita" className="hover:text-[#ff809f] transition-colors">
                  {lang === "es" ? "Ubicación & Horarios" : "Location & Hours"}
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Hours (3 Cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-display text-sm font-bold text-[#821c45] uppercase tracking-wider">
              {lang === "es" ? "Visítanos" : "Visit Us"}
            </h4>
            <p className="leading-relaxed">
              Paseo de los Filósofos 1916, Jardines Alcalde, Guadalajara, Jal.
            </p>
            <p className="font-semibold text-[#821c45]">
              {lang === "es" ? "Mié – Lun: 3:00 PM – 10:00 PM" : "Wed – Mon: 3:00 PM – 10:00 PM"}
            </p>
            <p className="text-[11px] text-[#B34065]">
              {lang === "es" ? "Martes cerrado por descanso felino" : "Closed Tuesdays for cat rest"}
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B34065] gap-4">
          <p>
            © {new Date().getFullYear()} Meow Café GDL · {lang === "es" ? "Hecho con amor y ronroneos" : "Made with love and purrs"}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#ff809f] transition-colors cursor-pointer"
          >
            <span>{lang === "es" ? "Subir al inicio" : "Back to top"}</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};
