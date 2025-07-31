import { InstagramEmbed } from "react-social-media-embed";
import { useState, useEffect } from "react";

export default function InstagramFeed() {
  const postUrls = [
    "https://www.instagram.com/segindia/p/DMt841hPWRK/",
    "https://www.instagram.com/segindia/p/DMr3UHTC1O3/",
    "https://www.instagram.com/segindia/p/DMkHjYUSLH6/",
    
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(-1);

  // Auto-rotate featured post
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.min(postUrls.length, 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 transform -skew-y-3 origin-top-left"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 rounded-full bg-pink-100 opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-pink-600 bg-pink-100 rounded-full mb-4">
            Social Feed
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Instagram</span> Moments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow along for behind-the-scenes, updates, and more
          </p>
        </div>

        {/* Featured post (larger) */}
        {/* <div className="mb-16 relative group">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.01]">
            <InstagramEmbed 
              url={postUrls[activeIndex]} 
              width="100%"
              
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="font-medium">@segindia</span>
                </div>
                <p className="text-sm line-clamp-2">Check out our latest updates and events!</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {postUrls.slice(0, 3).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-pink-500 w-6' : 'bg-gray-300'}`}
                aria-label={`View post ${index + 1}`}
              />
            ))}
          </div>
        </div> */}

        {/* Grid of posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {postUrls.map((url, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${isHovering === index ? 'transform -translate-y-2 shadow-xl' : ''}`}
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(-1)}
            >
              <InstagramEmbed 
                url={url} 
                width="100%"
                
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  className="w-full flex items-center justify-center space-x-2 bg-white/90 text-gray-900 py-2 px-4 rounded-full font-medium hover:bg-white transition-colors"
                  onClick={() => window.open(url, '_blank')}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span>View Post</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/segindia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-full shadow-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow Us for More Updates
          </a>
        </div>
      </div>
    </section>
  );
}