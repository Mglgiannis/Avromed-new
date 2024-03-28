'use client';

import {
  // _brands,
  _members,
  // _caseStudies,
  _testimonials,
  _marketingPosts,
  // _pricingMarketing,
} from 'src/_mock';

import { useScroll } from 'framer-motion';
import MainLayout from 'src/layouts/main';
import ScrollProgress from 'src/components/scroll-progress';

import MarketingTeam from '../team/marketing-team';
import MarketingLandingHero from '../landing/marketing-landing-hero';
import MarketingLandingFaqs from '../landing/marketing-landing-faqs';
import MarketingLandingAbout from '../landing/marketing-landing-about';
import MarketingTestimonial from '../testimonial/marketing-testimonial';
import MarketingLandingProcess from '../landing/marketing-landing-process';
import MarketingLandingServices from '../landing/marketing-landing-services';
import Contactinfo from '../../_elearning/view/elearning-contact-view';
import BlogMarketingFeaturedPosts from '../../blog/marketing/marketing-featured-posts';
// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <MarketingLandingHero />

      <MarketingLandingServices />

      <BlogMarketingFeaturedPosts posts={_marketingPosts.slice(0, 21)} />

      <MarketingLandingProcess />

      <MarketingTeam members={_members} />
      
      <MarketingLandingAbout />


      <MarketingLandingFaqs />

      <MarketingTestimonial testimonials={_testimonials} />
      <Contactinfo />
    </MainLayout>
  );
  }