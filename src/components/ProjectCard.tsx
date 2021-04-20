import React from 'react'
import { ExternalLinkIcon } from '@components/Icons/OtherIcons'
import TechnologyIcons from '@components/Icons/TechnologyIcons'

interface IProjectCardProps {
    project: Project
}

const ProjectCard: React.FC<IProjectCardProps> = ({ project }) => {
    return (
        <article className="max-w-xl relative flex flex-col w-full p-4 mb-6 border-2 border-current">
            <div className="flex justify-between mb-4">
                <h2 className="chunky-underline-sm">{project.name}</h2>
                <a
                    className="tilt motion-reduce:transform-none cursor-pointer"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <ExternalLinkIcon />
                </a>
            </div>
            <div className="flex flex-1 mb-4">
                <p>{project.description}</p>
            </div>
            <div className="flex h-6">
                {project.technologies.map((t) => (
                    <span className="mr-4" key={t}>
                        <TechnologyIcons name={t} />
                    </span>
                ))}
            </div>
        </article>
    )
}

export default ProjectCard
