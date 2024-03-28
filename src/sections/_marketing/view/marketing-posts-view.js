'use client';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import {_marketingPosts } from 'src/_mock';
import PostSearchMobile from '../../blog/common/post-search-mobile';
import BlogMarketingPosts from '../../blog/marketing/marketing-posts';
import MarketingLandingServices from '../landing/marketing-landing-services';
// import BlogMarketingFeaturedPosts from '../../blog/marketing/marketing-featured-posts';

// ----------------------------------------------------------------------

export default function MarketingPostsView() {
  return (
    <>
      <PostSearchMobile />
      <MarketingLandingServices />

      {/* <BlogMarketingFeaturedPosts posts={_marketingPosts.slice(0, 5)} /> */}

      <Container spacing={0}
        sx={{
          mt: 30,
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 2 }}>
          <Grid xs={17} md={12}>
            <BlogMarketingPosts posts={_marketingPosts} />
          </Grid>

          {/* <Grid xs={12} md={4}>
            <PostSidebar
              popularTags={_tags}
              categories={_categories}
              recentPosts={{ list: _marketingPosts.slice(-4) }}
              advertisement={{
                title: 'Advertisement',
                description: 'Duis leo. Donec orci lectus, aliquam ut, faucibus non',
                imageUrl: _mock.image.marketing(9),
                path: '',
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}
