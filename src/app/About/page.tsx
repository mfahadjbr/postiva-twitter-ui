import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/Home-Content/Header"
import { Footer } from "@/components/Home-Content/Footer"
import { Users, Target, Award, ArrowRight, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black pt-24 pb-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="default" className="mb-6 bg-blue-500 text-white flex items-center justify-center mx-auto w-fit">
              <svg className="h-4 w-4 mr-2 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              About Postiva
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Revolutionizing Twitter Content Creation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We&apos;re on a mission to empower content creators with AI-driven tools that transform how tweets are
              generated, scheduled, and optimized on Twitter.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-gray-700 hover:border-blue-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To democratize Twitter success by providing creators with intelligent automation tools that handle the
                  technical aspects of content optimization, allowing them to focus on what they do best - creating
                  amazing content and building authentic connections.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-gray-700 hover:border-blue-500/20 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the leading platform where every content creator, regardless of their technical expertise,
                  can leverage the power of AI to grow their Twitter presence and reach their full potential in the
                  social media landscape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Story</h2>
              <p className="text-xl text-gray-300">How Postiva came to life</p>
            </div>

            <div className="space-y-12">
              <div className="flex items-start space-x-6 p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-white">The Problem We Saw</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Content creators were spending countless hours on tweet creation, scheduling, and engagement - time that could be better spent on actual content creation. Many talented creators struggled to grow because they lacked the consistency and optimization strategies needed for Twitter success.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-white">The Solution We Built</h4>
                  <p className="text-gray-300 leading-relaxed">
                    We combined cutting-edge AI technology with deep Twitter expertise to create an automation platform
                    that handles tweet generation, thread creation, optimal scheduling, and engagement tracking. Our AI learns from viral content patterns to help creators maximize their reach.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-white">The Impact We&apos;re Making</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Today, thousands of creators use Postiva to streamline their Twitter workflow, increase their engagement rates, and grow their following faster than ever before. We&apos;re proud to be part of their success stories and viral moments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-xl text-gray-300">What drives us every day</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Creator-First</h3>
              <p className="text-gray-300 leading-relaxed">
                Every feature we build is designed with creators in mind. We listen, learn, and iterate based on real
                creator needs and feedback from our community.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
              <p className="text-gray-300 leading-relaxed">
                We&apos;re constantly pushing the boundaries of what&apos;s possible with AI and automation in social media content creation and engagement.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Excellence</h3>
              <p className="text-gray-300 leading-relaxed">
                We&apos;re committed to delivering the highest quality tools and support to help creators achieve their
                Twitter growth goals and build meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Transform Your Twitter Presence?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of creators who are already using Postiva to grow their Twitter following faster and more
              efficiently with AI-powered automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-10 py-6 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl" asChild>
                <Link href="/auth/signup">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-2xl" asChild>
                <Link href="/features">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
