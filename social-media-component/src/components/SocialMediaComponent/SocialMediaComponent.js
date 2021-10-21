import React from 'react';

const SocialMediaComponent = () => {
    return (
        <>
            <h1>This is our social media component!</h1>
            <section className='social-media-wrapper'>
                <ul>
                    <li>
                        <a
                            href='https://twitter.com/RocketTech'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Twitter'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://youtube.com/RocketTech'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='YouTube'>
                            <i className='fab fa-youtube'></i>
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://twitch.tv/rocketdevrel'
                            target='_blank'
                            rel='noreferrer'
                            aria-label='Twitch'>
                            <i className='fab fa-twitch'></i>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default SocialMediaComponent;
