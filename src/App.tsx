import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const characters = [
  {
    name: "Hanamichi Sakuragi",
    nickname: "The Genius",
    number: 10,
    position: "Power Forward",
    quote: "I am a genius!",
    color: "#C41E3A",
  },
  {
    name: "Kaede Rukawa",
    nickname: "Super Rookie",
    number: 11,
    position: "Small Forward",
    quote: "Basketball is all that matters.",
    color: "#1A1A1A",
  },
  {
    name: "Takenori Akagi",
    nickname: "Gori",
    number: 4,
    position: "Center",
    quote: "We will make it to the Nationals!",
    color: "#8B4513",
  },
  {
    name: "Hisashi Mitsui",
    nickname: "The Shooter",
    number: 14,
    position: "Shooting Guard",
    quote: "I want to play basketball...",
    color: "#2E5090",
  },
  {
    name: "Ryota Miyagi",
    nickname: "Speed Star",
    number: 7,
    position: "Point Guard",
    quote: "Leave the speed to me!",
    color: "#228B22",
  },
];

const stats = [
  { label: "Episodes", value: "101" },
  { label: "Manga Volumes", value: "31" },
  { label: "Year Released", value: "1993" },
  { label: "Games Won", value: "∞" },
];

function HalftoneOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
        backgroundSize: '4px 4px',
      }}
    />
  );
}

