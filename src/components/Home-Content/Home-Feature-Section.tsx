import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";
import { Clock, Target, Zap, Users, Sparkles, CheckCircle } from "lucide-react";

export function HomeFeatureSection() {
  return (
<section className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to scale your Twitter presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-white">Time Saving</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Reduce content creation time by 80%. Focus on strategy while we handle the automation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-white">SEO Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  AI-generated tweets and threads optimized for Twitter&apos;s algorithm and trending topics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <Zap className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-white">Smart Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Schedule tweets for peak engagement times based on your audience analytics and time zones.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-white">Audience Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Get detailed analytics on what content performs best with your Twitter audience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <Sparkles className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-white">AI Thumbnails</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">Generate viral tweet threads and engaging content that increases your reach and engagement.</CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle className="text-white">Bulk Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Process multiple tweets at once and manage your entire Twitter content pipeline.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

