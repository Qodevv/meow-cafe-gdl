import React from "react";
import { MenuItem } from "../data/meowData";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  lang: "es" | "en";
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  lang,
}) => {
  if (!isOpen) return null;

  const total = items.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let itemsList = items
      .map(
        (ci) =>
          `• ${ci.quantity}x ${ci.item.name} ($${ci.item.price * ci.quantity} MXN)`
      )
      .join("\n");

    const message = `¡Hola Meow Café GDL! 🍓🐾 Me gustaría realizar el siguiente pedido:\n\n${itemsList}\n\n💰 Total: $${total} MXN\n\n¿Me confirman para pasar por él / entrega en mesa? ¡Muchas gracias! ✨`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/523312345678?text=${encoded}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div className="w-full max-w-md bg-[#FFF5F7] h-full shadow-2xl flex flex-col justify-between border-l border-[#FFCCD5] animate-in slide-in-from-right duration-300">
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-[#FFCCD5] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#ff809f]" />
            <h3 className="font-display text-xl font-bold text-[#791529]">
              {lang === "es" ? "Tu Pedido Meow" : "Your Meow Order"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FFE5EC] text-[#821c45] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items List */}
        <div className="p-5 sm:p-6 flex-1 overflow-y-auto space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#FFE5EC] text-[#ff809f] mx-auto flex items-center justify-center">
                <ShoppingBag size={28} />
              </div>
              <p className="font-display text-lg font-bold text-[#791529]">
                {lang === "es" ? "Tu canastita está vacía" : "Your cart is empty"}
              </p>
              <p className="text-xs text-[#7A3E52] max-w-xs mx-auto">
                {lang === "es"
                  ? "Agrega tus bebidas boba, pancakes souflé o merch favorito desde el menú."
                  : "Add your favorite boba, soufflé pancakes, or cute merch from our menu."}
              </p>
            </div>
          ) : (
            items.map(({ item, quantity }) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-3 sm:p-4 border border-[#FFCCD5] shadow-xs flex items-center gap-3.5"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm text-[#821c45] truncate">
                    {lang === "es" ? item.name : item.nameEn}
                  </h4>
                  <span className="text-[11px] font-semibold text-[#ff809f] block mb-2">
                    ${item.price} MXN c/u
                  </span>

                  {/* Quantity adjustment */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="w-6 h-6 rounded-full bg-[#FFF0F4] text-[#821c45] hover:bg-[#ff809f] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-xs font-bold text-[#821c45] w-4 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-6 h-6 rounded-full bg-[#FFF0F4] text-[#821c45] hover:bg-[#ff809f] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>

                {/* Subtotal and Remove */}
                <div className="text-right flex flex-col justify-between items-end h-16">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-[#B34065] hover:text-[#ff809f] p-1 transition-colors cursor-pointer"
                  >
                    <Trash2 size={14} />
                  </button>
                  <span className="font-bold text-xs text-[#821c45]">
                    ${item.price * quantity}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-[#FFCCD5] bg-white space-y-4">
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-xs font-bold text-[#7A3E52]">
                {lang === "es" ? "Total Estimado:" : "Estimated Total:"}
              </span>
              <span className="font-display text-2xl font-bold text-[#791529]">
                ${total}.00 MXN
              </span>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 rounded-full bg-[#ff809f] hover:bg-[#f26d8f] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#ff809f]/30 hover:scale-[1.01] active:scale-95 transition-all cursor-pointer"
            >
              <span>{lang === "es" ? "Ordenar por WhatsApp" : "Order via WhatsApp"}</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onClearCart}
              className="w-full text-center text-[11px] text-[#B34065] hover:underline cursor-pointer"
            >
              {lang === "es" ? "Vaciar pedido" : "Clear order"}
            </button>

          </div>
        )}

      </div>

    </div>
  );
};
