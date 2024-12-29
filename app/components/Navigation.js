'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-[#FFD700]/10">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt="SirenSong AI"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-gold font-semibold text-xl tracking-wider">SirenSongAI</span>
          </Link>

          <div className="flex gap-6">
            <Link
              href="/bots"
              className={`text-sm transition-all hover:text-gold ${
                isActive('/bots') ? 'text-gold' : 'text-[#FFD700]/70'
              }`}
            >
              Bots
            </Link>
            <Link
              href="/chats"
              className={`text-sm transition-all hover:text-gold ${
                isActive('/chats') ? 'text-gold' : 'text-[#FFD700]/70'
              }`}
            >
              Chats
            </Link>
            <Link
              href="/account"
              className={`text-sm transition-all hover:text-gold ${
                isActive('/account') ? 'text-gold' : 'text-[#FFD700]/70'
              }`}
            >
              Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 