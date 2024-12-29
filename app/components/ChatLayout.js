'use client';

import Link from 'next/link';

export default function ChatLayout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      {/* Logo Area */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-black flex items-center justify-center">
        <div className="w-40 h-40 bg-[url('/logo.png')] bg-contain bg-center bg-no-repeat" />
      </div>

      {/* Quick Actions */}
      <div className="fixed top-4 right-4 flex gap-4">
        <Link href="/chats">
          <button className="px-4 py-2 rounded-lg bg-black/50 border border-[#FFD700]/20 
                         text-[#FFD700]/70 hover:text-gold hover:border-[#FFD700]/40
                         transition-all duration-200">
            My Chats
          </button>
        </Link>
        <Link href="/bots">
          <button className="px-4 py-2 rounded-lg bg-black/50 border border-[#FFD700]/20 
                         text-[#FFD700]/70 hover:text-gold hover:border-[#FFD700]/40
                         transition-all duration-200">
            New Chat
          </button>
        </Link>
      </div>

      {/* Main Content */}
      <div className="pt-32">
        {children}
      </div>
    </div>
  );
} 