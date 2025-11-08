'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { Container } from '@/components/Container'

type Project = {
    slug: string
    title: string
    subtitle?: string
    role?: string
    period?: string
    tech?: string[]
    thumbnail?: string
}

// You can move this to src/content/projects.ts later if you want
const projects: Project[] = [
    {
        slug: 'pocket-panel',
        title: 'Pocket Panel',
        subtitle: 'An AI-powered “personal board of directors” for builders.',
        role: 'Founder, Product & Engineering',
        period: '2024 – Present',
        tech: ['Next.js', 'TypeScript', 'Postgres', 'AI'],
        thumbnail: '/images/projects/pocket-panel-thumb.jpg',
    },
    {
        slug: 'small-machines-portfolio',
        title: 'Small Machines Client Work',
        subtitle: 'Agile product and design engagements for early-stage teams.',
        role: 'Studio Lead',
        period: 'Ongoing',
        tech: ['Product Discovery', 'UX', 'Branding'],
        thumbnail: '/images/projects/small-machines-thumb.jpg',
    },
    {
        slug: 'design-sprint-playbook',
        title: 'Design Sprint Playbook',
        subtitle: 'A repeatable toolkit for rapid product discovery.',
        role: 'Facilitator & Author',
        period: '2023',
        tech: ['Workshops', 'Notion', 'Figma'],
        thumbnail: '/images/projects/sprint-playbook-thumb.jpg',
    },
]

export function ProjectsShowcase() {
    const trackRef = useRef<HTMLDivElement | null>(null)
    const [index, setIndex] = useState(0)

    // Update index on scroll for dots
    useEffect(() => {
        const el = trackRef.current
        if (!el) return
        const onScroll = () => {
            const i = Math.round(el.scrollLeft / el.clientWidth)
            setIndex(i)
        }
        el.addEventListener('scroll', onScroll, { passive: true })
        return () => el.removeEventListener('scroll', onScroll)
    }, [])

    const go = (dir: -1 | 1) => {
        const el = trackRef.current
        if (!el) return
        const next = Math.min(Math.max(index + dir, 0), projects.length - 1)
        el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' })
        setIndex(next)
    }

    if (!projects.length) return null

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="relative overflow-hidden bg-white text-black pt-0 pb-0"
        >
            {/* Mobile blob (< md) */}
            <div className="pointer-events-none select-none absolute inset-x-0 top-0 z-0 h-24 sm:h-28 md:hidden">
                <Image
                    src="/images/blobs/blob.svg"
                    alt=""
                    aria-hidden="true"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-top"
                />
            </div>

            {/* Desktop blob (≥ md) */}
            <div className="pointer-events-none select-none absolute inset-x-0 top-0 z-0 hidden md:block">
                <Image
                    src="/images/blobs/blob.svg"
                    alt=""
                    aria-hidden="true"
                    width={2400}
                    height={600}
                    priority
                    className="w-[100vw] h-auto mx-auto -translate-y-px"
                />
            </div>

            <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-72 pb-16 sm:pb-24">
                <Container>
                    {/* Header */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-xl">
                            <h2
                                id="projects-heading"
                                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black"
                            >
                                Projects I&apos;ve worked on
                            </h2>
                            <p className="mt-4 text-lg text-gray-800">
                                A few examples of products, playbooks, and client work I&apos;ve
                                been fortunate to help ship. Swipe through and click into any
                                project to learn more.
                            </p>
                        </div>

                        <div className="hidden sm:flex gap-2">
                            <button
                                type="button"
                                onClick={() => go(-1)}
                                disabled={index === 0}
                                className="rounded-full border border-zinc-300 px-3 py-2 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                            >
                                Prev
                            </button>
                            <button
                                type="button"
                                onClick={() => go(1)}
                                disabled={index === projects.length - 1}
                                className="rounded-full border border-zinc-300 px-3 py-2 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Swipeable track */}
                    <div className="mt-8">
                        <div
                            ref={trackRef}
                            className="
                relative flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth
                [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                -mx-4 sm:-mx-6 lg:-mx-10
              "
                        >
                            {projects.map((project) => (
                                <div
                                    key={project.slug}
                                    className="w-full flex-none snap-center px-4 sm:px-6 lg:px-10"
                                >
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </div>

                        {/* Dots + mobile controls */}
                        <div className="mt-4 flex items-center justify-between">
                            <div className="flex gap-2">
                                {projects.map((_, i) => (
                                    <span
                                        key={i}
                                        className={clsx(
                                            'h-1.5 w-4 rounded-full transition-colors',
                                            i === index ? 'bg-zinc-900' : 'bg-zinc-300'
                                        )}
                                    />
                                ))}
                            </div>

                            <div className="flex gap-2 sm:hidden">
                                <button
                                    type="button"
                                    onClick={() => go(-1)}
                                    disabled={index === 0}
                                    className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                                >
                                    Prev
                                </button>
                                <button
                                    type="button"
                                    onClick={() => go(1)}
                                    disabled={index === projects.length - 1}
                                    className="rounded-full border border-zinc-300 px-3 py-1.5 text-xs font-semibold text-zinc-800 hover:bg-zinc-100 disabled:opacity-40 disabled:cursor-not-allowed transition"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}

function ProjectCard({ project }: { project: Project }) {
    const href = `/projects/${project.slug}`

    return (
        <Link href={href} className="block group">
            <article className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition group-hover:-translate-y-1 group-hover:shadow-[0_22px_50px_rgba(15,23,42,0.18)] group-hover:border-[#ECC969]/60">
                {/* Media */}
                {project.thumbnail && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/5">
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            sizes="(min-width: 1024px) 900px, 100vw"
                            className="object-cover transition group-hover:scale-[1.03]"
                        />
                    </div>
                )}

                {/* Text */}
                <div className="px-6 py-5 sm:px-7 sm:py-6">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="text-lg sm:text-xl font-medium text-black">
                                {project.title}
                            </h3>
                            {project.subtitle && (
                                <p className="mt-1 text-sm sm:text-base text-gray-700">
                                    {project.subtitle}
                                </p>
                            )}
                        </div>

                        <span className="mt-1 inline-flex items-center text-xs font-semibold text-[#C29635]">
              View project
              <span aria-hidden="true" className="ml-1">
                ↗
              </span>
            </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                        {project.role && <span>{project.role}</span>}
                        {project.period && (
                            <>
                                <span>•</span>
                                <span>{project.period}</span>
                            </>
                        )}
                    </div>

                    {project.tech && project.tech.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-full border border-zinc-300 px-2 py-0.5 text-[11px] uppercase tracking-wide text-gray-700"
                                >
                  {t}
                </span>
                            ))}
                        </div>
                    )}
                </div>
            </article>
        </Link>
    )
}
