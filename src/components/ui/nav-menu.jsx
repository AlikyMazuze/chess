
import { cn } from "@/lib/utils"
import { Facebook, Instagram, Linkedin, Twitter, MapPin } from 'lucide-react'
import Link from 'next/link'
function NavMenu({className}) {
  return (
    <nav className={cn("sticky h-screen w-full bg-secondary pt-40", className)}>
        <div className="w-full h-full">
            <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-4 h-4/5 border-y-[1px] border-y-[#666] ">
                <div className="border-r-[0.5px] border-r-[#666] border-b-[1px] border-b-[#666] flex items-center px-6 hover:bg-white/5 ">
                    <Link className="h-full w-full text-4xl text-white flex items-center tracking-wide" href="/">HOME</Link>
                </div>
                <div className="border-b-[1px] border-b-[#666] flex items-center px-6 hover:bg-white/5">
                    <Link className="h-full w-full text-4xl text-white flex items-center tracking-wide" href="/aboutus">SOBRE NÓS</Link>
                </div>
                <div className="border-r-[1px] border-r-[#666] border-b-[#666] border-b-[1px] md:border-b-0  flex items-center px-6 hover:bg-white/5">
                    <Link className="h-full w-full text-4xl text-white flex items-center tracking-wide" href="projectos">PROJECTOS</Link>
                </div>
                <div className="flex items-center px-6 hover:bg-white/5 ">
                <Link className="h-full w-full text-4xl text-white flex items-center tracking-wide" href="/eventos">EVENTOS</Link>
                </div>
            </div>
            <div className="grid grid-cols-2 text-white h-1/5">
                <div className="flex h-full items-center pl-4">
                    <MapPin className="h-5 w-5 text-red-500/50 mr-2"/>
                    <p className="text-xs text-white/60">AV Emilia Daússe 530, Maputo, Moçambique</p>
                </div>
                <div className="flex h-full items-center pl-4 gap-5">
                        <Facebook className="h-8 w-8 text-white/80"/>
                        <Instagram className="h-8 w-8 text-white/80"/>
                        <Linkedin className="h-8 w-8 text-white/80"/>
                        <Twitter className="h-8 w-8 text-white/80"/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavMenu