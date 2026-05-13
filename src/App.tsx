/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { 
  Facebook, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  UtensilsCrossed, 
  Heart, 
  ExternalLink,
  ChevronRight,
  Quote
} from "lucide-react";

// --- Constants ---

const LOGO_URL = "https://i.postimg.cc/7YJLgT7n/494067065-122111246912838272-6711502737156470825-n.jpg";

const IMAGES = [
  "https://i.postimg.cc/gjFGsgvW/673871044-122173582304838272-124462903531425361-n.jpg",
  "https://i.postimg.cc/GtFd5vQn/683200422-122175265142838272-2067657483886877323-n.jpg",
  "https://i.postimg.cc/KjPxHtNX/686527497-122175389900838272-8150029926490018189-n.jpg",
  "https://i.postimg.cc/J0NM2jqW/686861524-122175390110838272-873197942044258979-n.jpg",
  "https://i.postimg.cc/BbT4V2Cr/687033134-122175390062838272-7117469881929135610-n.jpg",
  "https://i.postimg.cc/gjVmT3DY/696368721-122177011448838272-8571034447689192340-n.jpg",
  "https://i.postimg.cc/mkYB57wc/696765747-122177011472838272-5469756294395626587-n.jpg",
  "https://i.postimg.cc/fycDrYKz/699850983-122177012294838272-3312632857647289655-n.jpg"
];

const FB_LINK = "https://www.facebook.com/kuchniaponaszemu";
const FB_REVIEWS_LINK = "https://www.facebook.com/kuchniaponaszemu/reviews/?id=61575148169637&sk=reviews";

const OPENING_HOURS = [
  { day: "Poniedziałek", hours: "ZAMKNIĘTE" },
  { day: "Wtorek", hours: "11:00 - 18:00" },
  { day: "Środa", hours: "11:00 - 18:00" },
  { day: "Czwartek", hours: "11:00 - 18:00" },
  { day: "Piątek", hours: "11:00 - 18:00" },
  { day: "Sobota", hours: "11:00 - 18:00" },
  { day: "Niedziela", hours: "12:00 - 18:00" },
];

// --- Decorative Components ---

const FolkFlowers = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="15" fill="currentColor" />
    <circle cx="50" cy="20" r="15" fill="currentColor" opacity="0.6" />
    <circle cx="50" cy="80" r="15" fill="currentColor" opacity="0.6" />
    <circle cx="20" cy="50" r="15" fill="currentColor" opacity="0.6" />
    <circle cx="80" cy="50" r="15" fill="currentColor" opacity="0.6" />
  </svg>
);

const CheckerStripe = ({ bold = false }) => (
  <div className={`w-full checker-stripe ${bold ? 'opacity-100' : 'opacity-60'}`} />
);

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="w-3 h-3 checker-micro" />
    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-red-primary">
      {children}
    </span>
  </div>
);

