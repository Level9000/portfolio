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
      'A hassle-free test drive experience for electric vehicles that increased customer engagement and conversion rates. ' +
      'Following an agile product development sprint cycle, our team iteratively designed, built, and refined a self-scheduling, touchless test drive experience. ' +
      'What started as a scrappy prototype made from cardboard, bluetooth speakers, and an iPad iteratively evolved into an in-vehicle touch screen experience with ' +
      'intro video, GPS routing, and geofenced audio queues. We launched the experience in the Vegas region and customer feedback validated our hypothesis was correct.',
    logo: logoFord,
  },
  {
    name: 'Personalized Vehicle Delivery',
    description:
      `The purchase of a vehicle is one of the biggest purchase you make in your lifetime.  Shouldn't we celebrate this more?  We had a hypothesis that customers would relish 
      in the opportunity to celebrate their new purchase with friends and family on social media if the delivery was an event worth celebrating.  What
       started as a robust laser light show with videos, fog machines, booming music, and red carpets was eventually refined into a meticulously personal yet scalable experience.  
       We launched at dealerships in Minnesota and over the course of multiple iterations landed on an efficient delivery celebration with 3 key elements: a personal gift, 
       a personalized video showing the journey your vehicle took to get to this point that you could easily share online, and a celebratory banner congratulating you on your big investment.` ,
    logo: logoFord,
  },
  {
    name: 'Ford Advisors 24/7 Live Support',
    description:
      'Transformed the Ford call center agent experience by introducing AI chat as a knowledge retrieval. '+ 
      'The knowledge retrieval tool was built using RAG + LangChain + LLM and allowed for ' +
      'our agents to ask questions in plain language and get a meticously crafted answer in return that could ' +
      'quickly be shared with customers.  The amount of time saved as a result of this tool significantly ' +
      'lowered our cost per customer engagement.  An integrated continous feedback loop also helped inform our ' + 
      'content mangers to build the right content at the right time.',
    logo: logoFord,
  },
  {
    name: 'Ford Psychological Safety Initiative',
    description:
      `Developed and championed Ford's Psychological Safety corporate initiative.  I created the content and championed 
      the efforts to educate directors within the company on how to build a psychologically safe workplace environment.  
      I hosted weekly educational sessions and created a safe space for continuous feedback and dialogue.`,
    logo: logoFord,
  },
  {
    name: 'Software Craftsmanship Bootcamp - Instructor',
    description:
      `Authored and led a continously running 12 week Software Craftsmanship Bootcamp.  Each week I progressively led a 
       classroom of 20 Ford professionals looking to improve their software skills.  Topics emphasized the value of 
       code quality, test driven development, and paired programming.  The course provided weekly coding exercises, tests, 
       one on one mentoring, and an eventual internal certification.`,
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
