'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [error, setError] = useState<string | null>(null)

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus('loading')
        setError(null)

        const form = e.currentTarget
        const formData = new FormData(form)

        const payload = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (!res.ok) {
                throw new Error('Request failed')
            }

            setStatus('success')
            form.reset()
        } catch (err) {
            console.error(err)
            setStatus('error')
            setError('Something went wrong. Please try again or email me directly.')
        }
    }

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="relative overflow-hidden bg-black text-white pt-0 pb-0"
        >
            {/* Content */}
            <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        {/* Heading */}
                        <header className="mb-8 sm:mb-10">
                            <h2
                                id="contact-heading"
                                className="mt-3 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white"
                            >
                                Let&apos;s work together
                            </h2>
                            <p className="mt-4 text-lg text-zinc-300">
                                Whether you&apos;re looking for help with product design, engineering,
                                brand storytelling, or a public speaking engagement, I&apos;d love to hear
                                what you&apos;re building and how I can help.
                            </p>
                        </header>

                        {/* Form card */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 rounded-3xl border border-white/10 bg-white/5 px-5 py-6 sm:px-8 sm:py-8 shadow-[0_18px_40px_rgba(0,0,0,0.55)]"
                        >
                            {/* Name / Email */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-sm font-medium text-zinc-200">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="w-full rounded-2xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm sm:text-base text-white placeholder:text-zinc-500 focus:border-[#ECC969] focus:outline-none focus:ring-2 focus:ring-[#ECC969]/60"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-200">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full rounded-2xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm sm:text-base text-white placeholder:text-zinc-500 focus:border-[#ECC969] focus:outline-none focus:ring-2 focus:ring-[#ECC969]/60"
                                        placeholder="you@email.com"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-sm font-medium text-zinc-200">
                                    How can I help?
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    required
                                    className="w-full rounded-2xl border border-zinc-800 bg-black/40 px-4 py-3 text-sm sm:text-base text-white placeholder:text-zinc-500 focus:border-[#ECC969] focus:outline-none focus:ring-2 focus:ring-[#ECC969]/60 resize-none"
                                    placeholder="Tell me a bit about your project, timeline, and what you’re hoping to achieve."
                                />
                            </div>

                            {/* Status / errors */}
                            {status === 'success' && (
                                <p className="text-sm text-emerald-400">
                                    Thanks for reaching out — I&apos;ll get back to you soon.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-sm text-red-400">
                                    {error}
                                </p>
                            )}

                            {/* Submit button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="inline-flex w-full items-center justify-center rounded-2xl bg-[#ECC969] px-6 py-3 text-sm sm:text-base font-semibold text-black shadow-lg shadow-black/40 transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {status === 'loading' ? 'Sending…' : 'Submit'}
                                </button>
                                <p className="mt-3 text-xs sm:text-sm text-zinc-500">
                                    Prefer email? Reach me directly at{' '}
                                    <a
                                        href="mailto:erik@smallmachines.ai"
                                        className="underline decoration-[#ECC969]/70 underline-offset-2 hover:text-zinc-200"
                                    >
                                        erik@smallmachines.ai
                                    </a>
                                    .
                                </p>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        </section>
    )
}
