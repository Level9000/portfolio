// src/components/LatestBlogTeaser.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { posts } from '@/content/posts'

export default function LatestBlogTeaser() {
    if (!posts.length) return null

    // Assumes posts[0] is the newest post
    const latest = posts[0]

    return (
        <section
            aria-labelledby="latest-blog-heading"
            className="relative overflow-hidden bg-black text-white pt-0 pb-0"
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

            {/* Desktop blob (≥ md) */}
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

            {/* Content padding to clear blob, matching ProjectsShowcase spacing */}
            <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 lg:pt-72 pb-16 sm:pb-24">
                <Container>
                    <div className="max-w-4xl lg:max-w-5xl space-y-6">
                        {/* Heading */}
                        <header className="space-y-3">
                            <h2
                                id="latest-blog-heading"
                                className="text-3xl sm:text-4xl font-medium tracking-tight text-white"
                            >
                                Check out my latest blog
                            </h2>
                            <p className="max-w-2xl text-sm sm:text-base text-zinc-200">
                                Below are my thoughts and opinions on professional topics that I&apos;ve
                                formed over the course of my career. If you&apos;d like to learn more, or
                                would like to reach out, feel free to leave a message with the contact
                                form below.
                            </p>
                        </header>

                        {/* Card */}
                        <article className="rounded-3xl bg-white/5 border border-white/10 px-6 py-5 sm:px-8 sm:py-6 shadow-[0_16px_40px_rgba(0,0,0,0.45)]">
                            <Link
                                href={`/blog/${latest.slug}`}
                                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white/80 rounded-3xl -m-4 p-4 sm:-m-6 sm:p-6"
                            >
                                <h3 className="text-lg sm:text-xl font-medium text-white">
                                    {latest.title}
                                </h3>
                                {latest.subtitle && (
                                    <p className="mt-2 text-sm sm:text-base text-zinc-300">
                                        {latest.subtitle}
                                    </p>
                                )}
                                <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-zinc-400">
                                    <span>{latest.displayDate}</span>
                                    <span>{latest.readingTime}</span>
                                </div>
                            </Link>
                        </article>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href={`/blog/${latest.slug}`}
                                className="inline-flex items-center rounded-full bg-white text-black px-5 py-2 text-sm font-semibold shadow-sm hover:bg-zinc-200 transition"
                            >
                                Read article
                            </Link>

                            <Link
                                href="/blog"
                                className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-zinc-100 hover:bg-white/5 transition"
                            >
                                View all posts
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    )
}
