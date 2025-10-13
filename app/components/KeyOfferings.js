"use client";
import React from 'react';

export default function KeyOfferings({ points = [], steps = [] }) {
  // Accept either 'points' or 'steps' for compatibility
  const items = points && points.length ? points : (steps && steps.length ? steps : [
    { id: 'k-1', title: 'Design-Led Engineering', text: 'Buildable, beautiful solutions.' },
    { id: 'k-2', title: 'Digital Workflows', text: 'BIM-ready deliverables and cloud collaboration.' },
    { id: 'k-3', title: 'Performance', text: 'Energy-conscious design for resilient outcomes.' },
    { id: 'k-4', title: 'Coordination', text: 'Multi-discipline coordination and reviews.' },
    { id: 'k-5', title: 'Visualization', text: 'Photoreal visualizations and renders.' },
  ]);

  return (
    <section className="min-h-screen bg-white py-12 flex justify-center">
      {/* Full-width container set to 95vw */}
      <div className="w-[95vw] max-w-none">
        <div className="text-center mb-8">
          <h2 className="font-bruno-ace-sc text-3xl font-bold" style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif' }}>KEY OFFERINGS</h2>
          <p className="mt-3 text-gray-600">Core capabilities we bring to every engagement.</p>
        </div>

        <div className="space-y-4">
          {items.map((s, i) => (
            <div key={s.id || i} className="w-full rounded-lg border border-gray-200 overflow-hidden">
              <div className="w-full bg-black text-white p-6">
                <h3 className="text-lg font-bruno-ace-sc font-bold text-left" style={{ fontFamily: 'var(--font-bruno-ace-sc), sans-serif' }}>{s.title}</h3>
                {/* separator line */}
                <div className="border-t border-gray-700 my-3" />
                <p className="text-left text-gray-100">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
