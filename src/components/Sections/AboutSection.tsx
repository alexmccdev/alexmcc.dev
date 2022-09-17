import PageWrapper from '@components/Layout/PageWrapper'
import Link from 'next/link'
import React from 'react'

const AboutSection: React.FC = () => {
    return (
        <PageWrapper>
            <div className="flex flex-col md:flex-row">
                <img
                    className="self-center flex-shrink-0 mb-10 overflow-hidden rounded-full max-h-52 max-w-52 md:mr-8 md:mb-0"
                    src="/alex.jpg"
                    alt={process.env.myName}
                    title={process.env.myName}
                />
                <p className="z-50 max-w-xl text-xl tracking-tight">
                    Currently, I am a software engineer working on improving the loan applicant verifications platform
                    at{' '}
                    <a
                        className="underline cursor-pointer"
                        href={process.env.employerLink}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {process.env.employerName}
                    </a>
                    {process.env.employerName.charAt(process.env.employerName.length - 1) !== '.' && '.'} I began my
                    career as an Industrial &amp; Systems Engineer in Columbus, Ohio working in manufacturing and on
                    data migration projects before learning{' '}
                    <span role="img" aria-label="sparkle">
                        ✨
                    </span>
                    software development
                    <span role="img" aria-label="sparkle">
                        ✨
                    </span>
                    . In my free time I enjoy learning new technologies, hacking on{' '}
                    <span className="underline cursor-pointer">
                        <Link href="/projects">side-projects</Link>
                    </span>
                    , and rock climbing!{' '}
                    <span role="img" aria-label="strong">
                        💪
                    </span>
                </p>
            </div>
        </PageWrapper>
    )
}

export default AboutSection
