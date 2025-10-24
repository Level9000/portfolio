// components/Hero.tsx
'use client'

import { useEffect, useState } from 'react'
import ProfileCard from '@/components/ProfileCard'
import { Container } from '@/components/Container'

export function Hero() {
    const [reducedMotion, setReducedMotion] = useState(false)
    useEffect(() => {
        const q = window.matchMedia('(prefers-reduced-motion: reduce)')
        const apply = () => setReducedMotion(q.matches)
        apply()
        q.addEventListener?.('change', apply)
        return () => q.removeEventListener?.('change', apply)
    }, [])

    return (
        <div className="relative overflow-hidden pt-12 sm:pt-20 pb-0 bg-[#0D0D0D] text-white">
            <Container>
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-6 lg:max-w-none lg:pt-6">
                        <h1 className="text-5xl font-medium text-balance tracking-tight text-white">
                            Hi, I&apos;m Erik Warren
                        </h1>
                        <p className="mt-6 text-xl font-medium text-[#A6B1C2]">
                            A Founder, Tech Leader, and Creative Technologist
                        </p>
                        <p className="mt-6 text-lg text-[#C0C6D1]">
                            With over 13 years of experience in software and product design, I specialize in bringing ideas to life—from concept to launch. Whether you need a mobile app, website, backend system, API integration, or AI-powered content creation, I can design and build the right solution for you.
                        </p>
                        <p className="mt-6 text-lg text-[#C0C6D1]">
                            I’ve founded companies, shipped products at scale, and love collaborating with teams who want to move fast and make something remarkable. Based in Detroit, MI and open to freelance work and creative partnerships—let’s build something great together.
                        </p>
                    </div>

                    <div className="relative z-10 mt-8 lg:mt-[-20px] lg:col-span-6 lg:row-span-2 flex items-start justify-center">
                        <ProfileCard
                            className="z-10"
                            name="Erik Warren"
                            title="Founder • Tech Leader • Creative Technologist"
                            photoSrc="/images/profile_photo.png"
                            resumeHref="/cv/erik_warren_cv.pdf"
                            linkedinHref="https://www.linkedin.com/in/erik-warren-4b194846/"
                            githubHref="https://github.com/Level9000"
                            emailHref="mailto:erik@smallmachines.ai"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
