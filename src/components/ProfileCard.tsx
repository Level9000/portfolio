'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import clsx from 'clsx'

type ProfileCardProps = {
    name: string
    title?: string
    photoSrc: string
    resumeHref: string
    linkedinHref: string
    githubHref: string
    emailHref: string // e.g. "mailto:erik@…"
    className?: string
}

export default function ProfileCard({
                                        name,
                                        title,
                                        photoSrc,
                                        resumeHref,
                                        linkedinHref,
                                        githubHref,
                                        emailHref,
                                        className,
                                    }: ProfileCardProps) {
    return (
        <div
            className={clsx(
                // card frame
                'relative rounded-3xl bg-white/95 shadow-xl ring-1 ring-black/5',
                'p-4 sm:p-5 w-full max-w-[360px]',
                'flex flex-col items-center',
                className
            )}
        >
            {/* Photo */}
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                    src={photoSrc}
                    alt={`${name} portrait`}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 80vw, 360px"
                />
            </div>

            {/* Name / Title */}
            <div className="mt-4 text-center">
                <h2 className="text-2xl font-extrabold tracking-tight text-pocket-900">{name}</h2>
                {title ? (
                    <p className="mt-1 text-sm font-medium text-pocket-700">{title}</p>
                ) : null}
            </div>

            {/* Download CV */}
            <div className="mt-3">
                <Button href={resumeHref} download className="gap-2">
                    {/* download icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M12 3v10m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
                              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Download CV
                </Button>
            </div>

            {/* Socials */}
            <div className="mt-4 mb-1 flex items-center gap-5 text-pocket-900/80">
                <IconLink href={linkedinHref} label="LinkedIn">
                    {/* LinkedIn */}
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h4.99V24H0V8.98zM8.98 8.98h4.79v2.05h.07c.67-1.27 2.32-2.6 4.78-2.6 5.11 0 6.05 3.36 6.05 7.73V24h-4.99v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.65 1.79-2.65 3.65V24H8.98V8.98z"/>
                    </svg>
                </IconLink>
                <IconLink href={githubHref} label="GitHub">
                    {/* GitHub */}
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.8-.25.8-.56v-2.1c-3.26.71-3.95-1.57-3.95-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.78 0-1.28.46-2.33 1.21-3.15-.12-.3-.53-1.51.11-3.14 0 0 .99-.32 3.25 1.2a11.3 11.3 0 0 1 5.92 0c2.25-1.52 3.24-1.2 3.24-1.2.65 1.63.24 2.84.12 3.14.76.82 1.21 1.87 1.21 3.15 0 4.49-2.75 5.47-5.37 5.77.42.36.79 1.07.79 2.17v3.22c0 .31.21.67.81.56A11.5 11.5 0 0 0 12 .5z"/>
                    </svg>
                </IconLink>
                <IconLink href={emailHref} label="Email">
                    {/* Mail */}
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
                        <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.4L22 6.4V6a2 2 0 0 0-2-2Zm2 5.2-9.4 6a1 1 0 0 1-1.2 0L2 9.2V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.2Z"/>
                    </svg>
                </IconLink>
            </div>
        </div>
    )
}

function IconLink({
                      href,
                      label,
                      children,
                  }: {
    href: string
    label: string
    children: React.ReactNode
}) {
    return (
        <Link
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className="rounded-xl p-2 hover:bg-pocket-100 transition"
        >
            {children}
        </Link>
    )
}
