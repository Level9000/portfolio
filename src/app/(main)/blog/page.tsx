// src/app/(main)/blog/page.tsx
import Link from 'next/link'
import { posts } from '@/content/posts'

export default function BlogIndexPage() {
    return (
        <div className="space-y-8">
            <header className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.35em] text-zinc-400 uppercase">
                    Professional
                </p>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    THOUGHTS
                </h1>
                <p className="max-w-2xl text-sm sm:text-base text-zinc-300">
                    Below are my thoughts and opinions on professional topics that I&apos;ve
                    formed over the course of my career. If you&apos;d like to learn more, or
                    want to reach out, feel free to leave a message with the contact form
                    below.
                </p>
            </header>

            <div className="space-y-6">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                        <article className="rounded-3xl bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-5 sm:px-8 sm:py-6 transition shadow-md">
                            <h2 className="text-xl sm:text-2xl font-semibold text-white">
                                {post.title}
                            </h2>
                            {post.subtitle && (
                                <p className="mt-1 text-sm text-zinc-300">{post.subtitle}</p>
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
