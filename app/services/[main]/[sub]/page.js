import SERVICES from '../../../constants/ServicesData';
import Image from 'next/image';
import Link from 'next/link';
import ArrowButton from '../../../ui/ArrowButton';
import Services2 from '../../../components/Services2.js';

export default async function SubservicePage({ params }) {
  const { main, sub } = await params;
  const mainData = SERVICES[main];
  if (!mainData) return <div style={{ padding: '2rem' }}>Service not found</div>;
  const subData = mainData.subs?.[sub];
  if (!subData) return <div style={{ padding: '2rem' }}>Subservice not found</div>;

  return (
    <main className='text-black min-h-screen pt-12 pb-8 px-4 sm:px-6'>
      <div className='w-full px-4 max-w-7xl mx-auto'>
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
      </div>

      <Services2 />

      <div className='flex justify-center mt-12'>
        <Link className='no-underline' href="/#contact-us-section" style={{ textDecoration: 'none' }}>
          <ArrowButton label="Contact us" />
        </Link>
      </div>
    </main>
  );
}
