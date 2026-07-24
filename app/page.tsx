"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "motion/react";
import { 
  FlaskConical, 
  ArrowRight, 
  Brain, 
  Moon, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

// --- Animation Variants ---
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

// --- Reusable Components ---
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`bg-white/20 backdrop-blur-[20px] border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:border-white/60 hover:shadow-[inset_0_0_30px_rgba(0,161,155,0.15),0_15px_40px_rgba(0,0,0,0.1)] ${className}`}
  >
    {children}
  </div>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="font-montserrat text-3xl md:text-4xl font-semibold text-[#1a1c1e]">{title}</h2>
    {subtitle && <p className="font-inter text-[#3d4948] mt-3 text-lg">{subtitle}</p>}
  </div>
);

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const faqs = [
    {
      q: 'Linda from Tampa, Florida asks: "How does Pineal Guardian X actually work?"',
      a: "Over time, fluoride from your drinking water, toothpaste, and other sources builds up in your pineal gland — causing it to calcify. When that happens, your brain produces less melatonin — the 'master neuroprotector' that shields your neurons and keeps your memory sharp. Pineal Guardian X works by flushing out that toxic fluoride buildup… Reactivating your pineal gland's natural melatonin production... and flooding your brain with powerful nootropic compounds that support neural pathways and protect against cognitive decline."
    },
    {
      q: 'Robert from Denver, Colorado asks: "Who should take Pineal Guardian X?"',
      a: "If you're experiencing any signs of memory decline — forgetting names, losing your train of thought, walking into rooms and forgetting why you're there — then Pineal Guardian X was made for you. But honestly? With over 200 million Americans exposed to fluoride in their drinking water every day, I'd recommend it to anyone who wants to protect their brain health as they age."
    },
    {
      q: 'Patricia from Phoenix, Arizona asks: "Are there any side effects? Is it safe?"',
      a: "Pineal Guardian X is made from 100% natural ingredients — no harsh chemicals, no stimulants, no dangerous drugs. It's manufactured in an FDA-registered, GMP-certified facility right here in the United States, and every batch is third-party tested for purity, potency, and safety."
    },
    {
      q: 'James from Atlanta, Georgia asks: "How fast will I see results?"',
      a: "Everyone is different — it depends on how long fluoride has been building up in your system and how much damage has been done. That said, many of our customers report feeling sharper and more focused within the first two to three weeks."
    },
    {
      q: 'Carol from Seattle, Washington asks: "What if it doesn\'t work for me?"',
      a: "Then you don't pay a dime. Pineal Guardian X comes with a 365-day, no-questions-asked money-back guarantee. If you're not thrilled with your results — for any reason at all — just contact our customer support team and we'll refund every penny."
    },
    {
      q: 'Tom from Chicago, Illinois asks: "How do I order?"',
      a: "Easy. Just click one of the buttons below and choose your package. For the best results and biggest savings, I recommend the 6-bottle option — it gives you a full six months of protection at just $39 per bottle."
    }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-[#f9f9fc] text-[#1a1c1e] font-inter selection:bg-[#00a19b]/30 selection:text-[#00a19b] ${montserrat.variable} ${inter.variable} ${jetbrains.variable}`}>
      
      {/* --- Navbar --- */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full border border-white/40 bg-white/30 backdrop-blur-xl shadow-[0_0_20px_rgba(0,161,155,0.15)] flex justify-between items-center px-4 md:px-8 py-3 z-50">
        <div className="font-montserrat text-xl font-bold text-[#00a19b]">Pineal Guardian X</div>
        <nav className="hidden md:flex items-center space-x-8 font-inter text-sm font-medium">
          {["Benefits", "Ingredients", "Science", "Reviews", "Pricing", "FAQ"].map((item) => {
            const id = item.toLowerCase();
            return (
              <a 
                key={item} 
                href={`#${id}`} 
                onClick={(e) => scrollToSection(e, id)}
                className="text-[#3d4948] hover:text-[#00a19b] transition-colors duration-300"
              >
                {item}
              </a>
            );
          })}
        </nav>
        <div className="hidden md:block">
          <motion.a 
            href="#pricing"
            onClick={(e) => scrollToSection(e, "pricing")}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 161, 155, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00a19b] text-white px-6 py-2 rounded-full font-inter text-sm font-medium transition-colors shadow-lg shadow-[#00a19b]/30 inline-block"
          >
            Buy Now
          </motion.a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[#00a19b] p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[95%] bg-white/90 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-6 z-40 md:hidden flex flex-col items-center space-y-6"
          >
            {["Benefits", "Ingredients", "Science", "Reviews", "Pricing", "FAQ"].map((item) => {
              const id = item.toLowerCase();
              return (
                <a 
                  key={item} 
                  href={`#${id}`} 
                  onClick={(e) => {
                    scrollToSection(e, id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-[#1a1c1e] font-inter text-lg font-medium hover:text-[#00a19b] transition-colors"
                >
                  {item}
                </a>
              );
            })}
            <motion.a 
              href="#pricing"
              onClick={(e) => {
                scrollToSection(e, "pricing");
                setIsMobileMenuOpen(false);
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00a19b] text-white px-8 py-3 rounded-full font-inter text-base font-medium shadow-lg w-full text-center"
            >
              Buy Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative z-10 pt-32 pb-24 overflow-hidden w-full">
        
        {/* --- Hero Section --- */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="max-w-7xl mx-auto w-full px-4 md:px-12 pb-20 md:pb-32 min-h-[80vh] flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1 space-y-8 text-center lg:text-left z-20">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-[#00a19b] font-jetbrains text-xs uppercase tracking-widest">
              <FlaskConical size={16} />
              NASA-Approved Breakthrough
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="font-montserrat text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-[#1a1c1e]">
              Newly Discovered <span className="text-[#00a19b] italic">'Vitamin M'</span> Slows Brain Aging.
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="font-inter text-lg text-[#3d4948] max-w-2xl mx-auto lg:mx-0">
              Top US Doctor reveals the superfood that acts as a powerful memory vitamin, clearing Pineal Gland calcification and detoxifying fluoride.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="pt-4">
              <motion.a 
                href="#pricing"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(0, 161, 155, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-[#00a19b] text-white px-8 py-4 rounded-full font-montserrat text-lg font-bold shadow-[0_0_0_0_rgba(0,161,155,0.4)] animate-[pulseMint_2s_cubic-bezier(0.4,0,0.6,1)_infinite] mx-auto lg:mx-0"
              >
                Claim Your Supply Now
                <ArrowRight size={20} />
              </motion.a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtseva-kaXWVOK4gu2jTzhKaWZI105T83lztbXDznmud4f6Gq0MyjgZAORKKtuh5bbmJo6NVCuBPI-KAT3P1oBrvVfSMJxXRyyEC8IdnlhydWjwsbGiPxdh76yo4dvTaEUwAy4mOkFCINIqYW-GPHNZ66LfsIfFlfq-eqOWZru3CH6LENk2GmtgJ4nXwR0nby7CEcgNlvJ1C5jKhSUyF6bjeuCucysuE9V2h1hr8JMQByY5zg5jice" alt="GMP Certified" width={120} height={48} className="h-12 w-auto object-contain" referrerPolicy="no-referrer" priority />
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTPDS67GtxIo4U_phAyqIPjE3CUR_WgoYo48B5pGkNx5aKgtIdUmT6P5dB5cVH_BBMjGdIRc2faCzUg1gOoctsLfoitdvIY_ZblDCUOObRkV6m-9vaBLfVukR3UbCCLkEyxoZ8_iENStRelM51t8udyFF_YCuc1vLttyXOeIrdA9vrXfXoOjCbDDByhN-BFi_3jTHTai529AUfbIaITL8cA8VGD1GdidF_PRnZyyjeKwtUg4mS3IuQ" alt="FDA Registered" width={120} height={48} className="h-12 w-auto object-contain" referrerPolicy="no-referrer" priority />
              <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXEgS4pKNjX_-gWSK1xXS6GuYYR_KT1lfjhdO_Jpnz8LS1iycV1Ci2qKxHl-mU3r6nXXaR-vHb596CL9oA44tp_n_4thsh9GCbMj6IJQRaIAfLQU7x-j4PnKW2ivKLMQyMafH1xlKl1unh1EGtEwC-UadyH3r6TbWZIl3lG2u1H-XwhKz46144h6eUOK0AFVMlw-poWqFlQwkbRmGj8VgSJI5VH7CqojzGfE0FXatJlnicambM_PQ0" alt="Science Insignia" width={120} height={48} className="h-12 w-auto object-contain" referrerPolicy="no-referrer" priority />
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="flex-1 relative flex justify-center items-center h-[300px] md:h-[400px] lg:h-[600px] w-full">
            <div className="absolute inset-0 bg-[#00a19b]/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full z-10"
            >
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN45WOaPlixQ4o8OjeViMQpFwyHoyr2ChEG6nDvY4gt8EcKitwFyxgGTrWHAZYkfU09RETQsWxHQ087q8lJihzkoHhW63O64zgi7hVm2zvei57hQQaNzlCd0m6odS_NekxJ7HH5Ad_XW5mNnV-g-OmEi8iUdUU05_puGw2mJpId1o75thqnkpnXSOYRFDxU5Up684pSIAufeqUSPg7f_vI21-UjGAnapWneOrdY74ICF4CN_aCu1v0Firmk48DXlBcrw" 
                alt="Pineal Guardian X Bottle" 
                fill 
                className="object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* --- Story Section --- */}
        <motion.section 
          id="science-intro"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-7xl mx-auto w-full px-4 md:px-12 py-20 md:py-32"
        >
          <GlassCard className="rounded-[2rem] p-6 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a19b]/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
              <motion.div variants={fadeInUp} className="space-y-6">
                <h2 className="font-montserrat text-3xl lg:text-4xl font-semibold text-[#1a1c1e]">The Truth About 'Senior Moments'</h2>
                <p className="font-inter text-[#3d4948] text-lg leading-relaxed">
                  For years, we've been told that cognitive decline is just a normal part of aging. Dr. Blane Schilling discovered otherwise. The real culprit? Pineal Gland calcification caused by environmental toxins like fluoride.
                </p>
                <p className="font-inter text-[#3d4948] text-lg leading-relaxed">
                  By targeting this calcification with what he calls 'Vitamin M', we can begin to decalcify the gland, potentially restoring neural pathways and mental clarity.
                </p>
              </motion.div>
              <motion.div variants={fadeInUp} className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-white/50 shadow-xl group">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC3q2jjd7ANdT8Fx41SilFa7xs4qXVMXmMDiJCbBafldIbCl1_OF3tZcoXQXtmlTrQ4b0-WOi38lFcmHnsx1g0-0cuQad8rnJjmbQQn8WsDkSADZN_Kqg3CmZgbp9QzM_iv4Oti6RVIAohbq6GLK4TEO2bhZUNRVb4WurmsZ7DM_7LcKTb2j9jAqG94ANj0guYGHcB-2ELw-tAvF2F0alVkgsauCwgbLHP1pQbo2indKqP70JHiyzL" 
                  alt="Dr. Blane Schilling" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-8">
                  <span className="text-white font-montserrat text-xl font-medium tracking-wide">Dr. Blane Schilling</span>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.section>

        {/* --- Benefits Section --- */}
        <motion.section 
          id="benefits"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-7xl mx-auto w-full px-4 md:px-12 py-20 md:py-32"
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="Transformative Results" subtitle="Experience the power of a decalcified pineal gland." />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { icon: Brain, title: "Enhanced Recall", desc: "Sharpen your memory and recall details with effortless clarity." },
              { icon: Moon, title: "Deep Sleep", desc: "Restore your natural circadian rhythms for profound, restorative rest.", translate: "md:translate-y-6" },
              { icon: Sparkles, title: "Mental Clarity", desc: "Clear the brain fog and enjoy sustained focus throughout the day." }
            ].map((benefit, i) => (
              <motion.div key={i} variants={fadeInUp} className={`${benefit.translate || ""} w-full h-full`}>
                <GlassCard className="rounded-3xl p-8 md:p-10 text-center w-full h-full group">
                  <div className="inline-flex p-4 rounded-2xl bg-[#00a19b]/10 text-[#00a19b] mb-6 transition-transform group-hover:scale-110 group-hover:bg-[#00a19b]/20">
                    <benefit.icon size={32} />
                  </div>
                  <h3 className="font-montserrat text-xl font-semibold text-[#1a1c1e] mb-3">{benefit.title}</h3>
                  <p className="font-inter text-[#3d4948] leading-relaxed">{benefit.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- Ingredients Section --- */}
        <motion.section 
          id="ingredients"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-7xl mx-auto w-full px-4 md:px-12 py-20 md:py-32"
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="Nature's Purifiers" subtitle="A synergistic blend of highly bioavailable extracts." />
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {[
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHI2g_SAAgr4MtDOCCH3InbOFPN8I1hsdsmyCYYR58egLSIQB_eRQapRkkg2byKpTwtq7gO1YnS8A9jl0PCDAP_fFRWi5Xu07FRufAoLC9jU6HHa4rdDmLi6WjmPs0fqr8ZCxqBz7UFjMfELH9JIjBFog4Fgjr5V0BnQGM6QM0Q7MEMruWYsE6f6mo3ZPjexq60s3dtYSzrLlwVPVkYSKzwPS3958-Y5UvMlrwetCiHsqitMtq94z_", title: "Tamarind Extract", desc: "Known to aid in flushing out environmental fluoride." },
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7lwv2--QZnn5hSuW_WKMU-UWZyLGZpb0GL6Fw4Su7nXOeCMZfYsfvwzg_bvTNvSIxvwnd2_SNQ_WejS76dHg1MqQYPSYr203Za8WkrHvOJjnqvwNMnl67Ny0YjeSL2I_14F8b_-ktwlU-xl34km46pzOWOd7sm2BMr-kqfFSRchfV2gUb3YZSvYHjKSgr4WBEKao80rXF63ZkrJtXyn121Uyq__Eo1kKTVd7cGKURvio4gRtn0kb2", title: "Spirulina", desc: "Rich in antioxidants to protect neural pathways.", translate: "lg:translate-y-4" },
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZgRIFPJB6p4J7eKLWvY-DRRSXAAm0V18pjhbM_H8UxbviBETW8WCMouPb0VlQBKsvVDXye2xkvp_aDBVZF49dU_RzOC7vakPOoKy8fuQ0b-OAtnJdOji3ImjI6hHVEqELJavnwF_o6l11knP4Z_rTqj7PFxtQLzCV0515Kwj5SIbHusI-B8NrmGx-GWpf9f5WZqa8Vbc4RBd9JIfPCzl2ziCo6FkxD5ISYU7-uULMDHE1qoJ9ExL5", title: "Pine Bark Extract", desc: "Supports healthy blood flow to the brain.", translate: "lg:translate-y-8" },
              { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2kdUJkK2mjQsN-giJ-jn4SgsTE8R3Hd3giEBYg1lBYov9bcn1wBB1CHiUPeDxSAhIzR6Dd4iHUYZy6WF3-hvUbJRS99ip-PqevbYrQ4EV-5KYHSD1xfcX60BL0R7JQlteH-Q1W6YSVDKOb00CQ81uqxZvxT-iKD65UG14c4cZGcACzyIFOUpvriT4dZgEP6tuZxuky0oJqNJvzm6sWaAn04-UP7enqYrp-ZW6CPBKRv_w6sCnlJHz", title: "Bacopa Monnieri", desc: "A traditional nootropic for memory enhancement.", translate: "lg:translate-y-12" }
            ].map((ing, i) => (
              <motion.div key={i} variants={fadeInUp} className={`${ing.translate || ""} w-full h-full`}>
                <motion.div whileHover={{ scale: 1.02 }} className="w-full h-full">
                  <GlassCard className="rounded-[1.5rem] p-6 md:p-8 h-full flex flex-col w-full">
                    <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5">
                      <Image src={ing.img} alt={ing.title} fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <h3 className="font-montserrat text-lg font-semibold text-[#1a1c1e] mb-2">{ing.title}</h3>
                    <p className="font-inter text-sm text-[#3d4948] flex-grow">{ing.desc}</p>
                  </GlassCard>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- Science / Stats Section --- */}
        <motion.section 
          id="science"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-7xl mx-auto w-full px-4 md:px-12 py-20 md:py-32"
        >
          <GlassCard className="rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden relative w-full">
            <div className="absolute inset-0 bg-[#00a19b]/5 blur-[60px] rounded-full pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <motion.div variants={fadeInUp}>
                <h2 className="font-montserrat text-3xl md:text-4xl font-semibold text-[#1a1c1e] mb-4">Clinically Proven Results</h2>
                <p className="font-inter text-lg text-[#3d4948]">Backed by rigorous testing and a commitment to your cognitive health.</p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeInUp} className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-sm">
                  <div className="text-5xl font-bold text-[#00a19b] mb-3">55%</div>
                  <div className="font-montserrat font-medium text-[#1a1c1e]">Improvement in Memory Scores</div>
                </motion.div>
                <motion.div variants={fadeInUp} className="bg-white/40 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-sm">
                  <div className="text-5xl font-bold text-[#00a19b] mb-3">100%</div>
                  <div className="font-montserrat font-medium text-[#1a1c1e]">Natural Ingredients</div>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="pt-4">
                <div className="inline-flex items-center justify-center gap-3 bg-white/50 backdrop-blur-md border border-[#00a19b]/20 px-8 py-4 rounded-full shadow-sm">
                  <ShieldCheck className="text-[#00a19b]" size={24} />
                  <span className="font-montserrat font-semibold text-[#1a1c1e]">Iron-Clad 365-Day Money-Back Guarantee</span>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.section>

        {/* --- Reviews Section --- */}
        <motion.section 
          id="reviews"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-7xl mx-auto w-full px-4 md:px-12 py-20 md:py-32"
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="Real Stories, Real Clarity" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { quote: "I finally feel like the fog has lifted. I can remember names effortlessly now. It's like someone turned the lights back on in my brain.", author: "Margaret H." },
              { quote: "My sleep has never been better. I wake up feeling truly rested and my focus at work has noticeably improved within just weeks.", author: "Richard B." },
              { quote: "I was skeptical about 'calcification', but the results speak for themselves. Pineal Guardian is now a permanent part of my routine.", author: "Susan C." }
            ].map((review, i) => (
              <motion.div key={i} variants={fadeInUp} className="w-full h-full">
                <motion.div whileHover={{ scale: 1.02 }} className="w-full h-full">
                  <GlassCard className="rounded-[1.5rem] p-8 md:p-10 h-full w-full flex flex-col justify-between">
                    <div>
                      <div className="flex gap-1 text-yellow-400 mb-6">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                      </div>
                      <p className="font-inter text-[#3d4948] italic leading-relaxed mb-6">"{review.quote}"</p>
                    </div>
                    <div className="font-montserrat font-semibold text-[#1a1c1e] border-t border-black/5 pt-4">- {review.author}</div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- Pricing Section --- */}
        <motion.section 
          id="pricing"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-7xl mx-auto w-full px-4 md:px-12 py-20 md:py-32"
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="Secure Your Supply Today" subtitle="Choose your package. All orders covered by our 365-day guarantee." />
          </motion.div>
          
          <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-8 pt-8">
            
            {/* 1 Bottle */}
            <motion.div variants={fadeInUp} className="w-full lg:w-1/3 flex">
              <GlassCard className="rounded-[2rem] p-8 text-center flex flex-col w-full">
                <h3 className="font-montserrat text-2xl font-semibold text-[#1a1c1e] mb-2">1 Bottle</h3>
                <p className="font-inter text-[#3d4948] mb-8">30 Day Supply</p>
                <div className="text-5xl font-bold text-[#00a19b] mb-8">$69<span className="text-lg text-[#3d4948] font-normal">/bottle</span></div>
                <motion.button 
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="mt-auto w-full bg-[#00a19b]/10 text-[#00a19b] border border-[#00a19b]/30 px-6 py-4 rounded-full font-montserrat font-semibold hover:bg-[#00a19b] hover:text-white transition-colors"
                >
                  Add to Cart
                </motion.button>
              </GlassCard>
            </motion.div>

            {/* 6 Bottles (Best Value) */}
            <motion.div variants={fadeInUp} className="w-full lg:w-1/3 flex z-10 lg:scale-110 relative">
              <div className="absolute inset-0 bg-[#00a19b]/5 blur-[20px] rounded-[2rem] pointer-events-none" />
              <GlassCard className="rounded-[2rem] p-10 text-center flex flex-col w-full border-2 border-[#00a19b] shadow-[0_0_30px_rgba(0,161,155,0.2)] bg-white/40">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00a19b] text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-md">
                  Best Value
                </div>
                <h3 className="font-montserrat text-2xl font-semibold text-[#1a1c1e] mb-2 mt-4">6 Bottles</h3>
                <p className="font-inter text-[#3d4948] mb-8">180 Day Supply</p>
                <div className="text-6xl font-bold text-[#00a19b] mb-3">$39<span className="text-lg text-[#3d4948] font-normal">/bottle</span></div>
                <p className="font-jetbrains text-sm font-semibold text-[#00a19b] mb-8 tracking-wide">FREE US SHIPPING</p>
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 161, 155, 0.4)" }} 
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto w-full bg-[#00a19b] text-white px-6 py-5 rounded-full font-montserrat text-lg font-bold shadow-lg shadow-[#00a19b]/30 animate-[pulseMint_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
                >
                  Claim Best Deal
                </motion.button>
              </GlassCard>
            </motion.div>

            {/* 3 Bottles */}
            <motion.div variants={fadeInUp} className="w-full lg:w-1/3 flex">
              <GlassCard className="rounded-[2rem] p-8 text-center flex flex-col w-full">
                <h3 className="font-montserrat text-2xl font-semibold text-[#1a1c1e] mb-2">3 Bottles</h3>
                <p className="font-inter text-[#3d4948] mb-8">90 Day Supply</p>
                <div className="text-5xl font-bold text-[#00a19b] mb-8">$59<span className="text-lg text-[#3d4948] font-normal">/bottle</span></div>
                <motion.button 
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="mt-auto w-full bg-[#00a19b]/10 text-[#00a19b] border border-[#00a19b]/30 px-6 py-4 rounded-full font-montserrat font-semibold hover:bg-[#00a19b] hover:text-white transition-colors"
                >
                  Add to Cart
                </motion.button>
              </GlassCard>
            </motion.div>

          </div>
        </motion.section>

        {/* --- FAQ Section --- */}
        <motion.section 
          id="faq"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          className="max-w-7xl mx-auto w-full px-4 md:px-12 py-20 md:py-32"
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader title="Frequently Asked Questions" subtitle="Everything you need to know about Pineal Guardian X." />
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <GlassCard className="rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                  >
                    <span className="font-montserrat font-medium text-lg text-[#1a1c1e] pr-4">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#00a19b] flex-shrink-0"
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-2 font-inter text-[#3d4948] leading-relaxed border-t border-black/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>

      {/* --- Footer --- */}
      <footer className="w-full pt-16 pb-8 px-6 md:px-12 bg-[#E4DDD3]/60 backdrop-blur-lg border-t border-white/60 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5 space-y-4">
              <div className="font-montserrat text-2xl font-bold text-[#00a19b]">Pineal Guardian X</div>
              <p className="font-inter text-[#3d4948] leading-relaxed max-w-sm">
                Advanced neuroscience meets natural purity. We are dedicated to providing cognitive support and holistic wellness solutions backed by science.
              </p>
            </div>
            <div className="md:col-span-7 flex flex-wrap gap-12 md:justify-end">
              <div className="space-y-4">
                <h4 className="font-montserrat font-semibold text-[#1a1c1e]">Legal & Policies</h4>
                <div className="flex flex-col space-y-3 font-inter text-sm">
                  {["Terms of Service", "Privacy Policy", "Medical Disclaimer", "Refund Policy"].map((link) => (
                    <a key={link} href="#" className="text-[#3d4948] hover:text-[#00a19b] transition-colors">{link}</a>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-montserrat font-semibold text-[#1a1c1e]">Support</h4>
                <div className="flex flex-col space-y-3 font-inter text-sm">
                  <a href="#" className="text-[#3d4948] hover:text-[#00a19b] transition-colors">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#3d4948]/10 pt-8 text-center md:text-left font-inter text-xs text-[#3d4948]/70 leading-relaxed">
            <p className="mb-3">© 2024 Pineal Guardian X. All rights reserved.</p>
            <p className="max-w-4xl">
              These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. The information provided on this site is for informational purposes only and is not intended as a substitute for advice from your physician or other health care professional.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Required CSS for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseMint {
          0%, 100% { box-shadow: 0 0 0 0 rgba(0, 161, 155, 0.4); }
          50% { box-shadow: 0 0 0 15px rgba(0, 161, 155, 0); }
        }
      `}} />
    </div>
  );
}
