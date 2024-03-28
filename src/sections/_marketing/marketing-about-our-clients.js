import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function MarketingAboutOurClients({ brands }) {
  return (
    <Container
      sx={{
        pb: { xs: 7, md: 11 },
      }}
    >
      <Stack alignItems="center" spacing={5}>
        <Typography variant="h2">Хамтрагч байгууллага</Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          sx={{ maxWidth: 680, overflow: 'hidden' }}
        >
            <Box >
             <Image
                visibleByDefault
                disabledEffect
                alt="teacher"
                src="../../assets/images/course/storepay.png"
                sx={{ width: 300, height: 80}}
              />
            </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

MarketingAboutOurClients.propTypes = {
  brands: PropTypes.array,
};
