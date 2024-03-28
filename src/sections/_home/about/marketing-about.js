import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, styled } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';

// import { fShortenNumber } from 'src/utils/format-number';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
// import CountUp from 'src/components/count-up';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SUMMARY = [
  { title: 'Жилийн туршлага', total: 4, icon: 'carbon:increase-level' },
  { title: 'Шагнал урамшуулал', total: 5, icon: 'carbon:trophy' },
  { title: 'Эрдэм шинжилгээний ажил', total: 20, icon: 'carbon:data-vis-4' },
  { title: 'Эмчлүүлэгчдийн тоо', total: 5000, icon: 'carbon:user-certification' },
];

// ----------------------------------------------------------------------

const StyledIcon = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  color: theme.palette[color].darker,
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  '&:before': {
    zIndex: 8,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  '& svg': {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAbout() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Container
      sx={{
        pt: { xs: 5, md: 10 },
        pb: 10,
      }}
    >
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        {mdUp && (
          <Grid xs={12} md={6} lg={5}>
            <Image alt="teams" src="/assets/illustrations/Teams.jpg" />
          </Grid>
        )}

        <Grid
          xs={12}
          md={6}
          lg={6}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography variant="h2">Бидний тухай</Typography>

          <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
           Арвомед эмнэлэг нь уламжлалт анагаах ухааны чиглэлээр амбулаторийн үйл ажиллагаагаа явуулдаг эмнэлэг юм.
            <br />
            <br />
            Уламжлалт анагаах ухаанд өвчнийг эмчилнэ гэдэг нь зөвхөн шинж тэмдэг арилгахаас илүүтэй тухайн өвчний яагаад, юунаас болж үүссэн шалтгааныг нь тухайн хүнд ойлгуулж, тайлбарлаж шаардлагатай эмийн болон эмийн бус эмчилгээг шат дараалалтайгаар хийж гүйцэтгэдэг.
          </Typography>

          {/* <Button
            variant="outlined"
            color="inherit"
            size="large"
            endIcon={<Iconify icon="carbon:chevron-right" />}
          >
            Check Our Work
          </Button> */}
        </Grid>
      </Grid>

      <Box
        sx={{
          mt: 10,
          textAlign: 'center',
          display: 'grid',
          gap: { xs: 5, md: 8 },
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SUMMARY.map((value, index) => (
          <div key={value.title}>
            <StyledIcon color={COLORS[index]}>
              <Iconify icon={value.icon} width={48} />
            </StyledIcon>
            <Typography sx={{ color: 'text.secondary' }}>{value.title}</Typography>
          </div>
        ))}
      </Box>
    </Container>
  );
}
