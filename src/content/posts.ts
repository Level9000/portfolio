// src/content/posts.ts
// Centralized metadata for all blog posts.
// Each post slug should match the folder name inside /app/(main)/blog/[slug].

export type Post = {
    slug: string
    title: string
    subtitle?: string
    displayDate: string
    readingTime: string
    heroImage?: string
}

// List of posts for /blog index
export const posts: Post[] = [
    {
        slug: 'executing-software-product-development-sprints',
        title: 'Executing Software Product Development Sprints',
        subtitle:
            'Leveraging agile to deliver production features on a regular cadence',
        displayDate: 'Jan 17, 2025',
        readingTime: '10min read',
        heroImage: '/images/blog/product-sprint.jpg', // stored in /public/images/blog/
    },
    {
        slug: 'executing-design-sprints-the-agile-way',
        title: 'Executing Design Sprints – The Agile Way',
        subtitle: 'How to rapidly design solutions to known customer problems.',
        displayDate: 'Nov 15, 2024',
        readingTime: '6min read',
        heroImage: '/images/blog/design-sprint.jpg',
    },
]

// Helper function to fetch a post by slug
export function getPostBySlug(slug: string) {
    return posts.find((post) => post.slug === slug)
}
