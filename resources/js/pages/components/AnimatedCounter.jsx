import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';
import { counterItems } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
    const counterRef = useRef(null);
    const countersRef = useRef([]);

    useGSAP(
        () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            countersRef.current.forEach((counter, index) => {
                if (!counter) return;
                const numberElement = counter.querySelector('.counter-number');
                const item = counterItems[index];
                gsap.set(numberElement, { innerText: '0' });
                gsap.to(numberElement, {
                    innerText: item.value,
                    duration: 2.5,
                    ease: 'power2.out',
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: '#counter',
                        start: 'top center',
                    },
                    onUpdate: () => {
                        const value = Math.floor(parseInt(numberElement.innerText));
                        numberElement.innerText = value;
                    },
                    onComplete: () => {
                        numberElement.textContent = `${item.value}${item.suffix}`;
                    },
                });
            });
        },
        { scope: counterRef },
    );

    return (
        <div id="counter" ref={counterRef} className="padding-x-lg mt-32 xl:mt-0">
            <div className="grid-4-cols mx-auto">
                {counterItems.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => (countersRef.current[index] = el)}
                        className="flex flex-col justify-center rounded-lg bg-zinc-900 p-10"
                    >
                        <div className="counter-number text-white-50 mb-2 text-5xl font-bold">0 {item.suffix}</div>
                        <div className="text-white-50 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;
