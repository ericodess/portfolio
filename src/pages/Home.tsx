import React from 'react';
import { v4 } from 'uuid';

// Consts
import { Jobs, Projects } from '../data';

// Components
import { Navbar } from '../components';

// Services
import { LangContext } from '../context';

const BLUR_COEFFICIENT = 20;

const Home = () => {
    const [selectedLang, _] = React.useContext(LangContext);

    const navbarRef = React.createRef<HTMLDivElement>();

    const [isNavbarDarkModeActive, setIsNavbarDarkModeActive] = React.useState<boolean>(true);
    const [scrollY, setScrollY] = React.useState<number>(window.scrollY);

    React.useEffect(() => {
        addEventListener('scroll', () => {
            if (!navbarRef.current) {
                return;
            }

            setScrollY(window.scrollY);

            const pageContentComponentLocation = navbarRef.current.getBoundingClientRect().y + 150;

            if (window.scrollY <= pageContentComponentLocation && !isNavbarDarkModeActive) {
                setIsNavbarDarkModeActive(true);
            }

            if (window.scrollY >= pageContentComponentLocation && isNavbarDarkModeActive) {
                setIsNavbarDarkModeActive(false);
            }
        });
    }, [navbarRef, scrollY, isNavbarDarkModeActive]);

    return (
        <main className='home --page --flex-column'>
            <Navbar theme={isNavbarDarkModeActive ? 'DARK' : 'LIGHT'} />
            <div className='home__content --flex-column'>
                <ul className='home__content__socials --flex-column'>
                    <li>
                        <a href='https://github.com/pepeien' target='_blank' rel='noreferrer'>
                            <svg
                                viewBox='0 0 20 20'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                                xmlnsXlink='http://www.w3.org/1999/xlink'
                            >
                                <g transform='translate(-140.000000, -7559.000000)'>
                                    <g id='icons' transform='translate(56.000000, 160.000000)'>
                                        <path
                                            d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399'
                                            id='github-[#142]'
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a
                            href={`https://www.linkedin.com/in/erick-frederick-c/?locale=${selectedLang['LANGUAGE_LOCALE']}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z' />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href='mailto:erickfcaldeira@gmail.com' target='_blank' rel='noreferrer'>
                            <svg
                                viewBox='0 0 32 32'
                                version='1.1'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path d='M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z'></path>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className='home__content__title'>
                    <div
                        className='home__content__title__text --flex-column'
                        style={{
                            transform: `translate3d(0, ${-scrollY * 0.15}px, 0)`,
                            filter: `blur(${
                                ((scrollY * 1.2) / window.innerHeight) * BLUR_COEFFICIENT
                            }px)`,
                        }}
                    >
                        <div className='--flex-row'>
                            <h3>{selectedLang['ABOUT_TITLE']}</h3>
                            <h3>{selectedLang['ABOUT_TITLE_SECOND']}</h3>
                        </div>
                        <h2>{selectedLang['ABOUT_NAME']}</h2>
                    </div>
                </div>
                <div className='home__content__waves --flex-column'>
                    <svg
                        id='wave'
                        viewBox='0 0 1440 420'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{
                            transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
                            filter: `blur(${
                                ((scrollY * 0.3) / window.innerHeight) * BLUR_COEFFICIENT
                            }px)`,
                        }}
                    >
                        <defs>
                            <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
                                <stop stopColor='rgba(67, 101, 90, 1)' offset='0%'></stop>
                                <stop stopColor='rgba(190, 193, 198, 1)' offset='100%'></stop>
                            </linearGradient>
                        </defs>
                        <path
                            fill='url(#sw-gradient-0)'
                            d='M0,168L60,147C120,126,240,84,360,105C480,126,600,210,720,217C840,224,960,154,1080,112C1200,70,1320,56,1440,77C1560,98,1680,154,1800,182C1920,210,2040,210,2160,175C2280,140,2400,70,2520,70C2640,70,2760,140,2880,147C3000,154,3120,98,3240,84C3360,70,3480,98,3600,119C3720,140,3840,154,3960,147C4080,140,4200,112,4320,91C4440,70,4560,56,4680,98C4800,140,4920,238,5040,252C5160,266,5280,196,5400,140C5520,84,5640,42,5760,28C5880,14,6000,28,6120,42C6240,56,6360,70,6480,126C6600,182,6720,280,6840,266C6960,252,7080,126,7200,119C7320,112,7440,224,7560,259C7680,294,7800,252,7920,231C8040,210,8160,210,8280,203C8400,196,8520,182,8580,175L8640,168L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z'
                        ></path>
                    </svg>
                    <svg
                        id='wave-2'
                        viewBox='0 0 1440 420'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        style={{
                            transform: `translate3d(0, ${scrollY * 0.25}px, 0)`,
                            filter: `blur(${
                                ((scrollY * 0.22) / window.innerHeight) * BLUR_COEFFICIENT
                            }px)`,
                        }}
                    >
                        <defs>
                            <linearGradient id='sw-gradient-1' x1='0' x2='0' y1='1' y2='0'>
                                <stop stopColor='rgba(1, 56, 33, 1)' offset='0%'></stop>
                                <stop stopColor='rgba(82, 113, 113, 1)' offset='100%'></stop>
                            </linearGradient>
                        </defs>
                        <path
                            fill='url(#sw-gradient-1)'
                            d='M0,168L60,203C120,238,240,308,360,287C480,266,600,154,720,119C840,84,960,126,1080,147C1200,168,1320,168,1440,147C1560,126,1680,84,1800,91C1920,98,2040,154,2160,154C2280,154,2400,98,2520,119C2640,140,2760,238,2880,231C3000,224,3120,112,3240,91C3360,70,3480,140,3600,168C3720,196,3840,182,3960,182C4080,182,4200,196,4320,224C4440,252,4560,294,4680,315C4800,336,4920,336,5040,329C5160,322,5280,308,5400,315C5520,322,5640,350,5760,301C5880,252,6000,126,6120,84C6240,42,6360,84,6480,112C6600,140,6720,154,6840,140C6960,126,7080,84,7200,63C7320,42,7440,42,7560,35C7680,28,7800,14,7920,42C8040,70,8160,140,8280,168C8400,196,8520,182,8580,175L8640,168L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z'
                        ></path>
                    </svg>
                </div>
                <div className='home__content__wrapper' ref={navbarRef}>
                    <svg
                        id='wave-3'
                        viewBox='0 0 1440 420'
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <defs>
                            <linearGradient id='sw-gradient-2' x1='0' x2='0' y1='1' y2='0'>
                                <stop stopColor='rgba(52, 52, 52, 1)' offset='0%'></stop>
                                <stop stopColor='rgba(71, 69, 84, 1)' offset='100%'></stop>
                            </linearGradient>
                        </defs>
                        <path
                            fill='url(#sw-gradient-2)'
                            d='M0,336L60,315C120,294,240,252,360,196C480,140,600,70,720,91C840,112,960,224,1080,231C1200,238,1320,140,1440,147C1560,154,1680,266,1800,273C1920,280,2040,182,2160,161C2280,140,2400,196,2520,224C2640,252,2760,252,2880,259C3000,266,3120,280,3240,238C3360,196,3480,98,3600,56C3720,14,3840,28,3960,49C4080,70,4200,98,4320,98C4440,98,4560,70,4680,112C4800,154,4920,266,5040,266C5160,266,5280,154,5400,91C5520,28,5640,14,5760,42C5880,70,6000,140,6120,175C6240,210,6360,210,6480,231C6600,252,6720,294,6840,308C6960,322,7080,308,7200,252C7320,196,7440,98,7560,84C7680,70,7800,140,7920,168C8040,196,8160,182,8280,182C8400,182,8520,196,8580,203L8640,210L8640,420L8580,420C8520,420,8400,420,8280,420C8160,420,8040,420,7920,420C7800,420,7680,420,7560,420C7440,420,7320,420,7200,420C7080,420,6960,420,6840,420C6720,420,6600,420,6480,420C6360,420,6240,420,6120,420C6000,420,5880,420,5760,420C5640,420,5520,420,5400,420C5280,420,5160,420,5040,420C4920,420,4800,420,4680,420C4560,420,4440,420,4320,420C4200,420,4080,420,3960,420C3840,420,3720,420,3600,420C3480,420,3360,420,3240,420C3120,420,3000,420,2880,420C2760,420,2640,420,2520,420C2400,420,2280,420,2160,420C2040,420,1920,420,1800,420C1680,420,1560,420,1440,420C1320,420,1200,420,1080,420C960,420,840,420,720,420C600,420,480,420,360,420C240,420,120,420,60,420L0,420Z'
                        ></path>
                    </svg>
                    <div className='home__content__main'>
                        <section className='home__content__section home__content__section__projects'>
                            <div className='home__content__section__title'>
                                <h4>Projects</h4>
                            </div>
                            <div className='home__content__section__main'>
                                <ul>
                                    {Projects.map((project) => {
                                        return (
                                            <li key={v4()} className='project'>
                                                <div className='project__fader' />
                                                <img
                                                    className='project__thumbnail'
                                                    src={`${project.repoURL}/blob/master/.github/images/project-thumbnail.png?raw=true`}
                                                />
                                                <div className='project__data'>
                                                    <h5>{project.name}</h5>
                                                    <ul className='project__skills'>
                                                        {project.technologies.map((technology) => {
                                                            return <li key={v4()}>{technology}</li>;
                                                        })}
                                                    </ul>
                                                    <span>{project.description}</span>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </section>
                        <section className='home__content__section home__content__section__work'>
                            <div className='home__content__section__main'>
                                <ul>
                                    {Jobs.map((job) => {
                                        return (
                                            <li key={v4()}>
                                                <div>
                                                    {job.startDate}
                                                    {job.endDate ? ` - ${job.endDate}` : undefined}
                                                </div>
                                                <div>{job.company}</div>
                                                <div>{job.description}</div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className='home__content__section__title'>
                                <h4>History</h4>
                            </div>
                        </section>
                        <section className='home__content__section home__content__section__studies'>
                            <div className='home__content__section__title'>
                                <h4>Studies</h4>
                            </div>
                            <div className='home__content__section__main'>
                                <ul></ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
