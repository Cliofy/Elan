import React from 'react'
import { Button } from '../../components/button'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="h-screen w-full bg-cover bg-[url('/banner.png')]">
            <div className="h-screen w-full #bg-slate-900/30 backdrop-brightness-50 absolute top-0 right-0 left-0" />
            <div className="h-screen w-full flex flex-1 items-center justify-center brightness-100">
                <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-4 text-center">
                    <h1 className="text-white text-3xl sm:text-4xl font-bold font-sans tracking-tighter">Your Online Photoshoot Studio.</h1>
                    <p className="text-white/95 text-sm sm:text-base font-semibold tracking-tighter">Your ideas. Our Execution.</p>
                    <p className="text-white/95 text-sm sm:text-base font-semibold tracking-tighter">Premiering as the world's best AI studio.</p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-2  justify-center items-center w-full">
                        <Button size={"md"} variant={"secondary"}>
                            <Link href="/">
                                Discover more
                            </Link>
                        </Button>
                        <Button size={"md"}>
                            <Link href="/">
                                Book a call
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
