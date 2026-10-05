import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CatsSection } from "./components/CatsSection";
import { MenuSection } from "./components/MenuSection";
import { SanrioExperience } from "./components/SanrioExperience";
import { ReviewsAndLocation } from "./components/ReviewsAndLocation";
import { ReservationModal } from "./components/ReservationModal";
import { CartDrawer, CartItem } from "./components/CartDrawer";
import { Footer } from "./components/Footer";
import { MenuItem } from "./data/meowData";

function detectInitialLanguage(): "es" | "en" {
  try {
    const saved = localStorage.getItem("meow_lang");
    if (saved === "es" || saved === "en") return saved;
  } catch {}

  if (typeof navigator !== "undefined") {
    const browserLang = (navigator.language || (navigator as any).userLanguage || "").toLowerCase();
    if (browserLang.startsWith("es")) return "es";
    if (browserLang.startsWith("en")) return "en";
  }

  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone.toLowerCase();
    const spanishRegions = [
      "mexico", "bogota", "buenos_aires", "santiago", "lima", "madrid",
      "caracas", "montevideo", "asuncion", "la_paz", "quito", "guatemala",
      "tegucigalpa", "san_salvador", "managua", "san_jose", "panama", "havana",
      "santo_domingo", "monterrey", "tijuana", "cancun", "chihuahua", "cordoba",
      "mendoza", "argentina", "colombia", "chile", "peru", "spain"
    ];
    if (spanishRegions.some((r) => tz.includes(r))) {
      return "es";
    }
  } catch {}

  return "es"; // Meow Cafe GDL defaults to Spanish for local Jalisco audience
}

export function App() {
  const [lang, setLang] = useState<"es" | "en">(detectInitialLanguage);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);

  const handleSetLang = (newLang: "es" | "en") => {
    setLang(newLang);
    try {
      localStorage.setItem("meow_lang", newLang);
    } catch {}
  };

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((ci) => {
          if (ci.item.id === id) {
            const newQ = ci.quantity + delta;
            return newQ > 0 ? { ...ci, quantity: newQ } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((ci) => ci.item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalItemsCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5F7] text-[#5C2333] selection:bg-[#ff809f] selection:text-white relative">
      
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        setLang={handleSetLang}
        cartCount={totalItemsCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenReservation={() => setReservationOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <Hero
          lang={lang}
          onExploreMenu={() => scrollTo("menu")}
          onExploreCats={() => scrollTo("michis")}
          onOpenReservation={() => setReservationOpen(true)}
        />

        {/* Resident Cats Section */}
        <CatsSection lang={lang} />

        {/* Digital Menu */}
        <MenuSection
          lang={lang}
          onAddToCart={handleAddToCart}
        />

        {/* Sanrio & Ternurines Corner */}
        <SanrioExperience lang={lang} />

        {/* Location & Reviews */}
        <ReviewsAndLocation lang={lang} />
      </main>

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
        lang={lang}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        lang={lang}
      />

      {/* Footer */}
      <Footer lang={lang} />

    </div>
  );
}

export default App;
