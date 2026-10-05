import React, { useState } from "react";
import { X, Calendar, Clock, Users, Heart, Check, Sparkles } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: "es" | "en";
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("16:00");
  const [guests, setGuests] = useState("2");
  const [zone, setZone] = useState<"michis" | "terraza">("michis");
  const [note, setNote] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !date) return;

    const zoneText = zone === "michis" ? "Sala Michi Lounge" : "Mesa Terraza";
    const textEs = `¡Hola Meow Café GDL! 🐾 Me gustaría reservar una mesa:\n\n• Nombre: ${name}\n• Personas: ${guests}\n• Fecha: ${date}\n• Horario: ${time}\n• Zona: ${zoneText}\n• Teléfono: ${phone}${note ? `\n• Notas: ${note}` : ""}\n\n¿Tienen disponibilidad? ¡Muchas gracias! ✨`;

    const encoded = encodeURIComponent(textEs);
    window.open(`https://wa.me/523312345678?text=${encoded}`, "_blank");
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-lg bg-[#FFF5F7] rounded-3xl p-6 sm:p-8 border-2 border-[#FFCCD5] shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-[#821c45] hover:bg-[#FFE5EC] transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/10 text-[#10B981] mx-auto flex items-center justify-center border border-[#10B981]/30">
              <Check size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold text-[#791529]">
              {lang === "es" ? "¡Solicitud Enviada a WhatsApp!" : "Reservation Sent to WhatsApp!"}
            </h3>
            <p className="text-xs text-[#7A3E52] max-w-xs mx-auto leading-relaxed">
              {lang === "es"
                ? "Se ha abierto el chat de WhatsApp con los datos de tu mesa. Nuestro equipo te confirmará en breve."
                : "Your table booking message has been prepared in WhatsApp. Our team will confirm shortly."}
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-[#ff809f] text-white text-xs font-bold hover:bg-[#f26d8f] transition-all cursor-pointer"
            >
              {lang === "es" ? "Cerrar" : "Close"}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#ff809f]" />
              <span className="text-[11px] font-bold text-[#B34065] uppercase tracking-wider">
                {lang === "es" ? "Visita & Michi Lounge" : "Visit & Cat Lounge"}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#791529] mb-2">
              {lang === "es" ? "Reservar tu Mesa" : "Book Your Table"}
            </h3>

            <p className="text-xs text-[#7A3E52] mb-6 leading-relaxed">
              {lang === "es"
                ? "Aparta tu lugar con anticipación para asegurar acceso a la sala de gatitos en Paseo de los Filósofos 1916."
                : "Reserve in advance to guarantee access to our kitty lounge at Paseo de los Filósofos 1916."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="text-[11px] font-bold text-[#821c45] block mb-1">
                  {lang === "es" ? "Tu Nombre Completo" : "Full Name"}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Sofia Navarro"
                  className="w-full bg-white border border-[#FFCCD5] focus:border-[#ff809f] rounded-2xl px-4 py-2.5 text-xs text-[#821c45] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#821c45] block mb-1">
                    {lang === "es" ? "WhatsApp / Teléfono" : "WhatsApp / Phone"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="33 1234 5678"
                    className="w-full bg-white border border-[#FFCCD5] focus:border-[#ff809f] rounded-2xl px-4 py-2.5 text-xs text-[#821c45] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#821c45] block mb-1">
                    {lang === "es" ? "Número de Personas" : "Number of Guests"}
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-white border border-[#FFCCD5] focus:border-[#ff809f] rounded-2xl px-3 py-2.5 text-xs text-[#821c45] outline-none"
                  >
                    <option value="1">1 Persona</option>
                    <option value="2">2 Personas (Dúo)</option>
                    <option value="3">3 Personas</option>
                    <option value="4">4 Personas</option>
                    <option value="5+">5+ Personas (Grupo)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold text-[#821c45] block mb-1">
                    {lang === "es" ? "Fecha de Visita" : "Visit Date"}
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-[#FFCCD5] focus:border-[#ff809f] rounded-2xl px-4 py-2.5 text-xs text-[#821c45] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#821c45] block mb-1">
                    {lang === "es" ? "Horario (3pm a 9pm)" : "Time Slot"}
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-white border border-[#FFCCD5] focus:border-[#ff809f] rounded-2xl px-3 py-2.5 text-xs text-[#821c45] outline-none"
                  >
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#821c45] block mb-1">
                  {lang === "es" ? "Zona de Preferencia" : "Preferred Area"}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setZone("michis")}
                    className={`py-2 px-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                      zone === "michis"
                        ? "bg-[#ff809f] text-white border-[#ff809f] shadow-xs"
                        : "bg-white text-[#821c45] border-[#FFCCD5]"
                    }`}
                  >
                    Sala de Michis 🐾
                  </button>
                  <button
                    type="button"
                    onClick={() => setZone("terraza")}
                    className={`py-2 px-3 rounded-2xl text-xs font-bold border transition-all cursor-pointer ${
                      zone === "terraza"
                        ? "bg-[#ff809f] text-white border-[#ff809f] shadow-xs"
                        : "bg-white text-[#821c45] border-[#FFCCD5]"
                    }`}
                  >
                    Terraza Cafetería ☕
                  </button>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#821c45] block mb-1">
                  {lang === "es" ? "Nota especial (opcional)" : "Special Note (optional)"}
                </label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={lang === "es" ? "Cumpleaños, aniversario, alergias..." : "Birthday, anniversary..."}
                  className="w-full bg-white border border-[#FFCCD5] focus:border-[#ff809f] rounded-2xl px-4 py-2.5 text-xs text-[#821c45] outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#ff809f] hover:bg-[#f26d8f] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#ff809f]/30 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              >
                {lang === "es" ? "Confirmar Reserva por WhatsApp" : "Confirm Booking via WhatsApp"}
              </button>

            </form>
          </div>
        )}

      </div>

    </div>
  );
};
