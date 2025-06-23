import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlowCard from '../components/GlowCard.jsx';
import TitleHeader from '../components/TitleHeader.jsx';
import { expCards } from '../constants/index.js';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                },
            });
        });
        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress,
                    });
                },
            },
        });
        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                opacity: 0,
                xPercent: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%',
                },
            });
        }, '<'); // position parameter - insert at the start of the animation
    }, []);

    return (
        <section id="experience" className="flex-center section-padding xl:px-0">
            <div className="h-full w-full px-5 md:px-20">
                <TitleHeader title="Professional Work Experience" sub="💼 My Career Overview" />
                <div className="relative mt-32">
                    <div className="relative z-50 space-y-10 xl:space-y-32">
                        {expCards.map((card) => (
                            <div key={card.title} className="exp-card-wrapper">
                                <div className="xl:w-2/6">
                                    <GlowCard card={card}>
                                        <div>
                                            <img src={card.imgPath} alt="exp-img" />
                                        </div>
                                    </GlowCard>
                                </div>
                                <div className="xl:w-4/6">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div className="gradient-line h-full w-1" />
                                        </div>
                                        <div className="expText relative z-20 flex gap-5 md:gap-10 xl:gap-20">
                                            <div className="timeline-logo">
                                                <img src={card.logoPath} alt="logo" />
                                            </div>
                                            <div>
                                                <h1 className="text-3xl font-semibold">{card.title}</h1>
                                                <p className="text-white-50 my-5">🗓️&nbsp;{card.date}</p>
                                                <p className="text-[#839CB5] italic">Responsibilities</p>
                                                <ul className="text-white-50 ms-5 mt-5 flex list-disc flex-col gap-5">
                                                    {card.responsibilities.map((responsibility, index) => (
                                                        <li key={index} className="text-lg">
                                                            {responsibility}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
