import SERVICES from '../../../constants/ServicesData';
import Image from 'next/image';
import Link from 'next/link';
import ArrowButton from '../../../ui/ArrowButton';
import Services2 from '../../../components/Services2.js';
import WhyCollective from '../../../components/WhyCollective.js';
import CollectiveAECFramework from '../../../components/CollectiveAECFramework.js';
import SubServicesHero from './SubServicesHero.js';

export default async function SubservicePage({ params }) {
  const { main, sub } = await params;
  const mainData = SERVICES[main];
  if (!mainData) return <div style={{ padding: '2rem' }}>Service not found</div>;
  const subData = mainData.subs?.[sub];
  if (!subData) return <div style={{ padding: '2rem' }}>Subservice not found</div>;

  return (
    <main className='text-black min-h-screen pt-12 pb-8'>
      {/* <div className='w-full px-4 max-w-7xl mx-auto'>
        <section className='grid grid-cols-1 gap-8 lg:gap-12'>
          <header className='text-center lg:text-left'>
            <h1
              className='text-black font-bold mb-4'
              style={{
                fontFamily: 'var(--font-bruno-ace-sc), sans-serif',
                fontSize: 'clamp(1.5rem, 4.5vw, 2.6rem)',
                letterSpacing: '0.1em'
              }}
            >
              {subData.title}
            </h1>
            {subData.subtitle && (
              <p className='text-gray-600 text-lg sm:text-xl'>
                {subData.subtitle}
              </p>
            )}
          </header>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
            <div className='w-full'>
              <div className='w-full max-w-2xl mx-auto lg:mx-0 aspect-video rounded-lg overflow-hidden bg-gray-50 shadow-sm'>
                <Image
                  src={subData.image}
                  alt={subData.title}
                  width={800}
                  height={450}
                  className='w-full h-full object-contain'
                  style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                />
              </div>
            </div>

            <div className='space-y-6'>
              <p className='text-gray-800 text-base sm:text-lg leading-relaxed'>
                {subData.description}
              </p>

              {Array.isArray(subData.features) && subData.features.length > 0 && (
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-4'>Key Features:</h3>
                  <ul className='space-y-2 text-gray-700 list-disc ml-5'>
                    {subData.features.map((f) => (
                      <li key={f} className='text-base'>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </div> */}

      <SubServicesHero />

      <section className="py-16 lg:py-24">
        <div className="mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold text-gray-900 leading-tight mb-4">
                  BIM <span className="text-gray-600">Consulting Services</span>
                </h2>
                <div className="w-24 h-1 bg-black"></div>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                At Collective AEC, we redefine precision through intelligent BIM solutions. From establishing
                seamless Common Data Environments to crafting customized BIM Execution Plans (BEP), our
                approach ensures every project begins with clarity and innovation. Our expert team transforms
                your BIM goals into built realities delivering accuracy, collaboration, and forward-thinking
                results through advanced BIM modelling, Revit drafting, and parametric design expertise.
              </p>

              {/* Trust Statement */}
              <div className="pt-4">
                <p className="text-gray-900 text-lg lg:text-xl font-medium">
                  Trusted by <span className="font-bold text-black">300+</span> Leading Architectural and Engineering Companies
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <img
                  src="https://i.postimg.cc/sxQ296Dc/IMG-20251009-WA0001.jpg"
                  alt="BIM Consulting Services Illustration"
                  className="w-full h-auto object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>        </div>
        </div>
      </section>

      <WhyCollective />

      <CollectiveAECFramework />

      <Services2 />

      <div className='flex justify-center mt-12'>
        <Link className='no-underline' href="/#contact-us-section" style={{ textDecoration: 'none' }}>
          <ArrowButton label="Contact us" />
        </Link>
      </div>
    </main>
  );
}
