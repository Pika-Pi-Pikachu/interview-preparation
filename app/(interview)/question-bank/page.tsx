import React from 'react'

const page = () => {
  return (
    <main className="flex-grow overflow-hidden">
        <iframe
          src="https://resume-analyzer-alpha-six.vercel.app/"
          className="w-full h-[calc(100vh-64px)] border-none"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </main>
  )
}

export default page