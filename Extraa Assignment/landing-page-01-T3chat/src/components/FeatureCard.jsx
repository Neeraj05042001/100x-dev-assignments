import { ZapIcon } from 'lucide-react'
import React from 'react'

const FeatureCard = ({title, description}) => {
  return (
    <div className="relative h-fit bg-[#160F14] border border-[#1F1820] rounded-2xl mx-14 pt-16 pb-6">
        <div className=" flex items-center justify-center ">
          <div className="h-28 w-28 relative flex items-center ">
            <div
              className="absolute inset-0 "
              style={{
                backgroundImage: `
            linear-gradient(to right, rgba(163, 0, 76, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(163, 0, 76, 0.3) 1px, transparent 1px)
          `,
                backgroundSize: "28px 28px",
                maskImage:
                  "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 20%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 100%)",
              }}
            >
              <div className="bg-[#A3004C] w-fit p-3 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
                <ZapIcon className="text-white/80" />
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-[20px] text-[#d4c7e1] my-4 text-center font-semibold">
         {title}
        </h3>

        <p className="text-xs text-[#c2b6cfcc] text-center max-w-[220px] mx-auto ">
          {description}
        </p>
      </div>
  )
}

export default FeatureCard