function SpeedLines({ className = "" }: { className?: string }) {
  return (
    <svg className={`absolute pointer-events-none ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
      {[...Array(20)].map((_, i) => (
        <line
          key={i}
          x1={0}
          y1={i * 5 + Math.random() * 3}
          x2={100}
          y2={i * 5 + Math.random() * 3 + 10}
          stroke="currentColor"
          strokeWidth={Math.random() * 0.5 + 0.1}
          opacity={Math.random() * 0.3 + 0.1}
        />
      ))}
    </svg>
  );
}

function BasketballIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" />
      <path d="M50 5 C50 50 50 95 50 95" stroke="currentColor" strokeWidth="2" />
      <path d="M5 50 C50 50 95 50 95 50" stroke="currentColor" strokeWidth="2" />
      <path d="M12 25 Q50 40 88 25" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M12 75 Q50 60 88 75" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1A1A1A] via-[#2A1515] to-[#C41E3A]">
      {/* Diagonal slash background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[50%] bg-[#C41E3A] transform rotate-[-15deg] translate-y-[60%] opacity-20" />
        <div className="absolute -inset-[50%] bg-[#FF6B35] transform rotate-[-12deg] translate-y-[70%] opacity-10" />
      </div>

      <SpeedLines className="inset-0 w-full h-full text-white opacity-20" />

      {/* Floating basketballs */}
      <motion.div
        className="absolute top-[10%] left-[5%] md:left-[10%] text-[#FF6B35] opacity-30"
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <BasketballIcon className="w-12 h-12 md:w-20 md:h-20" />
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] right-[5%] md:right-[15%] text-[#C41E3A] opacity-40"
        animate={{ y: [0, 15, 0], rotate: [360, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <BasketballIcon className="w-16 h-16 md:w-28 md:h-28" />
      </motion.div>

      <div className="relative z-10 text-center px-4 md:px-8">
        {/* Japanese text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-japanese text-lg md:text-2xl text-[#FF6B35] mb-2 md:mb-4 tracking-widest"
        >
          スラムダンク
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] text-white leading-none tracking-tighter"
          style={{ textShadow: '4px 4px 0 #C41E3A, 8px 8px 0 rgba(196,30,58,0.3)' }}
        >
          SLAM
          <br />
          <span className="text-[#FF6B35]">DUNK</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 md:mt-8"
        >
          <div className="inline-block bg-[#C41E3A] px-4 py-2 md:px-8 md:py-3 transform -skew-x-12">
            <p className="font-display text-lg md:text-2xl text-white transform skew-x-12 tracking-wider">
              SHOHOKU HIGH SCHOOL
            </p>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-2xl md:text-4xl text-[#FF6B35]">{stat.value}</p>
              <p className="font-body text-xs md:text-sm text-white/60 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 md:w-2 md:h-4 bg-[#FF6B35] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

function CharacterCard({ character, index, isActive, onClick }: {
  character: typeof characters[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative cursor-pointer overflow-hidden ${
        isActive ? 'col-span-1 md:col-span-2 row-span-2' : 'col-span-1'
      }`}
      whileHover={{ scale: isActive ? 1 : 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative h-full min-h-[200px] md:min-h-[300px] p-4 md:p-6"
        style={{
          background: `linear-gradient(135deg, ${character.color}22, ${character.color}44)`,
          borderLeft: `4px solid ${character.color}`,
        }}
      >
        {/* Number background */}
        <div
          className="absolute -right-4 md:-right-8 -top-4 md:-top-8 font-display text-[120px] md:text-[200px] leading-none opacity-10"
          style={{ color: character.color }}
        >
          {character.number}
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <motion.span
              className="inline-block px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs font-body uppercase tracking-wider text-white mb-2"
              style={{ backgroundColor: character.color }}
            >
              #{character.number} · {character.position}
            </motion.span>

            <h3 className="font-display text-xl md:text-3xl text-white mt-2">{character.name}</h3>
            <p className="font-japanese text-sm md:text-lg text-[#FF6B35] mt-1">{character.nickname}</p>
          </div>

          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-4 md:mt-6"
              >
                <blockquote className="font-body text-base md:text-xl text-white/80 italic border-l-2 border-[#FF6B35] pl-3 md:pl-4">
                  "{character.quote}"
                </blockquote>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Manga-style corner */}
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[30px] md:border-l-[50px] border-l-transparent border-b-[30px] md:border-b-[50px]"
          style={{ borderBottomColor: character.color }}
        />
      </motion.div>
    </motion.div>
  );
}

function Characters() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-16 md:py-24 bg-[#1A1A1A] overflow-hidden">
      {/* Diagonal background element */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 md:h-48 bg-gradient-to-b from-[#C41E3A]/20 to-transparent" />
        <div className="absolute -left-[20%] top-[20%] w-[80%] h-[60%] bg-[#C41E3A]/5 transform -skew-x-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16"
        >
          <p className="font-japanese text-base md:text-xl text-[#FF6B35] mb-2">選手紹介</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-8xl text-white">
            THE <span className="text-[#C41E3A]">LINEUP</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-[#FF6B35] mt-4" />
        </motion.div>

        {/* Character grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
        >
          {characters.map((character, index) => (
            <CharacterCard
              key={character.name}
              character={character}
              index={index}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="relative py-16 md:py-32 bg-[#C41E3A] overflow-hidden">
      <SpeedLines className="inset-0 w-full h-full text-white opacity-10" />

      {/* Diagonal slash */}
      <div className="absolute -right-[30%] -top-[50%] w-[80%] h-[200%] bg-[#FF6B35] transform rotate-[15deg] opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <BasketballIcon className="w-12 h-12 md:w-16 md:h-16 text-white/30 mx-auto mb-6 md:mb-8" />

          <blockquote className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-white leading-tight">
            "IF YOU GIVE UP,
            <br />
            <span className="text-[#1A1A1A]">THAT'S THE END</span>
            <br />
            OF THE GAME."
          </blockquote>

          <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-4">
            <div className="w-8 md:w-12 h-0.5 bg-white/50" />
            <p className="font-body text-base md:text-xl text-white/80">Coach Anzai</p>
            <div className="w-8 md:w-12 h-0.5 bg-white/50" />
          </div>

          <p className="font-japanese text-lg md:text-2xl text-white/60 mt-3 md:mt-4">安西先生</p>
        </motion.div>
      </div>
    </section>
  );
}

function Timeline() {
  const events = [
    { year: "1990", event: "Manga serialization begins in Weekly Shonen Jump" },
    { year: "1993", event: "TV anime adaptation starts airing" },
    { year: "1994", event: "First theatrical film released" },
    { year: "1996", event: "Manga concludes with 31 volumes" },
    { year: "2022", event: "THE FIRST SLAM DUNK movie premiere" },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#FFF8E7] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #C41E3A 0,
            #C41E3A 1px,
            transparent 1px,
            transparent 10px
          )`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-16 text-center"
        >
          <p className="font-japanese text-base md:text-xl text-[#C41E3A] mb-2">歴史</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-8xl text-[#1A1A1A]">
            LEGACY
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#C41E3A]/30 transform md:-translate-x-1/2" />

          {events.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-center mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <span className="font-display text-4xl md:text-6xl text-[#C41E3A]">{item.year}</span>
                <p className="font-body text-base md:text-lg text-[#1A1A1A]/80 mt-2">{item.event}</p>
              </div>

              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#C41E3A] rounded-full transform -translate-x-1/2 border-4 border-[#FFF8E7]" />

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative py-8 md:py-12 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <p className="font-display text-3xl md:text-5xl text-white">
              SLAM<span className="text-[#C41E3A]">DUNK</span>
            </p>
            <p className="font-japanese text-sm md:text-base text-white/40 mt-2">スラムダンク · 湘北高校</p>
          </motion.div>

          <div className="flex gap-4 md:gap-6 mb-6 md:mb-8">
            {[10, 11, 4, 14, 7].map((num) => (
              <div
                key={num}
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-[#C41E3A]/20 rounded-full"
              >
                <span className="font-display text-xs md:text-sm text-[#C41E3A]">{num}</span>
              </div>
            ))}
          </div>

          <div className="w-16 md:w-24 h-0.5 bg-[#C41E3A]/30 mb-6 md:mb-8" />

          <p className="font-body text-[10px] md:text-xs text-white/30 tracking-wider">
            Requested by @ox_eyo · Built by @clonkbot
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#1A1A1A] transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HalftoneOverlay />
      <Hero />
      <Characters />
      <Quote />
      <Timeline />
      <Footer />
    </div>
  );
}
