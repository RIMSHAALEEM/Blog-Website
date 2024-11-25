"use client";
import React, { useState } from 'react';

import Image from 'next/image';
import blog5 from  "@/app/public/blog5.jpg"
import blog6 from "@/app/public/blog6.jpg"
import CommentSection from "@/app/components/CommentSection"



const Blog = () => {
  // State to handle "Read More" toggling for both articles
  const [isContentVisible1, setIsContentVisible1] = useState(false);
  const [isContentVisible2, setIsContentVisible2] = useState(false);

  // Function to toggle visibility of content
  const toggleContentVisibility1 = () => {
    setIsContentVisible1(!isContentVisible1);
  };

  const toggleContentVisibility2 = () => {
    setIsContentVisible2(!isContentVisible2);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-yellow-400 text-white p-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Artificial Intelligence Blog</h1>
        <p className="text-lg mt-2 sm:text-xl">Exploring the latest advancements and trends in AI</p>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <section>
          {/* First Article */}
          <article className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <Image
              className="w-full h-72 sm:h-96 object-cover"
              src={blog5}
              alt="AI Concept"
            />
            <div className="p-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">The Future of Artificial Intelligence</h2>
              <p className="text-gray-600 mt-2 sm:text-lg">
                Artificial Intelligence (AI) is transforming the world at an unprecedented pace. In this blog,
                we will explore the most exciting applications of AI in industries like healthcare, finance, and robotics.
              </p>
              {/* Toggleable content */}
              {isContentVisible1 && (
                <p className="text-gray-600 mt-4 sm:text-lg">
                  AI's influence is growing rapidly in several sectors. In healthcare, AI helps with diagnostic tools, predicting disease outbreaks, and personalizing treatments. In finance, it improves fraud detection, risk management, and algorithmic trading. Moreover, AI's presence in robotics is advancing automation in manufacturing and other industries. The future of AI holds endless possibilities, and as the technology evolves, it will continue to transform the world in ways we cannot yet fully imagine.
                </p>
              )}
              <button
                onClick={toggleContentVisibility1}
                className="text-purple-600 hover:text-yellow-400 mt-4 inline-block font-semibold"
              >
                {isContentVisible1 ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </article>
          <CommentSection />

          {/* Second Article */}
          <article className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <Image
              className="w-full h-72 sm:h-96 object-cover"
              src={blog6}
              alt="AI Trends"
            />
            <div className="p-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Top AI Trends to Watch in 2024</h2>
              <p className="text-gray-600 mt-2 sm:text-lg">
                As AI continues to evolve, here are the key trends that will dominate the industry in 2024.
                From advancements in deep learning to the rise of ethical AI, this article covers it all.
              </p>
              {/* Toggleable content */}
              {isContentVisible2 && (
                <p className="text-gray-600 mt-4 sm:text-lg">
                  One major trend to watch is the growth of ethical AI. As AI becomes more prevalent, there will be increasing discussions around responsible AI development and usage, focusing on fairness, transparency, and accountability. Additionally, AI-powered automation will continue to disrupt industries, improving efficiency but also raising concerns about job displacement. We are also seeing the rise of AI in creative fields, with algorithms that can generate art, music, and even literature. These trends will shape the future of AI and how it interacts with our lives in the coming years.
                </p>
              )}
              <button
                onClick={toggleContentVisibility2}
                className="text-purple-600 hover:text-yellow-400 mt-4 inline-block font-semibold"
              >
                {isContentVisible2 ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </article>
          <CommentSection />
        </section>
      </main>

     
    </div>
  );
};

export default Blog;
