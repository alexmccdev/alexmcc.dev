import AboutSection from '@components/Sections/AboutSection'
import Head from 'next/head'
import React from 'react'

const About: React.FC = () => {
    return (
        <>
            <Head>
                <title>About | {process.env.myName}</title>
            </Head>
            <AboutSection />
        </>
    )
}

export default About
