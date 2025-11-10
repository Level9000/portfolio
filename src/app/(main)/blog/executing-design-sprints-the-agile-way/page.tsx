import Image from 'next/image'
import ContactForm from '@/components/ContactForm'

export default function ExecutingDesignSprintsTheAgileWayPage() {
    return (
        <article className="space-y-8">
            {/* Title, meta, hero */}
            <header>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Executing Design Sprints – The Agile Way
                </h1>
                <p className="mt-2 text-sm text-zinc-300">
                    How agile design sprints help teams focus on the right problems and learn quickly.
                </p>

                <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-zinc-400">
                    <span>Nov 15, 2024</span>
                    <span>6 min read</span>
                </div>

                <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-3xl">
                    <Image
                        src="/images/blog/design-sprint.jpg"
                        alt="Team collaborating during an agile design sprint workshop"
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
                        As a leader, I&apos;ve always believed that the key to unlocking a team&apos;s full
                        potential lies in creating an environment where individuals feel empowered to be
                        their true, authentic selves. In the context of design sprints, this means
                        fostering a culture that values collaboration, creativity, and experimentation.
                        In this article, I&apos;ll share my insights on how to execute design sprints the
                        agile way.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">What Problem Are We Trying to Solve?</h2>
                    <p>
                        In agile, it&apos;s crucial to attack the right problems. That starts with taking
                        the time to understand our customers&apos; journey and identifying the pain points
                        they&apos;re encountering. We need to ask ourselves:
                    </p>
                    <ul className="mt-3 list-disc list-inside space-y-1">
                        <li>What specific challenges are our customers facing?</li>
                        <li>Why are they encountering these problems?</li>
                        <li>What are the underlying causes of these issues?</li>
                    </ul>
                    <p className="mt-3">
                        By gaining a deep understanding of our customers&apos; needs and pain points, we
                        can start to formulate a clear problem statement. This is where the{' '}
                        <strong>&quot;how might we&quot;</strong> (HMW) question comes in.
                    </p>
                    <p className="mt-3">
                        The HMW question is a powerful tool that helps us frame the problem in a way
                        that&apos;s actionable and solvable. It encourages us to think creatively and come
                        up with innovative solutions. For example:
                    </p>
                    <ul className="mt-3 list-disc list-inside space-y-1">
                        <li>&quot;How might we simplify the checkout process for our customers?&quot;</li>
                        <li>&quot;How might we improve the user experience for our mobile app?&quot;</li>
                    </ul>
                    <p className="mt-3">
                        By crafting a clear and concise HMW question, we give our team a clear direction
                        and focus for the sprint, and we ensure that we&apos;re tackling the right problem.
                        The goal is to land on a HMW question that is specific, measurable, achievable,
                        relevant, and time-bound (SMART), and that aligns with our customers&apos; needs
                        and pain points. That problem statement becomes the north star for the sprint.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Define Our Hypothesis:</h2>
                    <p>
                        With a clear problem statement in hand, it&apos;s time to define our hypothesis.
                        A hypothesis is an educated guess that answers our &quot;how might we&quot; question.
                        It&apos;s a statement that outlines what we think will solve the problem—and why.
                    </p>
                    <p className="mt-3">
                        A good hypothesis should be specific, testable, and falsifiable. In other words,
                        it should be clear what we&apos;re trying to achieve, how we&apos;ll measure success,
                        and what will prove our hypothesis wrong.
                    </p>
                    <p className="mt-3">
                        For example, if our HMW question is &quot;How might we simplify the checkout process
                        for our customers?&quot;, our hypothesis might be:
                    </p>
                    <p className="mt-3 italic">
                        &quot;We believe that by reducing the number of steps in the checkout process from 5 to
                        3, we can increase conversion rates by 20%.&quot;
                    </p>
                    <p className="mt-3">
                        This hypothesis is specific, testable, and falsifiable, and it gives us a clear
                        direction for our design sprint. By defining our hypothesis up front, we make sure
                        the sprint is focused on solving the right problem, and that we&apos;re working
                        toward a clear and measurable outcome.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Time to Sketch!</h2>
                    <p>
                        At this point, we&apos;ve identified the right problem and established our
                        hypothesis. Now comes the fun part: sketching.
                    </p>
                    <p className="mt-3">
                        This is where everyone puts their creative hat on and roughly sketches their ideas
                        for what the ideal solution might look like. We want to keep ideas <strong>authorless</strong>{' '}
                        so that team members aren&apos;t inadvertently influenced by who created what.
                    </p>
                    <p className="mt-3">
                        We also want to keep things low fidelity at this point—just enough detail to
                        clearly communicate an idea. Once sketching is complete, all concepts go up on
                        the wall (or digital board) for everyone to review.
                    </p>
                    <p className="mt-3">
                        The team can then vote on their favorite solution and align on a direction. Keep
                        in mind: the solution we agree on needs to enable us to measure against our
                        hypothesis. Our next step is the prototyping—or build—phase.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Build:</h2>
                    <p>
                        We&apos;re moving right along. We&apos;ve agreed as a team which sketch we like best,
                        and now we&apos;re ready to build our prototype.
                    </p>
                    <p className="mt-3">
                        During prototyping, we need to remember that we&apos;re not shooting for perfect—we&apos;re
                        running an experiment to validate or invalidate our hypothesis. The prototype
                        simply needs to be good enough to elicit authentic feedback and help us learn.
                    </p>
                    <p className="mt-3">
                        It&apos;s not something that&apos;s going into production, and it doesn&apos;t need to
                        scale. It just needs to create the right user experience for us to observe and
                        measure.
                    </p>
                    <p className="mt-3">
                        For example, say we&apos;re testing a hypothesis that customers want their groceries
                        delivered by a driverless car. Rather than building an actual driverless car,
                        what&apos;s a scrappier approach that can get us similar insight? Maybe it&apos;s as simple
                        as a driver wearing a costume so that it appears as if the car is driverless.
                    </p>
                    <p className="mt-3">
                        The purpose of the sprint is to actualize our hypothesis quickly. The faster we
                        get a scrappy prototype together, the sooner we can start learning from real
                        users.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Conduct Experiment and Measure:</h2>
                    <p>
                        With our prototype in hand, it&apos;s time to conduct an experiment and measure the
                        results. This is where we put our hypothesis to the test and gather feedback from
                        real users.
                    </p>
                    <p className="mt-3">
                        The goal of the experiment is to validate or invalidate our hypothesis and gather
                        insights that help us refine the solution. To do this well, we need a clear test
                        plan, a defined target audience, and agreement on how we&apos;ll measure success.
                    </p>
                    <p className="mt-3">
                        We also want to find the sweet spot for the number of participants. Studies show
                        that as few as five interviews can give you a diverse enough participant pool to
                        capture most of the opinions you&apos;re likely to encounter. More than five and
                        your likelihood of duplicate feedback goes up, while the effort required to run
                        sessions and synthesize data grows significantly.
                    </p>
                    <p className="mt-3">
                        Most importantly, we must ask questions in an unbiased way so we can gather
                        authentic and honest feedback—not just validation of what we hope to hear.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Learn:</h2>
                    <p>
                        With our experiment complete, it&apos;s time to analyze the results and learn from
                        our findings. This is where we step back and reflect on what we learned, what
                        worked, and what didn&apos;t.
                    </p>
                    <p className="mt-3">
                        We want to identify patterns and trends in the data and use those insights to
                        inform our next steps. Did our hypothesis hold up under testing, or did we
                        discover something entirely new? What did users like about the prototype, and
                        where did they struggle?
                    </p>
                    <p className="mt-3">
                        By taking the time to thoroughly analyze the results, we gain a deeper
                        understanding of our customers&apos; needs and preferences, and we can make
                        data-driven decisions about how to improve the solution.
                    </p>
                    <p className="mt-3">
                        This is also a great opportunity to surface assumptions that turned out to be
                        incorrect, and to challenge our own biases. That&apos;s where a lot of the real
                        growth happens—for both the product and the team.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Iterate:</h2>
                    <p>
                        Design sprints are not a one-and-done process. They&apos;re cyclical, built on
                        continuous iteration and refinement.
                    </p>
                    <p className="mt-3">
                        Once we&apos;ve learned from our experiment and refined our solution, it&apos;s time to
                        iterate and repeat the process. We might need to go back and sharpen the problem
                        statement, or we might simply need to tweak our prototype and test again.
                    </p>
                    <p className="mt-3">
                        The key is a willingness to iterate until we&apos;ve achieved the desired outcome.
                        By embracing iteration, we ensure the solution truly meets the needs of our
                        customers—instead of settling for &quot;good enough.&quot; Iteration is where the real
                        magic happens, and it&apos;s what sets design sprints apart from many other design
                        methodologies.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Closing Thoughts:</h2>
                    <p>
                        One final point: agile design sprints are not the same as agile product
                        development. The design sprint helps inform the product team about what to build
                        next.
                    </p>
                    <p className="mt-3">
                        When we&apos;ve validated that we understand what the customer wants, we can hand
                        those learnings off to the product development team and get them into the
                        backlog. Agile product development is its own process—with its own rituals,
                        constraints, and goals.
                    </p>
                    <p className="mt-3">
                        Design sprints help us de-risk what we&apos;re building. Product development sprints
                        help us ship it. Stay tuned for more on that in a future article.
                    </p>
                </section>
            </section>

            <footer>
                <ContactForm />
            </footer>
        </article>
    )
}
