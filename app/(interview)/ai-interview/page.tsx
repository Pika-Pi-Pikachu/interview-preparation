import React from 'react';

const AiInterview = () => {
  
   return (
  <main className="flex-grow overflow-hidden">
        <iframe
          src="https://ai-interview-question-generator-1-npn3.onrender.com/"
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
};

export default AiInterview;
