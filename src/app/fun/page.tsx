import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Fun',
  description:
    'Here is a collection of fun passion experience I am actively working on.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="Here are some fun passion projects I've been working on."
      intro="A personal goal of mine has been to commit more time to committing code.  Lately, I've been
      experimenting with various AI capabilties.  Below are some ideas that I have that leverage LLMs,
      Computer Vision, and Generative AI.  I also am making it a point to contribute to an
      open source community.  One that I've been intrigued by and following recently is ComfyUI"
    >
      <div className="space-y-20">
        <SpeakingSection title="Author">
          <Appearance
            href="#"
            title="Bringing the personal touch of your favorite Barista to your morning coffee routine"
            description="Leveraging an iPhone camera, computer vision, elevenlabs voice, and llama 3.2;
            I'm cultivating a morning coffee companion that recognizes me, automatically starts my coffee
            maker, and provides some heartwarmingly fun conversation."
            event="Coffee Bot AI"
            cta="Link coming soon"
          />
          <Appearance
            href="#"
            title="Imaginging a personal AI assistant that displays visible emotional responses"
            description="The inspiration for Coffee Bot AI. This project imagines what an AI avatar
            could look like and displays multiple emotional facial responses as you interact with it.
            Leverages llama 3.2 for dictating and natural language processing, elevenlabs for voice,
            and runway gen3 for animations"
            event="Multimodal Digital Assistant"
            cta="Link coming soon"
          />
          <Appearance
            href="#"
            title="Generating guitar tabs inspired by your music preferences"
            description="This project is still in its infancy but I'm exploring the concept of training
            an LLM on guitar tabs from my favorite artists in hopes of generating inspired new tabs that
            I can use to practice playing guitar. Leveraging LangChain, Supabase, and a host of LLM providers
            until I find what I'm looking for"
            event="Guitar Tab Generator"
            cta="Link coming soon"
          />
        </SpeakingSection>
        <SpeakingSection title="Contributor">
            <Appearance
                href="#"
                title="ComfyUI"
                description="ComfyUI is an open source generative AI workflow visualization product that allows
            users to gain more control over the customization of digital assets that they create.  Leveraging
            open source models like Stable Diffusion or Loras like Flux.1, ComfyUI gives you precise control
            over the diffusion process."
                event="www.comfy.org"
                cta="Link coming soon"
            />

        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
