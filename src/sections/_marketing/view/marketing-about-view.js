'use client';

import { _members, _brandsColor, _testimonials } from 'src/_mock';

import MarketingAbout from '../about/marketing-about';
import MarketingTeamAbout from '../team/marketing-team-about';
import MarketingAboutStory from '../about/marketing-about-story';
import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import MarketingAboutOurClients from '../marketing-about-our-clients';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import MarketingAboutOurVision from '../about/marketing-about-our-vision';
import MarketingAboutCoreValues from '../about/marketing-about-core-values';
import Contactinfo from '../../_elearning/view/elearning-contact-view';

// ----------------------------------------------------------------------

export default function MarketingAboutView() {
  return (
    <>
      <MarketingAbout />

      <MarketingAboutOurVision />

      <MarketingAboutCoreValues />

      <MarketingAboutStory />

      <MarketingTeamAbout members={_members} />

      <MarketingAboutOurClients brands={_brandsColor} />

      <MarketingTestimonial testimonials={_testimonials} />

      <MarketingLandingFaqs />
      <Contactinfo />
    </>
  );
}
