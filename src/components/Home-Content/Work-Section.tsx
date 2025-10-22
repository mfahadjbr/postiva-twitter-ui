import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";
import { Upload, Sparkles, Calendar } from "lucide-react";

export function WorkSection() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900 py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">How It Works</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three simple steps to transform your Twitter workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Upload className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">1. Connect Twitter</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-300">
                Connect your Twitter account securely. Our system supports all Twitter account types and permissions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">2. AI Content Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-300">
                Our AI analyzes trending topics and generates engaging tweets, threads, and content optimized for your audience.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">3. Schedule & Engage</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-300">
                Schedule tweets for optimal engagement times and automate interactions to grow your Twitter presence.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}