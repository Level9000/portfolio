// src/app/(main)/blog/executing-software-product-development-sprints/page.tsx
import Image from 'next/image'
import ContactForm from "@/components/ContactForm";

export default function ExecutingSoftwareProductDevelopmentSprintsPage() {
    return (
        <article className="space-y-8">
            {/* Title, meta, hero */}
            <header>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Executing Software Product Development Sprints
                </h1>
                <p className="mt-2 text-sm text-zinc-300">
                    Leveraging agile to deliver production features on a regular cadence.
                </p>

                <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-zinc-400">
                    <span>Jan 17, 2025</span>
                    <span>10min read</span>
                </div>

                <div className="mt-8 relative w-full aspect-[16/9] overflow-hidden rounded-3xl">
                    <Image
                        src="/images/blog/product-sprint.jpg"
                        alt="Planning a software product development sprint"
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
                        As we learned in my previous post, agile design sprints are great
                        for leveraging prototypes to test hypothesis against known customer
                        problems. Well, what happens once our hypothesis have been
                        validated? What do we do now that we are sure we know what our
                        customers want? This is where the Agile Product Development Sprint
                        comes in.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">So, What is it?</h2>
                    <p>
                        An Agile Product Development Sprint is a time-boxed period,
                        typically 2–4 weeks, where a cross-functional team works together to
                        deliver a specific set of features or user stories. The focus is on
                        building and delivering a working product, with the goal of meeting
                        customer needs and business objectives.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Define Our Sprint Goal:</h2>
                    <p>
                        Every Agile Product Development Sprint needs to have a clearly
                        defined goal or objective—something simple that can be achieved in a
                        2 week time span (my personal sprint preference). A Sprint Goal is a
                        clear and concise statement that defines what the team aims to
                        achieve during the sprint. It should be specific, measurable,
                        achievable, relevant, and time-bound (SMART).
                    </p>
                    <p>
                        We want to provide new value to our customer by the end of the
                        sprint. Keep it short if you can. A Sprint Goal that can be
                        contained to a single sentence is easy for everybody to remember.
                        Here are some examples:
                    </p>
                    <ul className="mt-3 list-disc list-inside space-y-1">
                        <li>
                            Deliver a working login feature so that users can successfully log
                            in.
                        </li>
                        <li>
                            Implement a new payment gateway so that customers can pay with a
                            credit card.
                        </li>
                        <li>
                            Allow our customers to subscribe to our website and receive our
                            weekly newsletter.
                        </li>
                    </ul>
                    <p className="mt-3">
                        The responsibility of defining a Sprint Goal usually falls on our
                        Product Owner, but it’s important that the entire team is aligned on
                        the direction moving forward. It’s going to be a group effort
                        delivering the new feature.
                    </p>
                </section>
            </section>
            <footer>
                <ContactForm />
            </footer>
        </article>
    )
}
