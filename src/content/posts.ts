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
    teaser?: string
}

// List of posts for /blog index (newest first)
export const posts: Post[] = [
    {
        slug: 'building-for-humans-in-the-age-of-ai',
        title: 'Building for Humans in the Age of AI',
        subtitle:
            'My approach to building AI-powered products that elevate people instead of replacing them.',
        displayDate: 'Nov 10, 2025',
        readingTime: '7min read',
        heroImage: '/images/blog/handmark_logo.png',
        teaser:
            'AI shouldn’t exist just for efficiency’s sake. In this post, I share why I care so deeply about craftsmanship, empathy, and competitive excellence in product development—and how that led me to build Pocket Panel as a net-new experience that empowers underrepresented users instead of automating them away.',
    },
    {
        slug: 'executing-software-product-development-sprints',
        title: 'Executing Software Product Development Sprints',
        subtitle:
            'Leveraging agile to deliver production features on a regular cadence.',
        displayDate: 'Jan 17, 2025',
        readingTime: '10min read',
        heroImage: '/images/blog/product-sprint.jpg',
        teaser:
            'As we learned in my previous post, agile design sprints are great for leveraging prototypes to test hypothesis against known customer problems. Well, what happens once our hypothesis have been validated? What do we do now that we are sure we know what our customers want? This is where the Agile Product Development Sprint comes in.',
    },
    {
        slug: 'building-a-culture-that-thrives',
        title: 'Building a Culture That Thrives',
        subtitle:
            'Creating an environment where people can be their authentic selves and do their best work.',
        displayDate: 'Dec 20, 2024',
        readingTime: '6min read',
        heroImage: '/images/blog/culture-thrives.jpg',
        teaser:
            'As a leader, I believe the key to unlocking a team’s full potential lies in creating an environment where people feel safe being their true, authentic selves. In this post, I share how authenticity, trust, and growth-focused leadership can shape a culture people genuinely want to be part of.',
    },
    {
        slug: 'the-art-of-storytelling',
        title: 'The Art of Storytelling',
        subtitle:
            'How to use narrative to win hearts, minds, and support for your ideas.',
        displayDate: 'Dec 6, 2024',
        readingTime: '4min read',
        heroImage: '/images/blog/art-of-storytelling.jpg',
        teaser:
            'Storytelling is one of the most powerful skills a leader or founder can develop. Whether you’re pitching an idea, seeking investment, or recruiting a team, a well-crafted story can be the difference between “maybe later” and “I’m in—let’s do this.”',
    },
    {
        slug: 'executing-design-sprints-the-agile-way',
        title: 'Executing Design Sprints – The Agile Way',
        subtitle: 'How to rapidly design solutions to known customer problems.',
        displayDate: 'Nov 15, 2024',
        readingTime: '6min read',
        heroImage: '/images/blog/design-sprint.jpg',
        teaser:
            'Agile design sprints give teams a focused way to explore solutions to real customer problems—fast. From defining the right “how might we” question to sketching, prototyping, and testing with real users, this post walks through how to run sprints the agile way.',
    },
]

// Helper function to fetch a post by slug
export function getPostBySlug(slug: string) {
    return posts.find((post) => post.slug === slug)
}
