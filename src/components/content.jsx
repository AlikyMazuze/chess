'use client'

import React, { useState } from 'react'
import Header from './header'
import { cn } from '@/lib/utils'

function Content({children}) {
    const [isMenuShowing, setIsMenuShowing] = useState(false)

  return (
    <div className='w-full min-h-screen '>
        <Header isMenuShowing={isMenuShowing} setIsMenuShowing={setIsMenuShowing}/>
      <main className={cn('bg-white chess-pattern w-full absolute top-2 rounded-t-[5rem] min-h-screen transition-all pt-40', isMenuShowing && 'top-[102vh]')}>
        {children}
      </main>
    </div>  
)
}

export default Content