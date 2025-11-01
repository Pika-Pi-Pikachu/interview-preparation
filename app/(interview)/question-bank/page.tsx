import React from 'react'

const page = () => {
  return (
    <main className="flex-grow overflow-hidden">
        <iframe
          src="https://ai-powered-resume-analyzer-ten.vercel.app/"
          className="w-full h-[calc(100vh-64px)] border-none"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </main>
  )
}

export default page