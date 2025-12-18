import React from 'react'

const WorldCyber = ({ subtitle }) => {
  return (
    <section className="bg-bg pt-20">
      <div className="container mx-auto px-8">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-accent"></div>
          <h5 className="text-primary text-[11px] font-black uppercase tracking-[0.5em]">
            {subtitle}
          </h5>
        </div>
      </div>
    </section>
  )
}

export default WorldCyber
