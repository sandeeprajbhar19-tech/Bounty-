import React from 'react'

const SeoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
)

const PerformanceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const ConversionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

const icons = { seo: SeoIcon, performance: PerformanceIcon, conversion: ConversionIcon }

const styles = {
  green: { badge: 'bg-[#e6f7ef] text-[#1a9e5c]', dot: 'bg-[#1a9e5c]', value: 'text-[#1a9e5c]' },
  teal:  { badge: 'bg-[#e0f4fb] text-[#0e86b0]', dot: 'bg-[#0e86b0]', value: 'text-[#0e86b0]' },
}

export default function CaseStudyCard({ study }) {
  const Icon = icons[study.iconType]
  const s = styles[study.accentColor]

  return (
    <div className="card-hover bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col overflow-hidden">
      {/* Top */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className={`text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full ${s.badge}`}>
          {study.category}
        </span>
        <span className={`inline-flex items-center justify-center w-9 h-9 rounded-xl ${s.badge}`}>
          <Icon />
        </span>
      </div>

      {/* Title + desc */}
      <div className="px-5 pb-4">
        <h2 className="text-[#111827] text-lg font-bold leading-snug mb-1.5">{study.title}</h2>
        <p className="text-[#6b7280] text-sm leading-relaxed">{study.description}</p>
      </div>

      {/* Challenge */}
      <div className="mx-5 mb-3 bg-[#f3f4f6] rounded-xl p-4">
        <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-1.5">Challenge</p>
        <p className="text-sm text-[#374151] leading-relaxed">{study.challenge}</p>
      </div>

      {/* Solution */}
      <div className="mx-5 mb-4 bg-[#f3f4f6] rounded-xl p-4">
        <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">Solution</p>
        <ul className="space-y-1.5">
          {study.solution.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#374151] leading-relaxed">
              <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#9ca3af]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Metrics */}
      <div className="mx-5 mb-4 grid grid-cols-3 gap-2">
        {study.metrics.map((m, i) => (
          <div key={i} className="bg-[#f3f4f6] rounded-xl px-3 py-2.5 flex flex-col items-center text-center">
            <span className="text-[9px] font-semibold text-[#6b7280] uppercase tracking-wider leading-tight mb-1">{m.label}</span>
            <span className={`text-sm font-bold leading-tight ${i === 0 ? s.value : 'text-[#111827]'}`}>
              {m.value}{m.suffix && <span className="ml-0.5">{m.suffix}</span>}
            </span>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="mx-5 mb-5">
        <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Timeline</p>
        <div className="timeline-line space-y-3 pl-5">
          {study.timeline.map((item, i) => (
            <div key={i} className="relative flex items-start gap-3">
              <span className={`absolute -left-5 mt-1 w-3.5 h-3.5 rounded-full border-2 border-white z-10 ${s.dot}`} style={{ boxShadow: '0 0 0 2px #e5e7eb' }} />
              <span className="text-sm text-[#111827] font-medium">{item.step}</span>
              <span className="text-xs text-[#9ca3af] font-medium whitespace-nowrap ml-auto">{item.days}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1" />

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#e5e7eb] px-5 py-3.5">
        <span className="text-sm text-[#6b7280]">Reward · <strong className="text-[#111827]">{study.reward}</strong></span>
        <span className="text-sm font-semibold text-[#0e86b0]">Delivered in {study.deliveredIn}</span>
      </div>
    </div>
  )
}
