import { useState } from 'react'
import { Copy, ExternalLink, Twitter } from 'lucide-react'
import tokenLogo from "./assets/logo.jpg"
import pumpfun from "./assets/pump.png"
import tg from "./assets/tg.svg"
import './App.css'

function App() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "51PMdJJmpkJMi8CxVVm9e1T62a3omZtjLCN81xQupump" // Replace with actual CA
  
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div 
    className="min-h-screen text-white flex flex-col bg-cover bg-center bg-no-repeat bg-fixed"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url('/justice.jpeg')`,
      backgroundColor: '#000' // Fallback color
    }}
  >
      {/* Navigation */}
      <nav className="border-b border-blue-500/20 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-orbitron font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Justice for Matthew

          </div>
          <div className="flex gap-4">
            <a 
              href="https://pump.fun/coin/51PMdJJmpkJMi8CxVVm9e1T62a3omZtjLCN81xQupump" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <img
              src={pumpfun}// Replace with actual image path
              alt="Locked In Alien"
              className="relative z-10 w-6 h-6 object-contain"
            />
            </a>
            <a 
              href="https://x.com/JusticeMattSol" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
              href="https://t.me/MatthewLivelsberger" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <img
              src={tg}// Replace with actual image path
              alt="Locked In Alien"
              className="relative z-10 w-6 h-6 object-contain"
            />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <img
              src="/gunarmy.jpg"// Replace with actual image path
              alt="Locked In Alien"
              className="relative mx-auto z-10 w-[500px] h-[200px] "
            />
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Justice for Matthew
          </h1>
          
          <p className="text-lg text-blue-400/80">
          innocent until proven guilty.
          </p>

          <div className="max-w-xl mx-auto p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
            <p className="text-sm text-blue-400/60 mb-2">Contract Address</p>
            <div className="flex items-center gap-2 bg-black/50 p-2 rounded">
              <code className="flex-1 font-mono text-blue-400">51PJJmp......m81xQupump</code>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-blue-500/20 rounded transition-colors"
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy address</span>
              </button>
            </div>
            {copied && (
              <p className="text-sm text-blue-400 mt-2">Copied to clipboard!</p>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-400/60 text-sm">
          "Justice for Matthew, innocent until proven guilty"
          </p>
          <div className="mt-4 text-xs text-blue-400/40">
            © 2024 $Matthew All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

