import SocialIcons from '@components/Icons/SocialIcons'

const SocialLinkBar: React.FC = () => {
    return (
        <nav>
            <ul className="flex">
                <li>
                    <a className="flex mr-2" href={process.env.gitHubLink} target="_blank" rel="noreferrer noopener">
                        <SocialIcons name="GitHub" />
                    </a>
                </li>
                <li>
                    <a className="flex mr-2" href={process.env.linkedInLink} target="_blank" rel="noreferrer noopener">
                        <SocialIcons name="LinkedIn" />
                    </a>
                </li>
                <li>
                    <a className="flex" href={process.env.emailLink} target="_blank" rel="noreferrer noopener">
                        <SocialIcons name="Email" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default SocialLinkBar
