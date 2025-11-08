'use client'

import { FormEvent, useState } from 'react'

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
            className="bg-[#111111] text-white py-16 sm:py-24"
            aria-labelledby="contact-heading"
        >
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <header className="mb-10 sm:mb-14">
                    <p className="text-xs font-semibold tracking-[0.3em] text-zinc-500 uppercase">
                        Professional
                    </p>
                    <h2
                        id="contact-heading"
                        className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
                    >
                        LET&apos;S WORK
                        <span className="block text-zinc-700">TOGETHER</span>
                    </h2>
                </header>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 rounded-3xl"
                >
                    {/* Name / Email */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm text-zinc-300">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm text-zinc-300">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                                placeholder="you@email.com"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm text-zinc-300">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none"
                            placeholder="Tell me a bit about what you’d like to work on…"
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
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[#4A7CFF] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#3f6be0] disabled:cursor-not-allowed disabled:opacity-70 transition"
                    >
                        {status === 'loading' ? 'Sending…' : 'Submit'}
                    </button>
                </form>
            </div>
        </section>
    )
}
