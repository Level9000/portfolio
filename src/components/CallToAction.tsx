import Image from 'next/image'
import {Container} from '@/components/Container'

const APP_STORE_URL = 'https://apps.apple.com/us/app/pocket-panel/id6745844239'
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.smallmachinesai.pocket_panel'
const MARKETING_URL = 'https://www.pocketpanel.ai'

export function CallToAction() {
    return (
        <section
            id="pocket-panel-launch"
            className="relative overflow-hidden bg-white text-[#ECC969]"
        >
            {/* Top blob transition */}
            <div className="pointer-events-none select-none absolute inset-x-0 top-0 z-0">
                <Image
                    src="/images/blobs/blob.svg"
                    alt=""
                    aria-hidden="true"
                    width={2400}
                    height={200}
                    priority
                    className="w-full h-auto -translate-y-px"
                />
            </div>

            <div className="py-20 sm:py-28">
                <Container className="relative z-10">
                    <div className="mx-auto max-w-6xl grid items-start gap-12 sm:gap-16 md:grid-cols-2 pt-16">
                        <div>
                            {/* Preview image */}
                            <div className="mt-8 mx-auto w-full max-w-md">
                                <div>
                                    <Image
                                        src="/images/pocket-panel-phone.png"
                                        alt="Pocket Panel app preview"
                                        width={900}
                                        height={1800}
                                        className="rounded-[1.25rem] shadow-2xl ring-1 ring-white/10"
                                        priority
                                    />
                                </div>
                                <p className="mt-3 text-center text-sm text-gray-400">
                                    Available now on iOS and Android.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT: Paragraph → CTA button */}
                        <div className="max-w-xl sm:text-left pt-24 md:pt-32 lg:pt-60">
                            <h2 className="text-3xl font-medium tracking-tight text-black sm:text-4xl">
                                Pocket Panel is live!
                            </h2>
                            <p className="text-lg text-gray-800">
                                I just launched <span className="font-semibold">Pocket Panel</span>. An AI-powered
                                personal board of advisors to help your business make better decisions and move faster.
                                Download it today on the Apple App Store and Google Play, or learn more on the website.
                            </p>

                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <a
                                    href={MARKETING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-2xl border border-[#ECC969]/30 bg-[#ECC969] px-5 py-3 text-pocket-950 font-semibold shadow-lg transition hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#ECC969]/60"
                                >
                                    learn more
                                </a>
                                {/* Store badges */}

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
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
