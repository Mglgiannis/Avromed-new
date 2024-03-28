import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

function Logo({ single = false, sx }) {
  // const theme = useTheme();

  const singleLogo = (
    <Image
              alt="travel testimonial"
              src="/assets/images/travel/logo.jpg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 512 512"
            />
  );

  const fullLogo = (
    <Image
              alt="travel testimonial"
              src="/assets/images/travel/logo.jpg"
              sx={{ maxWidth: 100, ml: 'auto' }}
              width="60%"
              height="60%"
              fill="none"
              viewBox="0 0 512 512"
            />
  );

  return (
    <Link
      component={RouterLink}
      href="/"
      color="inherit"
      aria-label="go to homepage"
      sx={{ lineHeight: 0 }}
    >
      <Box
        sx={{
          width: single ? 64 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}

Logo.propTypes = {
  single: PropTypes.bool,
  sx: PropTypes.object,
};

export default memo(Logo);
