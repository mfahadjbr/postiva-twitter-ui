import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function FAQSection() {
  return (
<section className="relative overflow-hidden bg-linear-to-br from-gray-900 via-black to-gray-900 py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about our platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-gray-700 rounded-xl px-6 py-3 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <AccordionTrigger className="text-left text-white font-semibold text-base hover:text-blue-400 transition-colors py-2">
                  How accurate is the AI-generated content?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm leading-relaxed pt-2">
                  Our AI is trained on millions of successful tweets and achieves 95% accuracy in generating
                  relevant content and threads. You can always edit and customize the generated content before
                  publishing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-gray-700 rounded-xl px-6 py-3 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <AccordionTrigger className="text-left text-white font-semibold text-base hover:text-blue-400 transition-colors py-2">
                  What Twitter account types are supported?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm leading-relaxed pt-2">
                  We support all Twitter account types including personal, business, and verified accounts. 
                  Maximum tweet length is 280 characters with media support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-gray-700 rounded-xl px-6 py-3 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <AccordionTrigger className="text-left text-white font-semibold text-base hover:text-blue-400 transition-colors py-2">
                  Can I schedule tweets for specific times?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm leading-relaxed pt-2">
                  Yes! You can schedule tweets for any date and time. Our system will automatically publish your content
                  when scheduled, even if you&apos;re offline.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-gray-700 rounded-xl px-6 py-3 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <AccordionTrigger className="text-left text-white font-semibold text-base hover:text-blue-400 transition-colors py-2">
                  Is there a free trial available?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm leading-relaxed pt-2">
                  Yes, we offer a 14-day free trial with full access to all features. No credit card required to get
                  started.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-gray-700 rounded-xl px-6 py-3 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300">
                <AccordionTrigger className="text-left text-white font-semibold text-base hover:text-blue-400 transition-colors py-2">
                  How secure is my content?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 text-sm leading-relaxed pt-2">
                  We use enterprise-grade security with end-to-end encryption. Your tweets are processed securely and
                  automatically deleted from our servers after 30 days.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
