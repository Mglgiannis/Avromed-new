import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { fShortenNumber } from 'src/utils/format-number';

// import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

const ROWS = [
  {
    label: 'Жилийн туршлага',
    total: 4,
    content: 'Манай Уламжлалт Анагаах Ухааны Эмнэлэг нь байгуулагдсан цагаасаа эхлэн тогтмол үйл ажиллагаагаа явуулсаар байна.',
  },
  {
    label: 'Үйлчлүүлэгчид',
    total: 3000,
    content: 'Бид мянга мянган үйлчлүүлэгчдийнхээ эрүүл энхийн манаанд зогссоор байна.',
  },
  {
    label: 'Хамт олон',
    total: 15,
    content: 'Манай эмнэлэг нь жил ирэх тусам өргөжин тэлсээр өнөр өтгөн болсоор байна.',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingAbout() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      {/* <Image
        alt="landing about"
        src="/assets/images/marketing/marketing_post_hero.jpg"
        ratio="16/9"
        sx={{
          borderRadius: 1.5,
          mb: { xs: 5, md: 10 },
        }}
      /> */}

      <Grid
        container
        columnSpacing={{ xs: 0, md: 3 }}
        rowSpacing={{ xs: 5, md: 0 }}
        justifyContent="space-between"
      >
        <Grid
          xs={12}
          md={5}
          sx={{
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            Товчхон
          </Typography>

          <Typography variant="h2" sx={{ my: 3 }}>
            Бидний тухай
          </Typography>
          
          <Typography sx={{ color: 'text.secondary' }}>
          Уламжлалт анагаах ухааны үндсэн гол чиглэл бол Тэжээхүй ухаан буюу хүн өөрийн онцлогт тохирсон хоол хүнс амьдралын хэв маягийг гадна улиралд зохицуулах хэрэглэж сурах юм. Энэ нь эргээд олон өвчнөөс урьдчилан сэргийлэх арга билээ. Эртнээс Монголчууд энэхүү ухаанд суралцсан байсан ба  өдийг хүртэл өв соёл, ёс заншил хэлбэрээр бидний дунд үлдээж чадсан өвгөд дээдсийн маань ач юм. Гэхдээ сүүлийн үед элдэв бизнесийн тархи угаалт, маркетингийн золиос болсоор байвал Өв соёлтой минь хамт өмнөх үеийн өвгөдийн хийж бүтээсэн үлдээж чадсан ухаан бүдгэрэн бүдгэрсээр үгүй болох вий гэх болгоомжлол байна тиймийн учир ард иргэдийн дунд энэхүү ухааныг өвлүүлэн үлдээхэд гол утга учир зорилго маань оршиж байгаа. 
          </Typography>
          <Button
            size="large"
            color="inherit"
            endIcon={<Iconify icon="carbon:chevron-right" />}
            sx={{ my: 5 }}
          >
            Дэлгэрэнгүй
          </Button>

        </Grid>

        <Grid marginTop={5} xs={10} md={6}>
          <Stack spacing={8}>
            {ROWS.map((row) => (
              <Stack
                key={row.label}
                direction="row"
                alignItems="center"
                divider={
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ ml: 3, mr: 5, borderStyle: 'dashed' }}
                  />
                }
              >
                <Stack spacing={1} sx={{ width: 1, maxWidth: 100 }}>
                  <Stack direction="row">
                    <Typography variant="h2">{fShortenNumber(row.total)}</Typography>
                    <Box component="span" sx={{ color: 'primary.main', typography: 'h4' }}>
                      +
                    </Box>
                  </Stack>

                  <Typography variant="overline" sx={{ color: 'text.disabled' }}>
                    {row.label}
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {row.content}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
