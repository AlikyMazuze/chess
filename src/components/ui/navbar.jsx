'use client'

import Image from 'next/image'
import Link from 'next/link'
import {Equal} from 'lucide-react'
import { Button } from './button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

function Navbar({isMenuShowing, setIsMenuShowing}) {

    const url = usePathname()

    useEffect(()=>{
        setIsMenuShowing(false)
    }, [url])

  return (
    <nav className='w-full flex justify-between items-center absolute top-0 left-0 h-40 px-4 z-50'>
        <div className='flex items-center gap-2 w-fit'>
            <Link href="/">
                <Image src="/logo.png" width={500} height={500} alt='Logo' className='h-16 w-16'/>
            </Link>
            <h1
                className={cn('h-8 w-fit text-black font-bold hidden md:block', isMenuShowing && 'text-white')}
            >
                FEDERAÇÃO MOÇAMBICANA DE XADREZ
            </h1>
        </div>
        <div className='flex items-center gap-2'>
            <Link href="/contact" 
                className={ cn(
                    'p-1 px-2 text-sm font-semibold rounded-3xl  text-white bg-black dark:bg-white bg-blend-difference',
                    isMenuShowing && 'text-black  bg-white'
                    )}>Contacte-nos</Link>
            <Button className="bg-transparent hover:bg-transparent" onClick={()=> setIsMenuShowing(prev => !prev)}>    
                <Equal 
                    className={cn('h-8 w-8 text-black dark:text-white transition-all', isMenuShowing && 'dark:text-black text-white rotate-90')}/>
            </Button>
        </div>
    </nav>
  )
}

export default Navbar

