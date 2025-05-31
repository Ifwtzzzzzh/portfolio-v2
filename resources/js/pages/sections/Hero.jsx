import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import Button from '../components/Button.jsx';
import { words } from '../constants/index.js';
import HeroExperience from '../model/HeroExperience.jsx';

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power2.inOut' });
    });
    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>
            <div className="hero-layout">
                {/* LEFT HERO CONTENT */}
                <header className="flex w-screen flex-col justify-center px-5 md:w-full md:px-20">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                Crafting
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center gap-1 pb-2 md:gap-3">
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className="bg-white-50 size-7 rounded-full p-1 md:size-10 md:p-2 xl:size-12"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>Apps Into</h1>
                            <h1>Real Life Solution</h1>
                        </div>
                        <p className="text-white-50">Hi, I'm Nosa a Flutter Developer from Indonesia.</p>
                        <Button className="h-12 w-60 md:h-16 md:w-80" id="counter" text="See My Work" />
                    </div>
                </header>

                {/* RIGHT HERO CONTENT */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    );
};

export default Hero;
