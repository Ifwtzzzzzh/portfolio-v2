import { logoIconsList } from '../constants/index.js';

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-center marquee-item flex-none">
            <img src={icon.imgPath} alt={icon.name} />
        </div>
    );
};

const LogoSection = () => {
    return (
        <div className="relative my-10 md:my-20">
            <div className="gradient-edge" />
            <div className="gradient-edge" />
            <div className="marquee h-52">
                <div className="marquee-box gap-5 md:gap-12">
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}
                    {logoIconsList.map((icon) => (
                        <LogoIcon key={icon.name} icon={icon} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoSection;
