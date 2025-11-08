import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/Container'

// You can replace this with real data from MDX, Contentlayer, a CMS, etc.
const posts = [
    {
        slug: 'executing-software-product-development-sprints',
        title: 'Executing Software Product Development Sprints',
        excerpt:
            'How agile product development sprints help teams ship real value on a predictable cadence.',
        date: 'Jan 17, 2025',
        readingTime: '10 min read',
        image: '/images/blog/product-sprint-thumb.jpg',
    },
    {
        slug: 'executing-design-sprints-the-agile-way',
        title: 'Executing Design Sprints – The Agile Way',
        excerpt:
            'A practical look at using design sprints to validate ideas quickly with real customers.',
        date: 'Nov 15, 2024',
        readingTime: '6 min read',
        image: '/images/blog/design-sprint-thumb.jpg',
    },
    {
        slug: 'building-a-personal-board-of-directors',
        title: 'Why You Need a Personal Board of Directors',
        excerpt:
            'What it really means to have an advisory board in your pocket — and how it changes decisions.',
        date: 'Oct 29, 2024',
        readingTime: '7 min read',
        image: '/images/blog/personal-board-thumb.jpg',
    },
]

export function BlogSection() {
    const visiblePosts = posts.slice(0, 3) // show latest 3

    return (
        <section
            id="blog"
            aria-labelledby="blog-title"
            className="relative stitch-top overflow-hidden bg-white text-black pt-0 pb-0"
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
                    height={300}
                    priority
                    className="w-[100vw] h-auto mx-auto -translate-y-px"
                />
            </div>

            {/* Content with padding to clear blob */}
            <div className="pt-24 sm:pt-28 md:pt-36 lg:pt-72 xl:pt-72 pb-20 sm:pb-32">
                <Container>
                    {/* Header row */}
                    <div className="mx-auto max-w-6xl flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                        <div className="max-w-xl">
                            <h2
                                id="blog-title"
                                className="text-3xl sm:text-4xl font-medium tracking-tight text-black"
                            >
                                Latest writing
                            </h2>
                            <p className="mt-4 text-lg text-gray-800">
                                Thoughts on building products, storytelling, and turning{' '}
                                <span className="font-semibold text-[#ECC969]">what if</span>{' '}
                                ideas into what&apos;s next.
                            </p>
                        </div>

                        <div className="sm:text-right">
                            <Link
                                href="/blog"
                                className="inline-flex items-center rounded-2xl border border-[#ECC969]/40 bg-[#ECC969] px-5 py-2.5 text-sm font-semibold text-[#1f1300] shadow-md transition hover:brightness-95"
                            >
                                View all posts
                            </Link>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="mx-auto mt-10 sm:mt-14 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                        {visiblePosts.map((post) => (
                            <article
                                key={post.slug}
                                className="flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.18)]"
                            >
                                {/* Image flush with top edge */}
                                {post.image && (
                                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(min-width: 1024px) 400px, 100vw"
                                            className="object-cover"
                                        />
                                    </div>
                                )}

                                {/* Text content */}
                                <div className="flex flex-1 flex-col px-5 py-5 sm:px-6 sm:py-6">
                                    <header>
                                        <p className="text-xs uppercase tracking-wide text-gray-500">
                                            {post.date}{' '}
                                            {post.readingTime && (
                                                <>
                                                    <span aria-hidden="true">·</span> {post.readingTime}
                                                </>
                                            )}
                                        </p>

                                        <h3 className="mt-3 text-lg sm:text-xl font-medium leading-snug text-black">
                                            <Link href={`/blog/${post.slug}`}>
                                                <span className="absolute inset-0" aria-hidden="true" />
                                                {post.title}
                                            </Link>
                                        </h3>

                                        <p className="mt-3 text-sm sm:text-base text-gray-700">
                                            {post.excerpt}
                                        </p>
                                    </header>

                                    <footer className="mt-4">
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-sm font-semibold text-[#C29635] hover:underline"
                                        >
                                            Read article
                                            <span aria-hidden="true" className="ml-1">
                        →
                      </span>
                                        </Link>
                                    </footer>
                                </div>
                            </article>
                        ))}
                    </div>
                </Container>
            </div>
        </section>
    )
}
