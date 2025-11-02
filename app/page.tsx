"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import {
  PremiumHero,
  PremiumInvitation,
  PremiumPadrinos,
  PremiumGallery,
  PremiumThankYou,
  PremiumMusicPlayer,
  BasicCountdown,
  BasicEventDetails,
  BasicAttendance,
  BasicGiftOptions,
  premiumDemoData,
} from "@/components/sections/premium";
import { useState } from "react";
//import { ContactModal } from '@/components/landing/ContactModal';
import { MusicProvider } from "@/context/music-context";

export default function PremiumQuinceDemoPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleModalContact = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div>
      <MusicProvider>
        <main className="min-h-screen font-playfair">
          {/* Music Player premium (invisible, maneja el audio) */}
          <PremiumMusicPlayer />

          {/* Hero premium con música */}
          <PremiumHero />

          {/* Información de padres (premium) */}
          <PremiumInvitation />

          {/* Características básicas reutilizadas */}
          <BasicCountdown />
          <BasicEventDetails />

          {/* Características premium exclusivas */}
          <PremiumGallery />
          <PremiumPadrinos />

          {/* Confirmación y regalos (reutilizados del básico) */}
          <BasicAttendance />
          <BasicGiftOptions />

          {/* Mensaje final premium */}
          <PremiumThankYou />
        </main>
      </MusicProvider>
    </div>
  );
}
