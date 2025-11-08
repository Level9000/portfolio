import {CallToAction} from '@/components/CallToAction'
import {BlogSection} from '@/components/BlogSection'
import {Hero} from '@/components/Hero'
import {Pricing} from '@/components/Pricing'
import {PrimaryFeatures} from '@/components/PrimaryFeatures'
import {WhosItFor} from '@/components/WhosItFor'
import {SecondaryFeatures} from '@/components/SecondaryFeatures'
import LatestBlogTeaser from "@/components/LatestBlogTeaser";
import ContactForm from "@/components/ContactForm";
import {ProjectsShowcase} from "@/components/ProjectsShowcase";

export default function Home() {
    return (
        <>
            <Hero/>
            <CallToAction/>
            <PrimaryFeatures/>
            <ProjectsShowcase/>
            <LatestBlogTeaser/>
            <ContactForm/>
        </>
    )
}
