'use client'

import { cn } from "@/lib/utils"
import React from "react"

const Stat = React.forwardRef(({Icon, Numb, Title, isDark, noNumb, containerClass}, ref)=>{
    return (
        <div ref={ref} className={cn(["flex max-w-40 items-center gap-2", containerClass])}>
            <div className="w-1/3">{Icon}</div>
            <div className="w-2/3">
                <p className={cn(["text-3xl text-[#b58863]", noNumb && 'text-zinc-700'])}>{Numb}</p>
                <p className={cn(["text-black text-sm", isDark && 'text-zinc-300'])}>{Title}</p>
            </div>
        </div>
    )
})

Stat.displayName = "Stat"
export default Stat