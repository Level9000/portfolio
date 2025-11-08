import Link from 'next/link'
import { posts } from '@/content/posts'

export default function LatestBlogTeaser() {
    if (!posts.length) return null

    // Assumes posts[0] is the newest post
    const latest = posts[0]

    return (
        <section aria-labelledby="latest-blog-heading" className="py-10">
            <div className="space-y-6">
                {/* Heading */}
                <header className="space-y-2">
                    <p className="text-xs font-semibold tracking-[0.35em] text-zinc-400 uppercase">
                        Professional
                    </p>
                    <h2
                        id="latest-blog-heading"
                        className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
                    >
                        Thoughts
                    </h2>
                    <p className="max-w-2xl text-sm sm:text-base text-zinc-300">
                        Below are my thoughts and opinions on professional topics that I've formed over the course of my career.
                        If you'd like to learn more, or would like to reach out, feel free to leave a message with the contact form below.
                    </p>
                </header>

                {/* Card */}
                <article className="rounded-3xl bg-white/5 border border-white/10 px-6 py-5 sm:px-8 sm:py-6 shadow-md">
                    <Link
                        href={`/blog/${latest.slug}`}
                        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-white/80 rounded-3xl -m-4 p-4 sm:-m-6 sm:p-6"
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">
                            {latest.title}
                        </h3>
                        {latest.subtitle && (
                            <p className="mt-1 text-sm sm:text-base text-zinc-300">
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
        </section>
    )
}
