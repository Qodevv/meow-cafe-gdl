import React, { useState } from "react";
import { Sparkles, ShoppingBag, Globe, Menu, X, Heart, MapPin } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

interface NavbarProps {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF5F7]/95 backdrop-blur-md border-b border-[#FFCCD5] transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-[#ff809f] flex items-center justify-center text-white shadow-md shadow-[#ff809f]/30 group-hover:scale-105 transition-transform duration-300">
            <Heart size={20} className="fill-white" />
          </div>
          <div>
            <span className="font-display text-xl sm:text-2xl font-bold text-[#821c45] tracking-tight block leading-none">
              Meow Café
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#B34065] tracking-widest uppercase">
              GDL · Kawaii & Cats
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-semibold text-[#821c45]">
          <button
            onClick={() => scrollTo("menu")}
            className="hover:text-[#ff809f] transition-colors cursor-pointer py-1"
          >
            {lang === "es" ? "Menú Digital" : "Digital Menu"}
          </button>
          <button
            onClick={() => scrollTo("michis")}
            className="hover:text-[#ff809f] transition-colors cursor-pointer py-1"
          >
            {lang === "es" ? "Nuestros Michis" : "Resident Cats"}
          </button>
          <button
            onClick={() => scrollTo("experiencia")}
            className="hover:text-[#ff809f] transition-colors cursor-pointer py-1"
          >
            {lang === "es" ? "Sanrio & Ternurines" : "Sanrio & Merch"}
          </button>
          <button
            onClick={() => scrollTo("visita")}
            className="hover:text-[#ff809f] transition-colors cursor-pointer py-1"
          >
            {lang === "es" ? "Ubicación & Horarios" : "Visit & Hours"}
          </button>
        </nav>

        {/* Actions Right */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Language switcher */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#FFCCD5] bg-white text-xs font-bold text-[#821c45] hover:bg-[#FFE5EC] hover:border-[#ff809f] transition-all cursor-pointer shadow-xs"
          >
            <Globe size={13} className="text-[#ff809f]" />
            <span>{lang === "es" ? "EN" : "ES"}</span>
          </button>

          {/* Instagram link */}
          <a
            href="https://instagram.com/meowcafe.gdl"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[#FFCCD5] bg-white text-[#821c45] hover:text-[#ff809f] hover:bg-[#FFE5EC] transition-all cursor-pointer shadow-xs"
            title="Instagram @meowcafe.gdl"
          >
            <InstagramIcon size={16} />
          </a>

          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff809f] hover:bg-[#f26d8f] text-white text-xs font-bold shadow-md shadow-[#ff809f]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <ShoppingBag size={15} />
            <span>{lang === "es" ? "Mi Pedido" : "Order"}</span>
            {cartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-white text-[#ff809f] font-extrabold text-[11px] flex items-center justify-center animate-bounce-gentle">
                {cartCount}
              </span>
            )}
          </button>

          {/* Reserva Button */}
          <button
            onClick={onOpenReservation}
            className="px-4 py-2 rounded-full border border-[#821c45] bg-[#821c45] hover:bg-[#6c1437] text-white text-xs font-bold shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            {lang === "es" ? "Reservar Mesa" : "Book Table"}
          </button>

        </div>

        {/* Mobile quick actions */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Cart Icon Mobile */}
          <button
            onClick={onOpenCart}
            className="relative p-2 rounded-full bg-[#ff809f] text-white cursor-pointer active:scale-90 transition-transform"
          >
            <ShoppingBag size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#821c45] text-white font-bold text-[9px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Language Toggle Mobile */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="px-2.5 py-1 rounded-full border border-[#FFCCD5] bg-white text-xs font-bold text-[#821c45]"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#821c45] hover:text-[#ff809f] cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF5F7] border-b border-[#FFCCD5] px-6 py-5 space-y-4 text-sm font-bold text-[#821c45] animate-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => scrollTo("menu")}
            className="block w-full text-left py-1 hover:text-[#ff809f]"
          >
            {lang === "es" ? "Menú Digital & Precios" : "Digital Menu & Prices"}
          </button>
          <button
            onClick={() => scrollTo("michis")}
            className="block w-full text-left py-1 hover:text-[#ff809f]"
          >
            {lang === "es" ? "Nuestros Michis Residentes" : "Resident Cats"}
          </button>
          <button
            onClick={() => scrollTo("experiencia")}
            className="block w-full text-left py-1 hover:text-[#ff809f]"
          >
            {lang === "es" ? "Sanrio & Ternurines Corner" : "Sanrio & Merch"}
          </button>
          <button
            onClick={() => scrollTo("visita")}
            className="block w-full text-left py-1 hover:text-[#ff809f]"
          >
            {lang === "es" ? "Ubicación & Horarios" : "Location & Hours"}
          </button>

          <div className="pt-3 border-t border-[#FFCCD5] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-2.5 rounded-full bg-[#821c45] text-white text-xs font-bold text-center"
            >
              {lang === "es" ? "Reservar Mesa en Cafetería" : "Book a Table"}
            </button>
            <a
              href="https://instagram.com/meowcafe.gdl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 rounded-full border border-[#FFCCD5] bg-white text-[#821c45] text-xs font-bold text-center flex items-center justify-center gap-1.5"
            >
              <InstagramIcon size={14} className="text-[#ff809f]" />
              <span>Instagram @meowcafe.gdl</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
