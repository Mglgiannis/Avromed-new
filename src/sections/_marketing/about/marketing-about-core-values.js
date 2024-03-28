import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Мэдлэг чадвар',
    description: 'Бид өндөр боловсрол, ур чадвартай мэргэжилтэнтэй.',
    icon: '/assets/icons/1.png',
  },
  {
    title: 'Найдвартай үйлчилгээ',
    description: 'Бид чанартай, түргэн шуурхай, хариуцлагатай үйлчилнэ.',
    icon: '/assets/icons/2.png',
  },
  {
    title: 'Судалгаа шинжилгээ',
    description: 'Бид шинэ эмчилгээ нэвтрүүлж, тэмүүлэлтэй хөгжинө.',
    icon: '/assets/icons/3.png',
  },
  {
    title: 'Энэрэл, Хүндэтгэл',
    description: 'Бид энэрэнгүй, хүндэтгэлтэй, ёс зүйтэй хандана.',
    icon: '/assets/icons/4.png',
  },
];

// ----------------------------------------------------------------------

export default function MarketingAboutCoreValues() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        pt: { xs: 5, md: 10 },
        pb: { xs: 5, md: 15 },
      }}
    >
      <Typography variant="h2" sx={{ mb: { xs: 8, md: 10 } }}>
      Үнэт зүйлс
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gap: 8,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {CORE_VALUES.map((value) => (
          <Box key={value.title}>
            <SvgColor
              src={value.icon}
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                color: 'primary.main',
              }}
            />

            <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
              {value.title}
            </Typography>

            <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
