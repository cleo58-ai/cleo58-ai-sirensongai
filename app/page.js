'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen welcome-background">
      <div className="pt-20 max-w-4xl mx-auto p-6">
        {/* Logo and Tagline */}
        <div className="text-center mb-16">
          <Image
            src="/logo-full.png"
            alt="SirenSong AI Roleplay"
            width={600}
            height={300}
            className="welcome-logo mx-auto mb-8"
          />
          <p className="gold-text text-sm">For Your Pleasure</p>
        </div>

        {/* Main Actions */}
        <div className="glass-panel rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-gold text-2xl font-semibold mb-6">Begin Your Journey</h2>
          <p className="text-white/80 mb-8">
            Step into a world where AI companions bring your imagination to life. Create unique characters, engage in immersive conversations, and let our enchanting AI guide you through endless possibilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bots">
              <button className="w-full sm:w-auto bg-gold text-black px-8 py-3 rounded-xl font-semibold
                             hover:bg-[#FFA500] transform transition-all duration-200 
                             hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                Explore Bots
              </button>
            </Link>
            <Link href="/bots/create">
              <button className="w-full sm:w-auto bg-black/50 text-gold px-8 py-3 rounded-xl font-semibold
                             border border-[#FFD700]/20 hover:bg-black/70 transform 
                             transition-all duration-200 hover:scale-[1.05]">
                Create Your Own
              </button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="glass-panel rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-gold font-semibold mb-2">Roleplay</h3>
            <p className="text-white/70 text-sm">Immerse yourself in character-driven conversations</p>
          </div>
          <div className="glass-panel rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-gold font-semibold mb-2">Create</h3>
            <p className="text-white/70 text-sm">Design unique AI companions tailored to your preferences</p>
          </div>
          <div className="glass-panel rounded-xl p-6 text-center">
            <div className="text-4xl mb-4">💫</div>
            <h3 className="text-gold font-semibold mb-2">Experience</h3>
            <p className="text-white/70 text-sm">Enjoy enchanting conversations that spark imagination</p>
          </div>
        </div>
      </div>
    </div>
  );
}
