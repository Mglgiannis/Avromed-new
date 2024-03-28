import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

// import { fDate } from 'src/utils/format-time';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import Iconify from 'src/components/iconify';
import Button from '@mui/material/Button';
// import PostTimeBlock from '../common/post-time-block';

// ----------------------------------------------------------------------

export default function MarketingFeaturedPostItem({ post, index}) {
  return (
    <Stack
      direction={{
        xs: 'column',
        md: 'row',
      }}
      sx={{ bgcolor: 'background.default', borderRadius: 2 }}
    >
      <Image src={post.coverUrl} alt={post.title} sx={{ flexGrow: 1, height: { md: 400 } }} />

      <Stack
        justifyContent="space-between"
        sx={{
          mx: 'auto',
          p: { xs: 3, md: 5 },
          maxWidth: { md: 396 },
        }}
      >
        <Stack spacing={1}>

          {/* <Link component={RouterLink} href={paths.marketing.post} color="inherit" variant="h3">
            {post.title}
          </Link> */}
            <TextMaxLine variant="h4" textAlign="center">{post.title}</TextMaxLine>
          <TextMaxLine line={5} variant="body2" justifyContent="space-between" textAlign="justify"sx={{ color: 'text.secondary' }}>
            {post.description}
          </TextMaxLine>
          <Button
            size="large"
            color="inherit"
            // href={paths.marketing.posts}
            href={paths.marketing.post + `/${index}`}
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
          >
            Дэлгэрэнгүй
          </Button>
        </Stack>

        {/* <Stack direction="row" alignItems="center" sx={{ pt: 2, typography: 'body2' }}>
          <Avatar src={post.author.avatarUrl} sx={{ mr: 1 }} />
          {post.author.name}
        </Stack> */}
      </Stack>
    </Stack>
  );
}

MarketingFeaturedPostItem.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    coverUrl: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    createdAt: PropTypes.instanceOf(Date),
    author: PropTypes.shape({
      avatarUrl: PropTypes.string,
      name: PropTypes.string,
    }),
  }),
};
