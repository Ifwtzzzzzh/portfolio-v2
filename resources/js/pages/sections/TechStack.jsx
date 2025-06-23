import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TitleHeader from '../components/TitleHeader.jsx';
import { techStackIcons } from '../constants/index.js';
import TechIconCardExperience from '../model/TechIconCardExperience.jsx';

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.tech-card',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center',
                },
            },
        );
    });
    return (
        <div id="skills" className="flex-center section-padding">
            <div className="h-full w-full px-5 md:px-10">
                <TitleHeader title="How I Can Contribute & My Key Skills" sub="🤝 What I Bring to the Table" />
                <div className="tech-grid">
                    {techStackIcons.map((techStackIcon) => (
                        <div key={techStackIcon.name} className="card-border tech-card group overflow-hidden rounded-lg xl:rounded-full">
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIconCardExperience model={techStackIcon} />
                                </div>
                                <div className="padding-x w-full">
                                    <p>{techStackIcon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
