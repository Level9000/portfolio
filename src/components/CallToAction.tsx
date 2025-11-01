import Image from 'next/image'
import { Container } from '@/components/Container'

const APP_STORE_URL = 'https://apps.apple.com/us/app/pocket-panel/id6745844239'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.smallmachinesai.pocket_panel'
const MARKETING_URL = 'https://www.pocketpanel.ai'

export function CallToAction() {
    return (
        <section id="pocket-panel-launch" className="relative overflow-hidden bg-white text-[#ECC969]">
            {/* Mobile blob (shown < md) */}
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

            {/* Desktop blob (≥ md) – Option B: keep aspect, full width */}
            <div className="pointer-events-none select-none absolute inset-x-0 top-0 z-0 hidden md:block">
                <Image
                    src="/images/blobs/blob.svg"
                    alt=""
                    aria-hidden="true"
                    width={2400}   // intrinsic width
                    height={600}   // keep the SVG’s correct aspect
                    priority
                    className="w-[100vw] h-auto mx-auto -translate-y-px"
                />
            </div>

            {/* Content padding to clear blobs:
          - Mobile: match mobile blob heights
          - Desktop: fixed, tunable paddings (no vh) */}
            <div className="pt-24 sm:pt-28 md:pt-20 lg:pt-72 xl:pt-72 pb-20 sm:pb-28">
                <Container className="relative z-10">
                    <div className="mx-auto max-w-6xl grid items-start gap-6 md:gap-16 md:grid-cols-2">
                        {/* Left: preview image */}
                        <div>
                            <div className="mt-6 mx-auto w-full max-w-md">
                                <Image
                                    src="/images/pocket-panel-phone.png"
                                    alt="Pocket Panel app preview"
                                    width={900}
                                    height={1800}
                                    className="rounded-[1.25rem] shadow-2xl ring-1 ring-white/10"
                                    priority
                                />
                                <p className="mt-3 text-center text-sm text-gray-400">
                                    Available now on iOS and Android.
                                </p>
                            </div>
                        </div>

                        {/* Right: title + paragraph + buttons (desktop-only top padding added) */}
                        <div className="max-w-xl sm:text-left pt-0 md:pt-32 lg:pt-48 xl:pt-48">
                            <h2 className="text-3xl font-medium tracking-tight text-black sm:text-4xl">
                                Pocket Panel is live!
                            </h2>
                            <p className="mt-4 text-lg text-gray-800">
                                I just launched <span className="font-semibold">Pocket Panel</span>. An AI-powered
                                personal board of advisors to help your business make better decisions and move faster.
                                Download it today on the Apple App Store and Google Play, or learn more on the website.
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <a
                                    href={APP_STORE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex"
                                    aria-label="Download on the App Store"
                                >
                                    <Image
                                        src="/images/badges/app-store-badge.png"
                                        alt="Download on the App Store"
                                        width={150}
                                        height={50}
                                        priority
                                    />
                                </a>

                                <a
                                    href={PLAY_STORE_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex"
                                    aria-label="Get it on Google Play"
                                >
                                    <Image
                                        src="/images/badges/google-play-badge.png"
                                        alt="Get it on Google Play"
                                        width={170}
                                        height={50}
                                    />
                                </a>

                                <a
                                    href={MARKETING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-2xl border border-[#ECC969]/30 bg-[#ECC969] px-5 py-3 text-pocket-950 font-semibold shadow-lg transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#ECC969]/60"
                                >
                                    learn more
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
