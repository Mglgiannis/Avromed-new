import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function MarketingContactInfo() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Stack spacing={3}>
      {mdUp && (
        <Image
          alt="marketing contact"
          src="/assets/illustrations/illustration_marketing_contact.svg"
          sx={{ maxWidth: 380 }}
        />
      )}

      <Stack spacing={2} direction="row" alignItems="flex-start">
        <Iconify icon="carbon:location" width={28} />

        <Stack spacing={0.5}>
          <Stack spacing={1} direction="row" alignItems="center">
            <Typography variant="h6">Хаяг</Typography>

            <Link sx={{ lineHeight: 0 }}>
              <Iconify icon="carbon:launch" width={18} />
            </Link>
          </Stack>

          <Link color="inherit" variant="body2" href="https://www.google.com/maps/place/AVROMED/@47.9092963,106.9255672,17.42z/data=!4m16!1m9!4m8!1m0!1m6!1m2!1s0x5d9693809e8c191f:0x1e4b3933ca2ca28!2zV1c1SCtGNjggQVZST01FRCwg0KPQu9Cw0LDQvdCx0LDQsNGC0LDRgCAxNDIzMA!2m2!1d106.9280756!2d47.9086684!3m5!1s0x5d9693809e8c191f:0x1e4b3933ca2ca28!8m2!3d47.9086684!4d106.9280756!16s%2Fg%2F11j4lnh14n?entry=ttu">
            WW5H+F68, Улаанбаатар 14230
          </Link>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:mobile" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Утас</Typography>
          <Typography variant="body2">77175858</Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:email" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Имэйл</Typography>
          <Link color="inherit" variant="body2" href="mailto:Avromed@gmail.com">
            Avromed@gmail.com
          </Link>
        </Stack>
      </Stack>

      <Stack spacing={2} alignItems="flex-start" direction="row">
        <Iconify width={28} icon="carbon:time" />
        <Stack spacing={0.5}>
          <Typography variant="h6">Ажлын цаг</Typography>
          <Typography variant="body2">Mon-Fri: 9 am — 6 pm</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
