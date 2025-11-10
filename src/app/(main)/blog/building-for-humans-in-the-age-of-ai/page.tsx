import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export default function BuildingForHumansInTheAgeOfAIPage() {
    return (
        <article className="space-y-8">
            {/* Title, meta, hero */}
            <header>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Building for Humans in the Age of AI
                </h1>
                <p className="mt-2 text-sm text-zinc-300">
                    Why I build AI-powered products that elevate human potential instead of replacing it.
                </p>

                <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-zinc-400">
                    <span>Nov 10, 2025</span>
                    <span>7 min read</span>
                </div>

                <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-3xl">
                    <Image
                        src="/images/blog/handmark_logo.png"
                        alt="A person sketching product ideas surrounded by digital AI concepts"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 800px, 100vw"
                    />
                </div>
            </header>

            {/* Body */}
            <section className="space-y-6 text-sm sm:text-base leading-relaxed text-zinc-100">
                <section>
                    <h2 className="text-2xl font-semibold mb-2">Introduction:</h2>
                    <p>
                        I&apos;ve always loved building things. There&apos;s something deeply satisfying about taking a
                        problem that&apos;s messy, unstructured, and frustrating and turning it into something clear,
                        purposeful, and intuitive.
                    </p>
                    <p className="mt-3">
                        For me, product development has never been about just writing code or shipping features.
                        It&apos;s about taking pride in the craftsmanship—the tiny details that make someone pause
                        mid-interaction and say, “wow, this is nice.” That moment is what I chase.
                    </p>
                    <p className="mt-3">
                        I come from a software engineering background, but I lean heavily into my creative side.
                        I love to draw, to build things with my hands, to play guitar, and—above all—to serve.
                        Whether it&apos;s a piece of software, a sketch, or a hand-crafted object, the satisfaction
                        comes from knowing that what I built makes someone&apos;s day a little better.
                    </p>
                    <p className="mt-3">
                        At its core, I view product design as a form of empathy. It takes care and attention to fully
                        understand the nuances of a problem—the specific breakdowns in a process that result in
                        frustration or disappointment. For me, the most rewarding part isn&apos;t the launch day or the
                        analytics dashboard; it&apos;s watching the energy spread across someone&apos;s face as they
                        realize that a problem has been alleviated—and that they now have new capabilities they
                        didn&apos;t have before.
                    </p>
                    <p className="mt-3">
                        I believe great products respect people&apos;s time, their attention, and their intelligence.
                        They don&apos;t overwhelm you with complexity; they quietly make your life easier.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">
                        My Philosophy on AI and Product Development:
                    </h2>
                    <p>
                        When AI first grabbed my attention in late 2022 with the release of ChatGPT-3.5, I was working
                        inside a creative design organization. Almost immediately, I was fascinated by what this technology
                        could mean for the products we build—how it could help us unlock new experiences, inspire creativity,
                        and deliver real value to users in ways that weren&apos;t possible before.
                    </p>
                    <p className="mt-3">
                        But as the months went on, what I watched unfold across the industry was something very different.
                        The conversation shifted toward <span className="font-semibold">efficiency at all costs</span>—
                        automating, downsizing, and removing the human element wherever possible.
                    </p>
                    <p className="mt-3">
                        It was disheartening.
                    </p>
                    <p className="mt-3">
                        To me, that mindset misses the point. The potential of AI isn&apos;t in replacing people;
                        it&apos;s in <span className="font-semibold">empowering them</span>.
                    </p>
                    <p className="mt-3">
                        What I love most about AI is its ability to give people context and clarity in a tone that truly
                        resonates for them. Two people can ask the same question and receive completely different answers—
                        each one tailored to their background, their voice, their motivation. It&apos;s the ability to solve
                        the same problem five different ways for five different people.
                    </p>
                    <p className="mt-3">
                        That&apos;s powerful. Because when technology can meet people where they are—when it can speak their
                        language—it has the power to inspire real action. It helps people feel understood enough to take
                        their next step forward.
                    </p>
                    <p className="mt-3">
                        That realization became one of the driving reasons I built Pocket Panel. I saw an opportunity to
                        create something net new—an experience for an underrepresented user base, not just another
                        productivity tool or automation system. I wanted to build a product that didn&apos;t take away
                        from the current state, but instead invited more people to the playing field.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Building Pocket Panel:</h2>
                    <p>
                        That philosophy shaped everything about Pocket Panel—an app designed to augment human potential,
                        not replace it.
                    </p>
                    <p className="mt-3">
                        Pocket Panel helps people build their own personal board of directors—a collection of AI advisors
                        modeled around real human strengths: strategy, empathy, creativity, and insight. It&apos;s a way
                        for anyone—whether they&apos;re a founder, dreamer, or someone simply exploring a new direction—
                        to access diverse perspectives and structured guidance.
                    </p>
                    <p className="mt-3">
                        By leveraging AI thoughtfully, Pocket Panel aims to bring capability to users who have been
                        underrepresented in traditional business and professional networks. It&apos;s not about doing the
                        work for them; it&apos;s about helping them think, plan, and grow.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Why I Chose to Build This Way:</h2>
                    <p>
                        I&apos;ve made a deliberate choice in how I approach building products that leverage AI.
                        I want to build things that make the world better and make people&apos;s lives better.
                        I want to do good work with good people—work I can be proud of, work that tells a story
                        about who I am and what I stand for.
                    </p>
                    <p className="mt-3">
                        I want to build products that create net new capabilities—not those that remove the human
                        element just for the sake of efficiency gains, but those that elevate what humans are capable
                        of achieving.
                    </p>
                    <p className="mt-3">
                        Because the hard problems—the ones worth solving—are almost never solved by replacing people.
                        They&apos;re solved by empowering them.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Conclusion:</h2>
                    <p>
                        I believe the future of product development lies in balance—in using AI where it adds value,
                        not just where it can be inserted.
                    </p>
                    <p className="mt-3">
                        Technology should enhance the human experience, not erase it.
                    </p>
                    <p className="mt-3">
                        As builders, we have an opportunity—and a responsibility—to create tools that make people feel
                        more capable, more inspired, and more connected. That&apos;s what drives me to build.
                        That&apos;s what drives Pocket Panel.
                    </p>
                </section>
            </section>

            <footer>
                <ContactForm />
            </footer>
        </article>
    )
}
