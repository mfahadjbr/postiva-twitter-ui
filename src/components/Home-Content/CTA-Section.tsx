import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Transform Your Twitter Presence?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of creators who have already automated their Twitter success with AI-powered content generation and smart scheduling.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" variant="default" className="text-lg px-10 py-6 group bg-blue-500 hover:bg-blue-600 text-white rounded-2xl" asChild>
            <Link href="/auth/signup">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-10 py-6 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-2xl" asChild>
            <Link href="#how-it-works">Learn More</Link>
          </Button>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            ✨ No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
