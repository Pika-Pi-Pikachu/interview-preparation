'use client';
import { tipsGuidesData } from '@/main/data/home/tipsGuidesData';
import Link from 'next/link';
export default function TipsPage() {
  return (
  <main className="flex-grow overflow-hidden">
        <iframe
          src="https://dsa-question-orcin.vercel.app/"
          className="w-full h-[calc(100vh-64px)] border-none overflow-hidden"
          style={{
    scrollbarWidth: "none", 
    msOverflowStyle: "none"
  }}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </main>
  );
}
