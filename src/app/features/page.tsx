import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/Home-Content/Header"
import { Footer } from "@/components/Home-Content/Footer"
import {
  Brain,
  Calendar,
  BarChart3,
  Zap,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black pt-24 pb-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="default" className="mb-6 bg-blue-500 text-white">
              <Sparkles className="h-4 w-4 mr-2" />
              Powerful Twitter Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Everything You Need to Dominate Twitter
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover the comprehensive suite of AI-powered tools designed to automate, optimize, and accelerate your
              Twitter growth and engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Core Features</h2>
            <p className="text-xl text-gray-300">The essential tools every Twitter creator needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700 p-6">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">AI Tweet Generation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-300 mb-4">
                  Generate compelling, engaging tweets that grab attention and improve engagement rates using
                  advanced AI algorithms trained on viral content.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Viral Content</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Engaging</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700 p-6">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-300 mb-4">
                  Schedule your tweets for optimal posting times based on your audience analytics and engagement
                  patterns for maximum reach.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Optimal Timing</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Automated</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700 p-6">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Performance Analytics</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-300 mb-4">
                  Track your tweet performance with detailed analytics and insights to optimize your Twitter strategy
                  and grow your following.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Real-time</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Actionable</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700 p-6">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Thread Automation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-300 mb-4">
                  Create engaging Twitter threads automatically with AI-powered content generation and smart formatting
                  for maximum impact.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Thread Creation</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Smart Formatting</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700 p-6">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Content Safety</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-300 mb-4">
                  Ensure your content follows Twitter guidelines with AI-powered content moderation and safety checks
                  before publishing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Safe Content</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Guidelines</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700 p-6">
              <CardHeader className="p-0 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Time Saving</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-gray-300 mb-4">
                  Save hours every week with automated content creation, scheduling, and management tools that handle
                  your Twitter presence.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Efficient</Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">Time-saving</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Advanced Capabilities</h2>
            <p className="text-xl text-gray-300">Take your Twitter presence to the next level</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start space-x-6 p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Engagement Optimization</h3>
                <p className="text-gray-300 mb-3">
                  Our advanced AI analyzes trending hashtags, optimal posting times, and audience behavior to
                  maximize your tweet engagement and reach.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-400">
                  <CheckCircle className="h-4 w-4" />
                  <span>Hashtag optimization automation</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Trend Analysis & Predictions</h3>
                <p className="text-gray-300 mb-3">
                  Stay ahead of the curve with real-time trend analysis and content suggestions based on emerging topics
                  and viral content patterns.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-400">
                  <CheckCircle className="h-4 w-4" />
                  <span>Real-time trend monitoring</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Automated Workflow Management</h3>
                <p className="text-gray-300 mb-3">
                  Create custom workflows that automatically handle your entire Twitter content pipeline from creation to
                  engagement tracking.
                </p>
                <div className="flex items-center space-x-2 text-sm text-blue-400">
                  <CheckCircle className="h-4 w-4" />
                  <span>Custom automation rules</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Why Choose Postiva?</h2>
            <p className="text-xl text-gray-300">See how we compare to traditional Twitter management</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-2 border-purple-500/20 bg-purple-500/5">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl text-purple-400">Manual Twitter Management</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3 text-gray-400">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Hours spent on content creation</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-400">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Manual scheduling and posting</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-400">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Guesswork for optimal timing</span>
                    </li>
                    <li className="flex items-center space-x-3 text-gray-400">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Limited engagement insights</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-8 border-2 border-blue-500/20 bg-blue-500/5">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl text-blue-400">With Postiva</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3 text-white">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>AI-generated tweets in seconds</span>
                    </li>
                    <li className="flex items-center space-x-3 text-white">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>Automated scheduling and posting</span>
                    </li>
                    <li className="flex items-center space-x-3 text-white">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>Data-driven optimal timing</span>
                    </li>
                    <li className="flex items-center space-x-3 text-white">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>Comprehensive performance tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Experience These Features?</h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of creators who are already using Postiva to grow their Twitter presence faster and more
              efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-10 py-6 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl" asChild>
                <Link href="/auth/signup">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-6 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white rounded-2xl" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
