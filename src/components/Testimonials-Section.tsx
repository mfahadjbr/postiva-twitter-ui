import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Content Creator",
      avatar: "SJ",
      content: "This tool has revolutionized my Twitter workflow. I can now focus on strategy while AI handles the content generation and scheduling.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Tech Reviewer",
      avatar: "MC",
      content: "The AI-generated tweets and threads are spot-on. My engagement rates have increased by 40% since using this platform.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Educational Creator",
      avatar: "ER",
      content: "Scheduling and publishing tweets has never been easier. The automation features save me hours every week.",
      rating: 5
    }
  ]

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-black via-gray-900 to-black py-24">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of content creators who have transformed their Twitter workflow with our AI-powered automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 group-hover:bg-blue-600 transition-colors">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic text-lg leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
