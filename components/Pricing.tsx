'use client'

import { useState } from "react"
import { Check, Hammer, Rocket, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Starter Plan",
    description: "Perfect for individuals or small teams getting started with task management",
    price: { monthly: "FREE", annually: "FREE" },
    icon: Hammer,
    features: [
      "Task Management Tools",
      "Team Collaboration (up to 3 members)",
      "Basic Project Tracking",
      "Standard Support"
    ]
  },
  {
    name: "Pro Plan",
    description: "Designed for growing teams that need advanced features and flexibility",
    price: { monthly: "$19", annually: "$15" },
    icon: Rocket,
    features: [
      "Everything in Starter Plan",
      "Unlimited Team Members",
      "Advanced Project Tracking",
      "Customizable Dashboards",
      "Priority Support"
    ]
  },
  {
    name: "Enterprise Plan",
    description: "Best for large teams and enterprises with multiple projects and complex workflows",
    price: { monthly: "$49", annually: "$39" },
    icon: Building2,
    features: [
      "Everything in Pro Plan",
      "Dedicated Account Manager",
      "Advanced Analytics & Reporting",
      "Custom Integrations",
      "24/7 Premium Support"
    ]
  }
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h4 className="text-pink-500 font-medium mb-4">Pricing</h4>
          <h2 className="text-3xl font-bold mb-6">Flexible plans for every team</h2>
          <p className="text-gray-600 mb-8">
            Choose the plan that best fits your team's needs. Whether you're just getting started or managing large projects, YowManage offers affordable solutions to help you stay organized and productive
          </p>

          <div className="inline-flex rounded-lg border border-gray-200 p-1 mb-8">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-md text-sm ${!isAnnual ? 'bg-primary text-white' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-md text-sm flex items-center gap-2 ${isAnnual ? 'bg-primary text-white' : 'text-gray-500 hover:text-gray-700'}`}
            >
              Annually
              <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded-full">20% off</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className="relative overflow-hidden">
              <CardHeader>
                <plan.icon className="w-8 h-8 text-primary mb-4" />
                <CardTitle className="text-xl text-bold font-light">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold">
                      {isAnnual ? plan.price.annually : plan.price.monthly}
                    </span>
                    {plan.price.monthly !== "FREE" && (
                      <span className="text-gray-500">/month</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.name === "Pro Plan" ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 