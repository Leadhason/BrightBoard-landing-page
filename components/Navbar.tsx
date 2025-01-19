import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="container mx-auto px-4 flex justify-between items-center py-3">
      <div className="flex items-center gap-2">
        <Image 
          src="/logo.svg"
          alt="YowManage Logo" 
          width={30} 
          height={25}
        />
        <span className="font-bold text-xl">BrightBoard</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="hover:text-primary">Home</a>
        <a href="#" className="hover:text-primary">Features</a>
        <a href="#" className="hover:text-primary">Pricing</a>
        <a href="#" className="hover:text-primary">Blog</a>
        <a href="#" className="hover:text-primary">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" className="hover:underline">Login</Button>
        <Button>Get Started</Button>
      </div>
    </nav>
  )
}
