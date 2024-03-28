import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_1.jpg',
        }),
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          py: 20,
          display: { md: 'flex' },
          alignItems: { md: 'center' },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 30, md: 5 }}>
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {/* <Typography variant="overline" sx={{ color: 'secondary.main' }}>
              Эрүүл мэнд эрхэм баян
            </Typography> */}

            <Typography marginTop={15} marginLeft={3} textAlign="justify" sx={{ color: 'text.main' }}>
            Биеэ засаад гэрээ засах, гэрээ засаад төрөө засах гэх энэ сургаалын ард орших биеэ засаад гэдгийн учир бол хүн бүхэн эрүүл мэндийн, бие бялдрын, оюун ухааны, ёс зүйн гэх зэрэг олон ухаанд нэвтэрч амьдралдаа буулгасан байхад оршино. 
                <Box component="span" sx={{ color: 'primary.main' }}>
                  {` Тиймээс хамгийн түрүүнд бие засах нь чухал болой.`}
                </Box>
            </Typography>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={6} marginLeft={10}>
              <Image 
                marginLeft="30"
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="/assets/illustrations/Emneleg.jpg"
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
