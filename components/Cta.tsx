import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Cta() {
  return (
    <section className="relative py-8 mt-20 bg-white">
      <div className="">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-pink-100/20" />
        
        {/* Decorative circles */}
        <div className="absolute roundwd-md top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ready to streamline your workflow?
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl lg:max-w-none mx-auto mb-6">
                Join thousands of teams who use YowManage to stay organized, collaborate effectively, and deliver projects on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
               <Button className="h-[45px] w-30 -mt-3">
                Get Started
               </Button>
              </div>
            </div>

            {/* App preview */}
            <div className="w-full lg:w-1/2 shadow-sm rounded-lg">
              <div className="relative">
                <div className="bg-transparent">
                  <div className="relative overflow-visible aspect-[16/11] rounded-lg bg-transparent">
                    <Image
                      src="/for-cta.png"
                      alt="Dashboard Preview"
                      fill
                      className="object-cover rounded-md"
                      priority
                    />
                    {/* Floating cards */}
                    <div className="absolute top-4 -left-2 bg-white rounded-lg shadow-lg p-3 max-w-[180px] animate-float-slow">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="text-sm font-medium">Tasks Completed</div>
                      </div>
                      <div className="text-xl font-bold">2,847</div>
                    </div>
                    <div className="absolute bottom-4 -right-2 bg-white rounded-lg shadow-lg p-3 max-w-[180px] animate-float">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500" />
                        </div>
                        <div className="text-sm font-medium">Team Members</div>
                      </div>
                      <div className="text-xl font-bold">149+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 