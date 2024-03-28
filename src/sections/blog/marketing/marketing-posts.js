import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
// import Pagination, { paginationClasses } from '@mui/material/Pagination';

import MarketingPostItem from './marketing-post-item';

// ----------------------------------------------------------------------

export default function MarketingPosts({ posts }) {
  return (
    <>
      <Box
        sx={{
          columnGap: 7,
          justifyContent: 'center',
          display: 'grid',
          rowGap: { xs: 7, md: 9 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(3, 2fr)',
          },
        }}
      >
        {posts.slice(0, 21).map((post, index) => (
          <MarketingPostItem key={post.id} post={post} index={index} />
        ))}
      </Box>

      {/* <Pagination
        count={10}
        color="primary"
        sx={{
          my: 10,
          [`& .${paginationClasses.ul}`]: {
            justifyContent: 'center',
          },
        }}
      /> */}
    </>
  );
}

MarketingPosts.propTypes = {
  posts: PropTypes.array,
};
