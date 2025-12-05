import { Metadata } from 'next';
import AboutAreaFour from '@/components/about/about-area-4';
import AboutAreaFive from '@/components/about/about-area-5';
import BrandArea from '@/components/brand/brand-area';
import CounterArea from '@/components/counter/counter-area';
import TeamArea from '@/components/team/team-area';
import TextSliderArea from '@/components/text-slider/text-slider-area';
import VideoArea from '@/components/video/video-area';


export const metadata: Metadata = {
    title: "About - Housey Resort and Hotel Next JS Template",
};


export default function AboutPage() {
    return (
        <>

            {/* about area start */}
            <AboutAreaFour />
            {/* about area end */}

            {/* counter area start */}
            <CounterArea />
            {/* counter area end */}

            {/* text slider area start */}
            <TextSliderArea cls='tp-text-spacing' content_2={true} />
            {/* text slider area end */}

            {/* video area start */}
            <VideoArea />
            {/* video area end */}

            {/* hotel about area start */}
            <AboutAreaFive />
            {/* hotel about area end */}

            {/* team area start */}
            <TeamArea />
            {/* team area end */}

            {/* brand area start */}
            <BrandArea cls='tp-brand-border-2' />
            {/* brand area end */}
        </>
    )
}
