"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/Home-Content/Header"
import { Footer } from "@/components/Home-Content/Footer"
import { ExternalLink, Loader2 } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function ConnectPage() {
  const [isConnecting, setIsConnecting] = useState(false)
  const router = useRouter()

  const handleConnectTwitter = () => {
    setIsConnecting(true)
    setTimeout(() => {
      router.push("/dashboard")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black pb-8">
      </section>

      {/* Connect Section */}
      <section className="py-12 relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardContent className="p-12 text-center">
                {/* Twitter Logo */}
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="h-12 w-12 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-white mb-8">
                  Connect Your Twitter Channel
                </h1>

                {/* Connect Button */}
                <Button
                  onClick={handleConnectTwitter}
                  disabled={isConnecting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-2xl transition-all duration-300 mb-8"
                >
                  {isConnecting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Connect with Twitter
                    </>
                  )}
                </Button>

                {/* Loading Bar */}
                {isConnecting && (
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                    <div className="bg-blue-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                  </div>
                )}

                {/* Info Text */}
                <p className="text-gray-400 text-sm">
                  {isConnecting 
                    ? "Please wait while we connect your Twitter account..." 
                    : "Connect your Twitter account to start automating your posts"
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
