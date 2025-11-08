import Link from 'next/link'
import { Container } from '@/components/Container'

// You can replace this with real data from MDX, Contentlayer, a CMS, etc.
const posts = [
    {
        slug: 'building-pocket-panel-out-loud',
        title: 'Building Pocket Panel Out Loud',
        excerpt:
            'How I went from a “what if…” idea to launching Pocket Panel as an AI board of advisors for everyday builders.',
        date: '2025-10-15',
        readingTime: '6 min read',
    },
    {
        slug: 'designing-for-dreamers-doers-explorers',
        title: 'Designing for Dreamers, Doers, and Explorers',
        excerpt:
            'A look at the three core personas behind Pocket Panel and how they shape every product decision I make.',
        date: '2025-10-22',
        readingTime: '5 min read',
    },
    {
        slug: 'building-a-personal-board-of-directors',
        title: 'Why You Need a Personal Board of Directors',
        excerpt:
            'What it really means to have an advisory board in your pocket — and how it changes the way you make decisions.',
        date: '2025-10-29',
        readingTime: '7 min read',
    },
]

export function BlogSection() {
    const visiblePosts = posts.slice(0, 3) // show latest 3

    return (
        <section
            id="blog"
            aria-labelledby="blog-title"
            className="stitch-top bg-black text-[#F6F1EB] pt-0 pb-0"
        >
            <div className="py-16 sm:py-24">
                <Container>
                    <div className="mx-auto max-w-4xl lg:mx-0 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2
                                id="blog-title"
                                className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
                            >
                                Latest writing
                            </h2>
                            <p className="mt-3 text-lg sm:text-xl text-gray-300">
                                Thoughts on building products, storytelling, and turning{' '}
                                <span className="text-[#ECC969]">what if</span> ideas into
                                what&apos;s next.
                            </p>
                        </div>

                        <div className="sm:text-right">
                            <Link
                                href="/blogs"
                                className="inline-flex items-center rounded-full bg-[#ECC969] px-5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-[#f3d382] transition"
                            >
                                View all posts
                            </Link>
                        </div>
                    </div>

                    <div className="mx-auto mt-10 sm:mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
                        {visiblePosts.map((post) => (
                            <article
                                key={post.slug}
                                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm hover:bg-white/10 transition"
                            >
                                <header>
                                    <p className="text-xs uppercase tracking-wide text-gray-400">
                                        {post.date}{' '}
                                        {post.readingTime && (
                                            <>
                                                <span aria-hidden="true">·</span> {post.readingTime}
                                            </>
                                        )}
                                    </p>
                                    <h3 className="mt-3 text-lg font-semibold text-white leading-snug">
                                        <Link href={`/blogs/${post.slug}`}>
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-3 text-sm text-gray-300">
                                        {post.excerpt}
                                    </p>
                                </header>

                                <footer className="mt-4">
                                    <Link
                                        href={`/blogs/${post.slug}`}
                                        className="inline-flex items-center text-sm font-medium text-[#ECC969] hover:underline"
                                    >
                                        Read post
                                        <span aria-hidden="true" className="ml-1">
                      →
                    </span>
                                    </Link>
                                </footer>
                            </article>
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    )
}
