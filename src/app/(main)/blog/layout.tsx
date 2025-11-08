// src/app/(main)/blog/layout.tsx
import type { ReactNode } from 'react'
import ProfileCard from '@/components/ProfileCard'

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
        <main className="bg-[#121212] text-white">
            {/* Wide container just for blog pages */}
            <div className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-6 lg:px-10">
                <div className="py-12 lg:py-20 grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] items-start">
                    {/* Left column: Profile (sticky on desktop) */}
                    <aside className="mx-auto lg:mx-0 lg:sticky lg:top-24 self-start">
                        <ProfileCard
                            name="Erik Warren"
                            title="Product & Engineering Leader"
                            photoSrc="/images/profile_photo.png"
                            resumeHref="/cv/erik_warren_cv.pdf"
                            linkedinHref="https://www.linkedin.com/in/erik-warren-4b194846/"
                            githubHref="https://github.com/Level9000"
                            emailHref="mailto:erik@smallmachines.ai"
                        />
                    </aside>

                    {/* Right column: page content (index or article) */}
                    <section className="min-w-0">
                        {children}
                    </section>
                </div>
            </div>
        </main>
    )
}
