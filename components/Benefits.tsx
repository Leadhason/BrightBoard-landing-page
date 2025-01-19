import { BookOpen, Users, Calendar, Bell } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Academic Management",
      description: "Streamline curriculum planning, grading, and student performance tracking in one place"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Staff Collaboration",
      description: "Enable seamless communication between teachers, administrators, and support staff"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Schedule Planning",
      description: "Efficiently manage class schedules, events, and academic calendar with smart tools"
    },
    {
      icon: <Bell className="w-8 h-8 text-primary" />,
      title: "Real-time Updates",
      description: "Stay informed with instant notifications about assignments, events, and announcements"
    }
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h4 className="text-pink-500 font-medium mb-4">Benefits</h4>
          <h2 className="text-3xl font-bold mb-6">The smart choice for your school</h2>
          <p className="text-gray-600">
            Everything you need to manage your educational institution efficiently and enhance the learning experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title} 
              className="p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all bg-white"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 