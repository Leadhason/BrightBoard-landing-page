import Image from "next/image"

export default function TrustedBy() {
  const companies = [
    { name: "Mailchimp", logo: "/logos/mailchimp.svg" },
    { name: "DoorDash", logo: "/logos/acer.svg" },
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Spotify", logo: "/logos/spotify.svg" },
    { name: "Webflow", logo: "/logos/webflow.svg" }
  ]

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-600 mb-5">We are trusted by</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company) => (
            <div key={company.name} className="w-32 h-20 relative grayscale-0 transition-all">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 