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
            title="In space, no one can watch you stream — until now"
            description="A technical deep-dive into HelioStream, the real-time streaming library I wrote for transmitting live video back to Earth."
            event="Coffee Bot AI"
            cta="Check it out"
          />
          <Appearance
            href="#"
            title="Lessons learned from our first product recall"
            description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
            event="Multimodal Digital Assistant"
            cta="Check it out"
          />
          <Appearance
            href="#"
            title="Lessons learned from our first product recall"
            description="They say that if you’re not embarassed by your first version, you’re doing it wrong. Well when you’re selling DIY space shuttle kits it turns out it’s a bit more complicated."
            event="Guitar Tab Generator"
            cta="Check it out"
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
                cta="Check it out"
            />

        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
