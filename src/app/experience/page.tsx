import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoFord from '@/images/logos/ford-logo.svg'
import logoMichigan from '@/images/logos/michigan-logo.svg'

const projects = [
  {
    name: 'Experience Design AI Program',
    description:
      'Championed the foundation for what our Experience Design AI Program within Ford XD would be.  ' +
        'Elements including forging external partnerships with industry leading AI players, ' +
        'researching latest trends and technical discoveries, ' +
        'prototyping experiences that leverage emerging technologies and attacked customer problems, ' +
        'iteratively executing agile design sprints using a build, measure, learn cycle, ' +
        'and finally, forging strategic partnerships within the organization so that our creations had permanent homes.',
    logo: logoFord,
  },
  {
    name: 'Test Drive - Your Way',
    description:
      'details coming soon.',
    logo: logoFord,
  },
  {
    name: 'Personalized Vehicle Delivery',
    description:
      'details coming soon.',
    logo: logoFord,
  },
  {
    name: 'Ford Advisors 24/7 Live Support',
    description:
      'details coming soon.',
    logo: logoFord,
  },
  {
    name: 'Ford Psychological Safety Initiative',
    description:
      'details coming soon.',
    logo: logoFord,
  },
  {
    name: 'Software Craftsmanship Bootcamp - Instructor',
    description:
      'Details coming soon.',
    logo: logoFord,
  },
  {
    name: 'Hack Dearborn - U of M Dearborn Hackathon Keynote Speaker',
    description:
      'I was fortunate enough to provide the keynote speech at a University of Michigan - Dearborn ' +
        'Hackathon titled "Hack Dearborn".  I provided students with guidance on how to navigate the world ' +
        'of Software Engineering with the emergence of AI.  I also provided structure on how to experiment ' +
        'in an agile way that leverages design sprints; forming hypothesis, crafting experiments, building ' +
        'prototypes, gathering insights, and iterating until you hone in on what your product or solution will be.',
    logo: logoMichigan,
  },
]

export const metadata: Metadata = {
  title: 'Projects',
  description: `Some projects and initiatives i'm really proud of`,
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Some projects and initiatives i'm really proud of."
      intro="I’ve worked on tons of projects over the years both big and small but these are
      the ones that I’m most proud of. They span across engineering, teaching, experience design,
      culture building, partnerships, and public speaking.  Feel free to inquire about any of them!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Title>{project.name}</Card.Title>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
