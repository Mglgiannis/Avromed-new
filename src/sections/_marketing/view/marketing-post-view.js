'use client';

import { useCallback, useState } from 'react';

import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
// import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';
// import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';

// import { fDate } from 'src/utils/format-time';

import { _marketingPosts, _socials } from 'src/_mock';

// import Image from 'src/components/image';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import Iconify from 'src/components/iconify';
import Markdown from 'src/components/markdown';

// import PostTags from '../../blog/common/post-tags';
// import PostAuthor from '../../blog/common/post-author';
// import MarketingNewsletter from '../marketing-newsletter';
// import PostSocialsShare from '../../blog/common/post-socials-share';
// import MarketingLandingFreeSEO from '../landing/marketing-landing-free-seo';
import BlogMarketingLatestPosts from '../../blog/marketing/marketing-latest-posts';
// ----------------------------------------------------------------------

export default function MarketingPostView({ index }) {
  const { title, description, detail, createdAt, author, favorited, tags, content } =
    _marketingPosts[index];

  const [favorite, setFavorite] = useState(favorited);

  const [open, setOpen] = useState(null);

  const handleOpen = useCallback((event) => {
    setOpen(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(null);
  }, []);

  const handleChangeFavorite = useCallback((event) => {
    setFavorite(event.target.checked);
  }, []);

  return (
    <>
      <Container>
        <CustomBreadcrumbs
          sx={{ my: 3 }}
          links={[
            { name: 'Home', href: '/' },
            { name: 'Services', href: paths.marketing.posts },
            // { name: 'Title', title},
          ]}
        />
      </Container>

      <Divider />

      <Container>
        <Grid container spacing={0} justifyContent={{ md: 'center' }}>
          <Grid xs={12} md={8}>
            <Stack
              spacing={0}
              sx={{
                textAlign: 'center',
                pt: { xs: 5, md: 10 },
                pb: 5,
              }}
            >
              {/* <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                {duration}
              </Typography> */}

              <Typography variant="h2" component="h1">
                {title}
              </Typography>
              <Typography variant="h5">{description}</Typography>
            </Stack>

            <Divider />
            {/* <Stack direction="row" justifyContent="space-between" spacing={1.5} sx={{ py: 3 }}> */}
            {/* <Avatar src={author.avatarUrl} sx={{ width: 48, height: 48 }} /> */}

            {/* <Stack spacing={0.5} flexGrow={1}>
                <Typography variant="subtitle2">{author.name}</Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {fDate(createdAt, 'dd/MM/yyyy p')}
                </Typography>
              </Stack> */}

            {/* <Stack direction="row" alignItems="center">
                <IconButton onClick={handleOpen} color={open ? 'primary' : 'default'}>
                  <Iconify icon="carbon:share" />
                </IconButton>

                <Checkbox
                  color="error"
                  checked={favorite}
                  onChange={handleChangeFavorite}
                  icon={<Iconify icon="carbon:favorite" />}
                  checkedIcon={<Iconify icon="carbon:favorite-filled" />}
                />
              </Stack> */}
            {/* </Stack> */}

            <Divider sx={{ mb: 6 }} />

            <Markdown content={detail} firstLetter />

            {/* {tags.length && <PostTags tags={tags} />} */}

            {/* <PostSocialsShare /> */}

            <Divider sx={{ mt: 8 }} />

            {/* <PostAuthor author={author} /> */}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <BlogMarketingLatestPosts posts={_marketingPosts.slice(0, 4)} />

      {/* <MarketingLandingFreeSEO /> */}

      {/* <MarketingNewsletter /> */}

      <Popover
        open={!!open}
        onClose={handleClose}
        anchorEl={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        slotProps={{
          paper: {
            sx: { width: 220 },
          },
        }}
      >
        {_socials.map((social) => (
          <MenuItem key={social.value} onClick={handleClose}>
            <Iconify icon={social.icon} width={24} sx={{ mr: 1, color: social.color }} />
            Share via {social.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
MarketingPostView.propTypes = {
  index: PropTypes.number.isRequired, // Assuming index should be a number and is required
};
