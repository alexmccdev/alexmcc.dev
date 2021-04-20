import React from 'react'
import PageWrapper from '@components/Layout/PageWrapper'
import ProjectCard from '@components/ProjectCard'

interface IProjectSectionProps {
    projects: Project[]
}

const ProjectSection: React.FC<IProjectSectionProps> = (props) => {
    return (
        <PageWrapper>
            <div className="h-full">
                {props.projects.map((p: Project) => (
                    <ProjectCard key={p.name} project={p} />
                ))}
                <p className="text-xl text-center mb-10">🛠️ More coming soon...</p>
            </div>
        </PageWrapper>
    )
}

export default ProjectSection
