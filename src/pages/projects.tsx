import ProjectSection from '@components/Sections/ProjectSection'
import Head from 'next/head'
import React from 'react'

const projects: Project[] = [
    {
        name: 'Validaid',
        link: 'https://validaid.org/',
        description:
            'Open-beta web application that facilitates would-be charitable donors with finding charities whose mission and projects align with that of the end-user. The project was awarded over $100,000 in grant money by the U.K. government for future development efforts.',
        technologies: ['Node.js', 'Apollo', 'GraphQL', 'React', 'TypeScript', 'TailwindCSS'],
    },
    {
        name: `That's What Scranton Said`,
        link: 'https://www.thatswhatscrantonsaid.com/',
        description:
            'Single-page React application that allows you to search for your favorite quotes from The Office (US) TV series. Copy your favorite quotes to share or dive deeper to view what was said before and after a specific quote.',
        technologies: ['React', 'TypeScript', 'TailwindCSS'],
    },
    {
        name: 'alexmcc.dev',
        link: process.env.siteUrl,
        description:
            'This site was statically generated using Next.js as build tool. I like to tinker with this site when learning something new.',
        technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS'],
    },
]

const Projects: React.FC = () => {
    return (
        <>
            <Head>
                <title>Projects | {process.env.myName}</title>
            </Head>
            <ProjectSection projects={projects} />
        </>
    )
}

export default Projects
