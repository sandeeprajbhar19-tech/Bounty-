import React from 'react'
import CaseStudyCard from './components/CaseStudyCard.jsx'
import { caseStudies } from './data/caseStudies.js'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] py-14 px-4">
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <span className="inline-block bg-[#e6f7ef] text-[#1a9e5c] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Real Results
        </span>
        <h1 className="text-4xl font-extrabold text-[#111827] mb-3 tracking-tight">Bounty Case Studies</h1>
        <p className="text-[#6b7280] text-lg max-w-xl mx-auto leading-relaxed">
          Verified outcomes delivered by vetted freelancers. Every result is scoped, tracked, and paid on delivery.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>

      <p className="text-center text-xs text-[#9ca3af] mt-12">
        All metrics independently verified at time of delivery.
      </p>
    </div>
  )
}
