// src/app/(main)/blog/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { posts } from '@/content/posts'

export default function BlogIndexPage() {
    return (
        <div className="space-y-10">
            <header className="space-y-4">
                <p className="text-xs font-semibold tracking-[0.3em] text-zinc-500 uppercase">
                    Professional
                </p>
                <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
                    THOUGHTS
                </h1>
                <p className="max-w-2xl text-lg text-zinc-200">
                    Below are my thoughts and opinions on professional topics that I&apos;ve
                    formed over the course of my career. If you&apos;d like to learn more, or
                    want to reach out, feel free to leave a message with the contact form
                    below.
                </p>
            </header>

            <div className="space-y-6">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                        <article
                            className="
                                relative flex flex-col sm:flex-row overflow-hidden
                                rounded-3xl border border-white/10 bg-[#050912]
                                shadow-[0_16px_40px_rgba(0,0,0,0.45)]
                                transition hover:bg-[#0b1220] hover:-translate-y-0.5
                            "
                        >
                            {/* Left side – image with diagonal edge */}
                            {post.heroImage ? (
                                <>
                                    {/* Mobile: simple top image */}
                                    <div className="relative w-full h-40 sm:hidden overflow-hidden">
                                        <Image
                                            src={post.heroImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            sizes="100vw"
                                        />
                                    </div>

                                    {/* Desktop: clipped diagonal image */}
                                    <div className="relative hidden sm:block w-2/5 min-h-[180px]">
                                        <div
                                            className="relative h-full w-full"
                                            style={{
                                                clipPath:
                                                    'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
                                            }}
                                        >
                                            <Image
                                                src={post.heroImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                                sizes="(min-width: 1024px) 320px, 40vw"
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="hidden sm:block w-2/5 min-h-[180px] bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
                            )}

                            {/* Right side – text content */}
                            <div className="relative flex-1 px-6 py-5 sm:px-8 sm:py-6 bg-transparent">
                                <div className="relative z-10">
                                    <h2 className="text-lg sm:text-xl font-medium text-white leading-snug">
                                        {post.title}
                                    </h2>

                                    {post.subtitle && (
                                        <p className="mt-2 text-sm sm:text-base text-zinc-300">
                                            {post.subtitle}
                                        </p>
                                    )}

                                    {post.teaser && (
                                        <p className="mt-3 text-xs sm:text-sm text-zinc-400 line-clamp-3">
                                            {post.teaser}
                                        </p>
                                    )}

                                    <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-zinc-400">
                                        <span>{post.displayDate}</span>
                                        <span>{post.readingTime}</span>
                                    </div>

                                    <p className="mt-3 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                                        Read more →
                                    </p>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    )
}
