import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const Testimonials = () => {
  const [tweetsLoaded, setTweetsLoaded] = useState(false);

  useEffect(() => {
    const loadTwitterWidget = () => {
      if (window.twttr) {
        window.twttr.widgets.load();
        setTweetsLoaded(true);
      }
    };

    if (!document.getElementById('twitter-widget')) {
      const script = document.createElement('script');
      script.id = 'twitter-widget';
      script.src = 'https://platform.twitter.com/widgets.js';
      script.onload = loadTwitterWidget;
      document.body.appendChild(script);
    } else {
      loadTwitterWidget();
    }
  }, []);

  const tweetUrls = [
    'https://twitter.com/user/status/1870883389030752446',
    'https://twitter.com/user/status/1871107091328561641',
    'https://twitter.com/user/status/1870888069777232241',
    'https://twitter.com/user/status/1871270749253910801'
  ];

  return (
    <div className="mt-16 px-32">
      
      
      {/* <h1 className="mt-10 text-4xl md:text-6xl text-center">Public Cheers for Us!</h1>
      <p className="mt-2 text-gray-400 text-center">Find out how our users are spreading the word</p>
       */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-10 mb-10">
        {tweetUrls.map((url, index) => (
          <div key={index} className=" rounded-lg p-4">
            <blockquote className="twitter-tweet" data-theme="dark" data-lang="en">
              <a href={url}>Loading tweet...</a>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;