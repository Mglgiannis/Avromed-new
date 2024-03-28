import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { _socials, _offices } from 'src/_mock';

import ContactMap from 'src/components/map';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function ElearningContactInfo() {
  return (
    <Container
      sx={{
        pt: { xs: 5, md: 5 },
        pb: { xs: 10, md: 15 },
      }}
    >
      <Grid container spacing={3} justifyContent={{ md: 'space-between' }}>
        <Grid xs={12} md={6} lg={4}>
          <Typography
            variant="h2"
            sx={{
              mb: 5,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Холбоо барих
          </Typography>

          <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:email" width={24} sx={{ mr: 1 }} /> Имэйл
              </Stack>

              <Link color="inherit" variant="body2" href="mailto:Avromed@gmail.com">
              Avromed@gmail.com
              </Link>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:mobile" width={24} sx={{ mr: 1 }} /> Утас
              </Stack>

              <Typography variant="body2">77175858</Typography>
            </Stack>

            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Хаяг
              </Stack>

              <Link color="inherit" variant="body2" href="https://www.google.com/maps/place/AVROMED/@47.9092963,106.9255672,17.42z/data=!4m16!1m9!4m8!1m0!1m6!1m2!1s0x5d9693809e8c191f:0x1e4b3933ca2ca28!2zV1c1SCtGNjggQVZST01FRCwg0KPQu9Cw0LDQvdCx0LDQsNGC0LDRgCAxNDIzMA!2m2!1d106.9280756!2d47.9086684!3m5!1s0x5d9693809e8c191f:0x1e4b3933ca2ca28!8m2!3d47.9086684!4d106.9280756!16s%2Fg%2F11j4lnh14n?entry=ttu">
            WW5H+F68, Улаанбаатар 14230
            </Link>
            </Stack>
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" sx={{ typography: 'subtitle2' }}>
                <Iconify icon="carbon:location" width={24} sx={{ mr: 1 }} /> Ажлын цаг
              </Stack>
          <Typography variant="body2">Даваа-Ням: 09:00 — 18:00</Typography>
            </Stack>

            <Divider sx={{ borderStyle: 'dashed', width: 1 }} />

            <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="overline">Сошиал хаяг</Typography>
              <Stack direction="row">
                {_socials.map((social) => (
                  <IconButton key={social.value} href={social.href} color="inherit">
                    <Iconify icon={social.icon} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12} md={6} lg={7}>
          <ContactMap offices={_offices} sx={{ borderRadius: 2 }} />
        </Grid>
      </Grid>
    </Container>
  );
}