// --- Main Components ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-red-primary selection:text-white overflow-x-hidden">
      {/* Header / Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm md:shadow-none">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Logo Kuchnia Po Naszemu" className="w-10 h-10 rounded-full border-2 border-red-primary" />
            <span className="font-heading font-bold italic text-red-primary text-xl md:text-2xl tracking-tight">
              Kuchnia Po Naszemu
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-body font-bold text-text-secondary uppercase text-sm tracking-widest">
            <a href="#o-nas" className="hover:text-red-primary transition-colors">O nas</a>
            <a href="#galeria" className="hover:text-red-primary transition-colors">Galeria</a>
            <a href="#kontakt" className="hover:text-red-primary transition-colors">Kontakt</a>
            <a 
              href={FB_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="bg-red-primary text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-red-dark transition-all transform hover:scale-105 active:scale-95"
            >
              <Facebook size={18} />
              Facebook
            </a>
          </div>
          <a href={FB_LINK} target="_blank" rel="noreferrer" className="md:hidden text-red-primary">
            <Facebook size={24} />
          </a>
        </div>
        <div className="w-full h-1 checker-micro opacity-80" />
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 overflow-hidden bg-bg-primary">
        <div className="absolute inset-0 checker-light opacity-30 pointer-events-none" />
        
        {/* Tablecloth Corners */}
        <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 checker-bold opacity-10 md:opacity-20 transform rotate-12 -mr-16 -mt-16 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 checker-bold opacity-10 md:opacity-20 transform -rotate-12 -ml-16 -mb-16 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <SectionLabel>Witamy u Nas</SectionLabel>
              <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1]">
                Jedzenie jak <br />
                <span className="italic font-normal">u Mamy.</span>
              </h1>
              <p className="font-quote italic text-xl md:text-2xl text-text-secondary mb-8 max-w-xl mx-auto lg:mx-0">
                Zapraszamy do Kuchni Po Naszemu – miejsca, gdzie tradycja spotyka się z domowym ciepłem.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a 
                  href="#kontakt" 
                  className="bg-red-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-red-dark transition-all flex items-center gap-2 group shadow-lg shadow-red-primary/20"
                >
                  <MapPin size={20} />
                  Gdzie jesteśmy?
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href={FB_LINK} 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white border-2 border-red-primary text-red-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-red-primary hover:text-white transition-all flex items-center gap-2 shadow-sm"
                >
                  <Facebook size={20} />
                  Zestawy Dnia
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 bg-white p-4 shadow-2xl rounded-2xl rotate-3">
                <div className="absolute inset-0 border-2 border-red-primary m-2 rounded-xl pointer-events-none border-dashed opacity-30" />
                <img 
                  src={IMAGES[0]} 
                  alt="Pyszne domowe jedzenie" 
                  className="rounded-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-red-primary text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <p className="font-heading text-3xl font-bold">Domowe Smaki</p>
                  <p className="font-body text-red-light font-bold uppercase text-xs tracking-widest mt-1">Swarzędzka 21, Gruszczyn</p>
                </div>
              </div>
              <FolkFlowers className="absolute -top-10 -left-10 w-24 h-24 text-pink-primary opacity-40 animate-pulse" />
              <FolkFlowers className="absolute -bottom-10 -right-10 w-32 h-32 text-red-primary opacity-20" />
            </motion.div>
          </div>
        </div>
      </section>

      <CheckerStripe bold />

      {/* Daily Set Info */}
      <section id="o-nas" className="py-20 bg-bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-white border-2 border-red-primary overflow-hidden rounded-3xl flex flex-col md:flex-row shadow-xl">
            <div className="w-full p-8 md:p-16 flex flex-col justify-center items-center text-center">
              <h2 className="text-4xl md:text-6xl mb-6 leading-tight">Codziennie coś nowego w menu!</h2>
              <p className="text-xl text-text-secondary mb-10 leading-[1.7] max-w-2xl">
                W naszej kuchni nie ma nudy. Każdego dnia przygotowujemy dla Państwa inne, 
                tradycyjne zestawy obiadowe: pyszna zupa i sycące drugie danie. 
                Używamy tylko świeżych, lokalnych składników.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-pale rounded-full flex items-center justify-center text-red-primary">
                    <Facebook size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-text-primary">Sprawdź Facebooka</p>
                    <p className="text-sm text-text-muted">Aktualne zestawy dnia</p>
                  </div>
                </div>
                <a 
                  href={FB_LINK} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-red-primary text-white font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-red-dark transition-all transform hover:scale-105"
                >
                  Zobacz dzisiejsze menu
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CheckerStripe />

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <SectionLabel>Nasze Dania</SectionLabel>
            <h2 className="text-4xl md:text-6xl mb-6">Galeria Smaków</h2>
            <p className="font-quote italic text-xl text-text-secondary max-w-2xl mx-auto">
              Sami zobaczcie, co dzisiaj może wylądować na Waszym talerzu. 
              Zapraszamy do wspólnego biesiadowania!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square"
              >
                <div className="absolute inset-0 bg-red-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                <img 
                  src={img} 
                  alt={`Kuchnia Po Naszemu galeria ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center gap-2 text-white">
                    <Heart size={16} fill="currentColor" />
                    <span className="font-bold text-sm tracking-widest">Kuchnia Po Naszemu</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CheckerStripe bold />

      {/* Reviews & Socials */}
      <section className="py-20 bg-bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 checker-dark opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <SectionLabel><span className="text-pink-light">Opinie Gości</span></SectionLabel>
          <h2 className="text-4xl md:text-6xl text-white mb-12">Co mówią o nas inni?</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-bg-dark-secondary p-12 rounded-3xl border-2 border-red-dark shadow-2xl relative">
              <Quote size={64} className="text-red-primary opacity-20 absolute top-8 left-8" />
              <p className="text-2xl md:text-3xl font-quote italic mb-8 relative z-10">
                Jedzenie petarda, palce lizać. <br />
                Porcje naprawdę spore! 🤝
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Heart key={s} size={24} className="text-red-primary" fill="currentColor" />)}
                </div>
                <p className="font-bold uppercase tracking-[0.2em] text-pink-light text-sm">Zadowoleni Goście</p>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href={FB_REVIEWS_LINK} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-bg-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-pink-light transition-all"
              >
                Dodaj opinię na Facebooku
                <ExternalLink size={20} />
              </a>
              <div className="flex items-center gap-4">
                <Facebook size={32} className="text-red-primary" />
                <div className="text-left">
                  <p className="font-bold text-white uppercase text-xs tracking-widest">Obserwuj nas</p>
                  <p className="text-pink-light">Bądź na bieżąco z nowościami</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CheckerStripe />

      {/* Location & Contact Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <SectionLabel>Kontakt</SectionLabel>
              <h2 className="text-4xl md:text-6xl mb-8">Odwiedź nas <br /> w Gruszczynie</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-pale rounded-full flex items-center justify-center text-red-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Adres</h4>
                    <p className="text-text-secondary text-lg">Swarzędzka 21, Gruszczyn 62-006</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-pale rounded-full flex items-center justify-center text-red-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Telefon</h4>
                    <a href="tel:453507311" className="text-text-secondary text-lg hover:text-red-primary transition-colors">453 507 311</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-pale rounded-full flex items-center justify-center text-red-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">E-mail</h4>
                    <a href="mailto:biuro@kuchniaponaszemu.pl" className="text-text-secondary text-lg hover:text-red-primary transition-colors">biuro@kuchniaponaszemu.pl</a>
                  </div>
                </div>
              </div>

              <div className="bg-bg-secondary p-8 rounded-3xl border-2 border-pink-light">
                <div className="flex items-center gap-3 mb-6">
                  <Clock size={24} className="text-red-primary" />
                  <h4 className="text-2xl font-bold italic">Godziny otwarcia</h4>
                </div>
                <div className="grid grid-cols-2 gap-y-3">
                  {OPENING_HOURS.map((oh, idx) => (
                    <div key={idx} className="contents">
                      <span className={`text-sm md:text-base ${oh.day === 'Poniedziałek' ? 'text-red-primary font-bold' : 'text-text-secondary'}`}>
                        {oh.day}
                      </span>
                      <span className={`text-sm md:text-base font-bold text-right ${oh.hours === 'ZAMKNIĘTE' ? 'text-red-primary' : 'text-text-primary'}`}>
                        {oh.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="w-full h-2 checker-micro mt-6 opacity-30" />
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="h-[350px] md:h-full md:min-h-[450px] rounded-3xl overflow-hidden border-2 border-pink-light shadow-inner relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.0896671447113!2d17.073254577115588!3d52.44129044205348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045e9ab838a5cd%3A0xb5298de06ef9824f!2sSwarz%C4%99dzka%2021%2C%2062-006%20Gruszczyn!5e0!3m2!1spl!2spl!4v1778664968114!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  className="border-0"
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kuchnia Po Naszemu Lokalizacja"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-dark text-white pt-20 pb-10 relative">
        <div className="absolute top-0 left-0 right-0 h-1 checker-micro opacity-40" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={LOGO_URL} alt="Logo" className="w-12 h-12 rounded-full border-2 border-red-primary" />
                <span className="font-heading font-bold italic text-white text-3xl tracking-tight">
                  Kuchnia Po Naszemu
                </span>
              </div>
              <p className="text-text-light-muted text-lg leading-relaxed max-w-md">
                Karmienie naszych gości to nasza pasja. Zapraszamy do spróbowania prawdziwych, domowych smaków w sercu Gruszczyna.
              </p>
              <div className="flex gap-4 mt-8">
                <a href={FB_LINK} target="_blank" rel="noreferrer" className="w-12 h-12 bg-red-dark hover:bg-red-primary transition-colors flex items-center justify-center rounded-full">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold uppercase tracking-widest text-sm text-red-light mb-6">Szybkie Linki</h5>
              <ul className="space-y-4 font-body font-bold text-text-light-muted">
                <li><a href="#o-nas" className="hover:text-white transition-colors">O nas</a></li>
                <li><a href="#galeria" className="hover:text-white transition-colors">Nasze Dania</a></li>
                <li><a href="#kontakt" className="hover:text-white transition-colors">Lokalizacja</a></li>
                <li><a href={FB_LINK} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Zestawy Dnia</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold uppercase tracking-widest text-sm text-red-light mb-6">Informacje</h5>
              <ul className="space-y-4 font-body text-text-light-muted">
                <li className="flex items-center gap-2">
                  <Phone size={18} />
                  453 507 311
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={18} />
                  Gruszczyn, Swarzędzka 21
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 text-center text-text-light-muted text-sm flex items-center justify-center">
            <p>© {new Date().getFullYear()} Kuchnia Po Naszemu. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
        
        {/* Fine-line folk motif bottom corner */}
        <FolkFlowers className="absolute bottom-4 right-4 w-12 h-12 text-red-dark opacity-30 pointer-events-none" />
      </footer>
    </div>
  );
}
