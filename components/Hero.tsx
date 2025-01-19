import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative bg-gray-100 p-5">
      <div className="mt-10">
        <div className="container mx-auto py-10">
          <div className="flex flex-col items-center gap-8 max-w-5xl mx-auto text-center">
            <div className="space-y-6 -mb-3">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Seamless school {" "}
                <br/>
                <span>administration, <span className="text-[#FFA500]">anytime</span></span>
              </h1>
              <p className="text-lg text-muted-foreground text-center">
                Simplify school management with a comprehensive
                <br/>
                platform built for efficient and effective oversight.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-primary text-white rounded-lg p-3 px-2">
                  Request a Demo
                </Button>
                <Button size="lg" variant="ghost" className="bg-white rounded-lg px-2 text-black border p-3 hover:bg-gray-50">
                  Contact Sales
                </Button>
              </div>
            </div>

            <div className="relative w-[110%] h-[80%]">
              <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-16 bg-purple-100 rounded-2xl transform -rotate-12 z-10"></div>
              <div className="absolute -right-4 bottom-16 w-16 h-12 bg-green-100 rounded-xl transform rotate-12 z-10"></div>
              
              <div className="relative -mb-20 z-0">
                <Image
                  src="/for-hero.png"
                  alt="Dashboard Preview"
                  width={1000}
                  height={300}
                  className="rounded-t-lg w-full h-auto relative z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 