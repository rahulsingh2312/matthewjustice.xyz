import { useState, useEffect } from 'react'
import { Copy, ExternalLink, Twitter } from 'lucide-react'
// import Testimonials from './testimonals'
const App = () => {
  const [copied, setCopied] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const contractAddress = "51PMdJJmpkJMi8CxVVm9e1T62a3omZtjLCN81xQupump"
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
    'https://twitter.com/user/status/1874704973055029546',
    // 'https://twitter.com/user/status/1871107091328561641',
    // 'https://twitter.com/user/status/1870888069777232241',
    // 'https://twitter.com/user/status/1871270749253910801',
    // 'https://twitter.com/user/status/1871270749253910801'
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      <nav style={{
        backgroundImage: `linear-gradient(to bottom, rgba(3, 4, 94, 0.9), rgba(255, 0, 0, 0.7))`,
        backgroundColor: '#030459'
      }} className="border-b border-red-700 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="md:text-2xl text-xs font-bold text-white flex items-center gap-2">
            <img src="/army.jpg" alt="American Flag" className="w-8 rounded-full h-8" />
            <span className="text-red-500">Justice</span>{" "}
            <span className="text-white">for</span>{" "}
            <span className="text-blue-500">Matthew</span>
          </div>
          <div className="flex gap-4">
            <a href='https://dexscreener.com/solana/cnrtme6favhusc8b8ss6knwvvrwegmkxz9jyza1cs3c' target='_blank'>
            <img src="/pump.png" alt="Platform Logo" className="w-6 h-6 hover:text-red-500 transition-colors" />
            </a>
            <a href='https://x.com/JusticeMattSol' target='_blank'>
            <Twitter className="h-6 w-6 text-white hover:text-red-500 transition-colors" />
            </a>
            <a href='https://t.me/MatthewLivelsberger' target='_blank'>
            <img src="/tg.svg" alt="Telegram" className="w-6 h-6 hover:text-red-500 transition-
            colors" />
            </a>
          </div>
        </div>
      </nav>

      <div style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), url('${isMobile ? '/mobile.png' : '/final2.png'}')`,
        // backgroundColor: 'bg-red-500',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
        position: 'relative'
      }} className="text-white  flex flex-col">
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="relative">
              <img src="/gunarmy.jpg" alt="Banner" className="mx-auto rounded-lg shadow-lg" />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYGsGZqvxH41_ypkLIg8Hjf_d-O1DnXFY1w&s" alt="Eagle Symbol" className="w-[40%] mx-auto" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mt-8">
              <span className="text-red-500">Justice</span>{" "}
              <span className="text-white">for</span>{" "}
              <span className="text-blue-500">Matthew</span>
            </h1>
            
            <p className="text-lg text-white font-semibold">
              Innocent Until Proven Guilty
            </p>

            <div className="max-w-xl mx-auto p-4 rounded-lg bg-white/10 border border-red-700">
              <p className="text-sm text-white mb-2">Contract Address</p>
              <div className="flex items-center gap-2 bg-blue-900 p-2 rounded">
                <code className="flex-1 font-mono text-red-400">51PM....1xQupump</code>
                <button onClick={copyToClipboard} className="p-2 hover:bg-red-700/20 rounded transition-colors">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              {copied && <p className="text-sm text-white mt-2">Copied to clipboard!</p>}
            </div>
          </div>
        </main>
        <div className="mt-16  md:px-32">
      
      
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
      </div>
{/* <Testimonials /> */}
      <footer style={{
        backgroundImage: `linear-gradient(to bottom, rgba(3, 4, 94, 0.9), rgba(255, 0, 0, 0.7))`,
        backgroundColor: '#030459'
      }} className="border-t border-red-700 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLi_juXt4gl7X4-h3P_fV4IM9eFtAPJ3gM3Q&s" alt="American Symbol 1" className="w-12 h-12 rounded-full" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPkT7mROzhMMgZUWelqWEnB1vXj9lkiw9RXg&s" alt="American Symbol 2" className="w-12 rounded-full h-12" />
            <img src="https://www.pcscoins.com/dw/image/v2/BDZH_PRD/on/demandware.static/-/Sites-full-catalog/default/dw31abc48d/images/hi-res/Symbols-of-Liberty-American-Eagle-Silver-Dollars-SYL-2.jpg" alt="American Symbol 3" className="w-12 rounded-full h-12" />
          </div>
          <p className="text-white text-sm">
            "Justice for Matthew, innocent until proven guilty"
          </p>
          <div className="mt-4 text-xs text-white/60">
            © 2024 $Matthew All rights reserved.
          </div>
          <a href='https://x.com/rrahulol' target='_blank'>
          <div className="mt-4 text-xs text-white/60">
            created by @rrahulol
          </div>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App