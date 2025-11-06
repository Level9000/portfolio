'use client'

import { useEffect, useRef, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { Container } from '@/components/Container'

/* ---------------- Types ---------------- */
type MediaItem = {
    type: 'image' | 'video'
    src: string
    alt?: string
    poster?: string
}

type Capability = {
    title: string
    blurb?: string
    longBlurb?: string
    media?: MediaItem[]
}

/* ---------------- Data ---------------- */
const engineering: Capability[] = [
    {
        title: 'Mobile App Engineering',
        blurb: 'iOS & Android apps built with production-grade architectures.',
        longBlurb:
            'Cross-platform builds with robust state management, secure auth, clean data layers, CI/CD, app store submission, crash reporting, analytics, and growth hooks.',
        media: [
            { type: 'image', src: '/images/capabilities/mobile_1.png', alt: 'Mobile UI screens' },
            { type: 'image', src: '/images/capabilities/mobile_2.png', alt: 'Onboarding flow' },
            { type: 'video', src: '/videos/capabilities/mobile_demo.mp4', poster: '/images/capabilities/mobile_poster.jpg' },
        ],
    },
    {
        title: 'Web App Engineering',
        blurb: 'Responsive, performant web apps with modern frameworks.',
        longBlurb:
            'Next.js (SSR/ISR), edge functions, streaming UIs, and accessible, SEO-friendly builds. Auth, RBAC, and multi-tenant data models included.',
        media: [
            { type: 'image', src: '/images/capabilities/web_1.png', alt: 'Marketing site' },
            { type: 'image', src: '/images/capabilities/web_2.png', alt: 'Dashboard UI' },
        ],
    },
    {
        title: 'API Integrations',
        blurb: 'Supabase, Stripe, OAuth, third-party APIs, and custom services.',
        longBlurb:
            'Payments & subscriptions, webhooks, data sync, and resilient API layers with retries, backoff, and observability.',
        media: [{ type: 'image', src: '/images/capabilities/api_1.png', alt: 'API flow diagram' }],
    },
    {
        title: 'Analytics Solutions',
        blurb: 'Tracking, dashboards, and insight pipelines for growth.',
        longBlurb:
            'Event schemas, funnels, cohorts, LTV/CAC, and alerts—from instrumentation to decision-ready reporting.',
        media: [
            { type: 'image', src: '/images/capabilities/analytics_1.png', alt: 'Analytics dashboard' },
            { type: 'image', src: '/images/capabilities/analytics_2.png', alt: 'Funnel chart' },
        ],
    },
]

const design: Capability[] = [
    {
        title: 'User Experience (UX) Design',
        blurb: 'Flows, IA, research, and usability improvements.',
        longBlurb:
            'Clarify user goals, reduce friction, and align journeys to measurable outcomes. Prototypes, research plans, and usability studies.',
        media: [
            { type: 'image', src: '/images/capabilities/ux_1.png', alt: 'User flow' },
            { type: 'image', src: '/images/capabilities/ux_2.png', alt: 'Wireframes' },
        ],
    },
    {
        title: 'Product Design',
        blurb: 'From problem framing to shippable product UI and specs.',
        longBlurb:
            'Turn ambiguous ideas into focused products: requirements, system maps, design systems, and dev-ready specs.',
        media: [{ type: 'image', src: '/images/capabilities/product_1.png', alt: 'Product system' }],
    },
    {
        title: 'Service Design',
        blurb: 'End-to-end journeys across touchpoints and teams.',
        longBlurb:
            'Backstage/frontstage orchestration and operational guardrails so services are consistently excellent.',
        media: [{ type: 'image', src: '/images/capabilities/service_1.png', alt: 'Service blueprint' }],
    },
    {
        title: 'AI Digital Content Creation',
        blurb: 'On-brand imagery, video, and assets with AI workflows.',
        longBlurb:
            'From concept boards to finished assets, combining tooling and taste to deliver fast, high-quality content.',
        media: [
            { type: 'image', src: '/images/capabilities/ai_1.png', alt: 'AI concept art' },
            { type: 'video', src: '/videos/capabilities/ai_reel.mp4', poster: '/images/capabilities/ai_poster.jpg' },
        ],
    },
    {
        title: 'Branding Strategy',
        blurb: 'Voice, visuals, and systems that scale.',
        longBlurb:
            'Naming, tone, logo systems, and rules that keep teams aligned as you grow.',
        media: [{ type: 'image', src: '/images/capabilities/branding_1.png', alt: 'Brand system' }],
    },
    {
        title: 'Storytelling',
        blurb: 'Crisp narratives that make ideas stick and inspire action.',
        longBlurb:
            'Narratives for pitches, landing pages, and campaigns that translate value into momentum.',
        media: [{ type: 'image', src: '/images/capabilities/story_1.png', alt: 'Narrative outline' }],
    },
    {
        title: 'Marketing Campaigns',
        blurb: 'GTM planning, assets, landing pages, and ads.',
        longBlurb:
            'Acquisition loops, creative testing, and channel mix with clear KPIs and a learning cadence.',
        media: [{ type: 'image', src: '/images/capabilities/marketing_1.png', alt: 'Campaign board' }],
    },
]

/* ---------------- Carousel ---------------- */
function MediaCarousel({ items = [] as MediaItem[] }) {
    const ref = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const onScroll = () => {
            const i = Math.round(el.scrollLeft / el.clientWidth)
            setIndex(i)
        }
        el.addEventListener('scroll', onScroll, { passive: true })
        return () => el.removeEventListener('scroll', onScroll)
    }, [])

    const go = (dir: -1 | 1) => {
        const el = ref.current
        if (!el) return
        const next = Math.min(Math.max(index + dir, 0), items.length - 1)
        el.scrollTo({ left: next * el.clientWidth, behavior: 'smooth' })
        setIndex(next)
    }

    if (!items.length) return null

    return (
        <div className="mt-4">
            <div
                ref={ref}
                className="
          relative flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          rounded-xl ring-1 ring-white/10
        "
            >
                {items.map((m, i) => (
                    <div key={i} className="relative w-full flex-none snap-center">
                        <div className="relative aspect-[16/9] bg-pocket-900/50">
                            {m.type === 'image' ? (
                                <Image
                                    src={m.src}
                                    alt={m.alt ?? 'media'}
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                />
                            ) : (
                                <video
                                    controls
                                    playsInline
                                    poster={m.poster}
                                    className="h-full w-full object-contain bg-black/40"
                                >
                                    <source src={m.src} />
                                </video>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => go(-1)}
                        className="rounded-md px-3 py-1.5 text-sm text-pocket-950 bg-[#ECC969] hover:brightness-95 disabled:opacity-40"
                        disabled={index === 0}
                    >
                        Prev
                    </button>
                    <button
                        type="button"
                        onClick={() => go(1)}
                        className="rounded-md px-3 py-1.5 text-sm text-pocket-950 bg-[#ECC969] hover:brightness-95 disabled:opacity-40"
                        disabled={index === items.length - 1}
                    >
                        Next
                    </button>
                </div>
                <div className="flex gap-2">
                    {items.map((_, i) => (
                        <span
                            key={i}
                            className={clsx(
                                'h-1.5 w-4 rounded-full transition-colors',
                                i === index ? 'bg-gray-200' : 'bg-gray-600/70'
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

/* ---------------- Tile ---------------- */
type CapabilityCardProps = {
    cap: Capability
    variant: 'engineering' | 'design'
}

function CapabilityCard({ cap, variant }: CapabilityCardProps) {
    const [open, setOpen] = useState(false)
    const panelId = `cap-panel-${cap.title.replace(/\s+/g, '-').toLowerCase()}`

    const baseBg =
        variant === 'engineering'
            ? 'bg-slate-800/80 hover:bg-slate-700/80'
            : 'bg-slate-700/80 hover:bg-slate-600/80'

    return (
        <div
            className={clsx(
                'rounded-2xl border border-[#ECC969]/15 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition',
                'hover:border-[#ECC969]/30',
                baseBg
            )}
        >
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="w-full text-left p-5 sm:p-6"
                aria-expanded={open}
                aria-controls={panelId}
            >
                <h3 className="text-base sm:text-lg font-semibold text-white">{cap.title}</h3>
                {cap.blurb ? <p className="mt-2 text-sm sm:text-base text-gray-300">{cap.blurb}</p> : null}
                <div className="mt-3 text-sm text-[#ECC969]">
                    {open ? 'Click to collapse' : 'Click to read more'}
                </div>
            </button>

            {/* Expanded content — zero space when closed */}
            <div
                id={panelId}
                className={clsx(
                    'grid transition-[grid-template-rows] duration-300 ease-in-out',
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                )}
            >
                <div className={clsx('overflow-hidden', open ? 'px-5 sm:px-6 pb-5 sm:pb-6' : 'p-0')}>
                    {open && cap.longBlurb ? (
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{cap.longBlurb}</p>
                    ) : null}
                    {open && cap.media?.length ? <MediaCarousel items={cap.media} /> : null}
                </div>
            </div>
        </div>
    )
}

/* ---------------- Component ---------------- */
export function PrimaryFeatures() {
    return (
        <section
            id="features"
            aria-label="What I Offer"
            className="relative stitch-bottom stitch-top bg-black pt-0 pb-0 text-[#ECC969]"
        >
            {/* Mobile blob (< md) */}
            <div className="pointer-events-none select-none absolute inset-x-0 top-0 z-0 h-24 sm:h-28 md:hidden">
                <Image
                    src="/images/blobs/blob-2.svg"
                    alt=""
                    aria-hidden="true"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-top"
                />
            </div>

            {/* Desktop blob (≥ md) — keep aspect, full width */}
            <div className="pointer-events-none select-none absolute inset-x-0 top-0 z-0 hidden md:block">
                <Image
                    src="/images/blobs/blob-2.svg"
                    alt=""
                    aria-hidden="true"
                    width={2400}
                    height={300}
                    priority
                    className="w-[100vw] h-auto mx-auto -translate-y-px"
                />
            </div>

            {/* Content padding to clear blobs (tune these as needed) */}
            <div className="pt-24 sm:pt-28 md:pt-36 lg:pt-72 xl:pt-72 pb-20 sm:pb-32">
                <Container>
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">What I Offer:</h2>
                        <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-300">
                            I run{' '}
                            <span className="font-semibold text-[#ECC969]">
                Small Machines AI
              </span>
                            , a creative design studio that
                            takes an agile approach to design and development. We believe in a build–measure–learn philosophy and
                            above all, we want to do great work with great people who are trying to make the world, and peoples’ lives,
                            better.
                        </p>
                    </div>
                </Container>

                <Container className="mt-8">
                    <TabGroup>

                        <TabList className="mx-auto mt-4 flex w-full max-w-xl items-center justify-center gap-2 rounded-full bg-black/80 p-1.5">
                            <Tab className="flex-1 rounded-full px-4 py-2.5 text-center text-sm sm:text-base font-semibold tracking-wide uppercase bg-slate-900/60 text-gray-100 hover:bg-slate-800/80 data-[selected]:bg-[#ECC969] data-[selected]:text-black data-focus:outline-hidden transition">
                                Engineering
                            </Tab>
                            <Tab className="flex-1 rounded-full px-4 py-2.5 text-center text-sm sm:text-base font-semibold tracking-wide uppercase bg-slate-900/60 text-gray-100 hover:bg-slate-800/80 data-[selected]:bg-[#ECC969] data-[selected]:text-black data-focus:outline-hidden transition">
                                Design
                            </Tab>
                        </TabList>

                        <TabPanels>
                            {/* Engineering tiles */}
                            <TabPanel>
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    {engineering.map((cap) => (
                                        <CapabilityCard key={cap.title} cap={cap} variant="engineering" />
                                    ))}
                                </div>
                            </TabPanel>

                            {/* Design tiles */}
                            <TabPanel>
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                    {design.map((cap) => (
                                        <CapabilityCard key={cap.title} cap={cap} variant="design" />
                                    ))}
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </TabGroup>
                </Container>
            </div>
        </section>
    )
}
