import { Play } from "lucide-react"
import { Button } from "./ui/button"

export default function VideoPreview() {
  return (
    <section className="py-12">
      <h4 className="text-pink-500 font-medium mb-4 text-center">Demo</h4>
      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg border">
            <video
              className="w-full aspect-[16/10] object-cover"
              poster="/for-cta.png"
              controls
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-center mt-8">
          <Button 
            variant="default" 
            className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full inline-flex items-center gap-2"
          >
            <Play className="w-4 h-4" /> Play Demo
          </Button>
        </div>
        </div>
      </div>
    </section>
  )
} 