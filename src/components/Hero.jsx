import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import React from 'react'

const Hero = () => {
    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: 'chars,words' })
        const paraSplit = new SplitText('.subtitle', { type: 'lines' })
        heroSplit.chars.forEach((char) => { char.classList.add('text-gradient') })

        gsap.from(heroSplit.chars, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.06,
            duration: 1.8,
            ease: 'expo.out',
        })
        gsap.from(paraSplit.lines, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.06,
            duration: 1.8,
            ease: 'expo.out',
            delay:1
        })
        gsap.timeline({
            scrollTrigger:{
                start:'top top',
                trigger:'#hero',
                end:'bottom top',
                scrub:1,
                markers:true,
            }
        })
        .to('.left-leaf',{yPercent:-200},0)
        .to('.right-leaf',{yPercent:200},0)

    })
    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>MOJITO</h1>
                <img src="/images/hero-right-leaf.png" alt="leaf" className='right-leaf' />
                <img src="/images/hero-left-leaf.png" alt="leaf" className='left-leaf' />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                            <p className="subtitle">
                                Sip the Spirit <br /> of Summer
                            </p>
                        </div>
                        <div className="view-cocktails">
                            <p className='subtitle'>
                                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero