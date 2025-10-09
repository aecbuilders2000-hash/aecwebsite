import React from 'react'

const frameworkSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We begin by immersing ourselves in your project vision understanding goals, workflows, and existing BIM practices to identify alignment and improvement opportunities."
  },
  {
    number: "02", 
    title: "Analyse",
    description: "Our team conducts a detailed review of your current BIM processes, models, and coordination methods to uncover inefficiencies and performance gaps across design and construction stages."
  },
  {
    number: "03",
    title: "Optimize", 
    description: "We refine and restructure workflows for precision and scalability—standardizing Revit drafting templates, enhancing collaboration models, and integrating parametric design strategies that drive smarter project delivery."
  },
  {
    number: "04",
    title: "Automate",
    description: "Leveraging automation within BIM Revit, we streamline repetitive tasks, improve modelling accuracy, and accelerate documentation empowering your team to focus on creativity, innovation, and better project outcomes."
  }
];

const CollectiveAECFramework = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-gray-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 border border-gray-400 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Title */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-gray-900 leading-tight">
            Collective AEC Framework
          </h2>
        </div>

        {/* Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {frameworkSteps.map((step, index) => (
            <div key={step.number} className="space-y-4">
              {/* Step Number and Title */}
              <div className="flex items-baseline gap-3">
                <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {step.number}.
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed pl-12">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectiveAECFramework