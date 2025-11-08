// src/app/(main)/blog/page.tsx
import Link from 'next/link'
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
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                        <article className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 sm:px-8 sm:py-6 shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition hover:bg-white/10 hover:-translate-y-0.5">
                            <h2 className="text-lg sm:text-xl font-medium text-white leading-snug">
                                {post.title}
                            </h2>

                            {post.subtitle && (
                                <p className="mt-2 text-sm sm:text-base text-zinc-300">
                                    {post.subtitle}
                                </p>
                            )}

                            <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-zinc-400">
                                <span>{post.displayDate}</span>
                                <span>{post.readingTime}</span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    )
}
