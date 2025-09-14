import SERVICES from '../../../constants/ServicesData';
import Image from 'next/image';
import Link from 'next/link';
import ArrowButton from '../../../ui/ArrowButton';

export default async function SubservicePage({ params }) {
  const { main, sub } = await params;
  const mainData = SERVICES[main];
  if (!mainData) return <div style={{ padding: '2rem' }}>Service not found</div>;
  const subData = mainData.subs?.[sub];
  if (!subData) return <div style={{ padding: '2rem' }}>Subservice not found</div>;

  return (
    <main className='text-black' style={{ minHeight: '100vh', padding: 'clamp(1.25rem, 4vw, 2.5rem)', paddingTop: 'clamp(3rem, 8vh, 6rem)' }}>
      <section style={{ maxWidth: '72rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(1rem, 3vw, 2rem)' }}>
        <header>
          <h1 className='text-black' style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif', fontSize: 'clamp(1.5rem, 4.5vw, 2.6rem)', margin: 0 }}>{subData.title}
          </h1>
          {subData.subtitle && <p style={{ marginTop: '0.5rem', color: 'rgba(0,0,0,0.6)' }}>{subData.subtitle}</p>}
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'clamp(1rem, 3vw, 2rem)' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '36rem', margin: '0 auto', aspectRatio: '16/9', borderRadius: '0.5rem', overflow: 'hidden' }}>
            <Image
              src={subData.image}
              alt={subData.title}
              fill
              sizes="(max-width: 768px) 100vw, 36rem"
              style={{ objectFit: 'contain', backgroundColor: 'rgba(0,0,0,0.02)' }}
            />
          </div>

          <div>
            <p style={{ marginTop: '0.5rem', lineHeight: 1.6 }}>{subData.description}</p>

            {Array.isArray(subData.features) && subData.features.length > 0 && (
              <ul style={{ marginTop: '1rem', paddingLeft: '1.25rem' }}>
                {subData.features.map((f) => (
                  <li key={f} style={{ marginBottom: '0.35rem' }}>{f}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <Link href="/#contact-us-section">
            <ArrowButton label="Contact us" />
          </Link>
        </div>
      </section>
    </main>
  );
}
