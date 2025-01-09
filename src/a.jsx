import { useState } from 'react'
import { Copy, ExternalLink, Twitter } from 'lucide-react'

const App = () => {
  const [copied, setCopied] = useState(false)
  const contractAddress = "51PMdJJmpkJMi8CxVVm9e1T62a3omZtjLCN81xQupump"
  
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div 
      className="min-h-screen text-white flex flex-col bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(3, 4, 94, 0.9), rgba(255, 0, 0, 0.7))`,
        backgroundColor: '#030459'
      }}
    >
      <nav className="border-b border-red-700 p-4 bg-blue-900">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <img src="/api/placeholder/32/32" alt="American Flag" className="w-8 h-8" />
            Justice for Matthew
          </div>
          <div className="flex gap-4">
            <img src="/api/placeholder/24/24" alt="Platform Logo" className="w-6 h-6" />
            <Twitter className="h-6 w-6 text-white hover:text-red-500 transition-colors" />
            <img src="/api/placeholder/24/24" alt="Telegram" className="w-6 h-6" />
          </div>
        </div>
      </nav>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="relative">
            <img src="/api/placeholder/500/200" alt="Banner" className="mx-auto rounded-lg shadow-lg" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <img src="/api/placeholder/64/64" alt="Eagle Symbol" className="w-16 h-16" />
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
              <code className="flex-1 font-mono text-red-400">{contractAddress}</code>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-red-700/20 rounded transition-colors"
                aria-label="Copy address"
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
            {copied && (
              <p className="text-sm text-white mt-2">Copied to clipboard!</p>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-red-700 py-8 bg-blue-900">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <img src="/api/placeholder/32/32" alt="American Symbol 1" className="w-8 h-8" />
            <img src="/api/placeholder/32/32" alt="American Symbol 2" className="w-8 h-8" />
            <img src="/api/placeholder/32/32" alt="American Symbol 3" className="w-8 h-8" />
          </div>
          <p className="text-white text-sm">
            "Justice for Matthew, innocent until proven guilty"
          </p>
          <div className="mt-4 text-xs text-white/60">
            © 2024 $Matthew All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App