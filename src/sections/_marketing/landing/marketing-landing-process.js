import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const SERVICES = [
  {
    name: 'Оношилгоо',
    text: 'Асуух, харах, хүрэлцэх',
    icon: '/assets/icons/result.svg',
  },
  {
    name: 'Асуух',
    text: 'Өвчтөний түүхийн мэдээлэл',
    icon: '/assets/icons/question.svg',
  },
  {
    name: 'Харах',
    text: 'Орчин үеийн лабораторийн шинжилгээнүүд, биеийн ерөнхий байдал, арьсны өнгө, хэл, шээс гэх мэт',
    icon: '/assets/icons/search.svg',
  },
  {
    name: 'Хүрэлцэх',
    text: 'Судас оношилгоо болон тэмтрэх, харьцуулах',
    icon: '/assets/icons/hand.svg',
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingProcess() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          maxWidth: 480,
          mb: { xs: 8, md: 5 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Дараалал
        </Typography>

        <Typography variant="h2">Ажиллах зарчим</Typography>

        <Typography textAlign="justify" sx={{ color: 'text.secondary' }}>
        Уламжлалт анагаах ухааны оношилгооны бүх аргуудаар мэдээллийг цуглуулж эмч оношийг тавина. Тавьсан оношны дагуу эмчилгээний төлөвлөгөөг боловсруулж эмчлүүлэгчид танилцуулж өгнө. Эмчилгээнд зөв хооллолт, зөв амьдралын хэв маяг эмийн эмчилгээ, эмийн бус эмчилгээ гэсэн 4 байдлаар эмчилгээ явагдана.
        </Typography>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: 'grid',
          height: 200,
          alignItems: 'strech',
          justifyContent: 'center',
          gridTemplateColumns: {
            xs: 'repeat(2, 2fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.name}text={service.text}service={service} index={index} />
        ))}
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({ service, index }) {
  const { name, text, icon } = service;

  return (
    <Card
      sx={{
        p: 2,
        color: (theme) => theme.palette[COLORS[index]].darker,
        bgcolor: (theme) => theme.palette[COLORS[index]].light,
        boxShadow: (theme) => `-8px 12px 32px 0px ${alpha(theme.palette[COLORS[index]].main, 0.2)}`,
        ...(index === 0 && {
          mb: { md: 10.5 },
        }),...(index === 1 && {
          mb: { md: 10.5 },
        }),
        ...(index === 2 && {
          mb: { md: 2.5 },
        }),
        ...(index === 3 && {
          mb: { md: 8.5 },
        }),
      }}
    >
      {/* <SvgColor
        src={icon}
        sx={{
          width: 30,
          height: 30,
          opacity: 0.48,
        }}
      /> */}

      <Typography variant="h5" sx={{ mt: 0, textAlign: 'center' }}>
        {name}
      </Typography>
      <Typography variant="h6" sx={{ mt: 1, textAlign: 'center' }}>
        {text}
      </Typography>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    name: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};

