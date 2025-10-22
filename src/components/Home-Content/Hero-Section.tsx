import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black pt-20 pb-8">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="default" className="mb-6 bg-blue-500 text-white">
            AI-Powered Twitter Automation
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Automate Your Twitter Success
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Schedule tweets, generate engaging content, and grow your Twitter presence with AI. 
            Automate your social media strategy with one click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="text-lg px-8 py-6 group bg-blue-500 hover:bg-blue-600 text-white" asChild>
              <Link href="/auth/signup">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white" asChild>
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}