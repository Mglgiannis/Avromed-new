import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'success', 'warning'];

const SERVICES = [
  {
    name: 'Cудас оношилгоо',
    icon: '/assets/icons/service/hospital.svg',
    content: 'Cyдас оношлогоо гэдэг нь хүний бие махбод болоод байгаль сав, шим ертөнцийн таван махбод, хий, шар, бадганы харилцан хамаарал тэдгээрийн өөр хоорондын нарийн зүй тогтол шүтэн барилдлагаар дотор таван цул, зургаан сав эрхтэн, гадар болон дотор бүх өвчнийг судсаар оношлох бүх боломжийг бүрдүүлж байдаг.',
    path: paths.marketing.posts,
  },
  {
    name: 'ЗҮҮ ЭМЧИЛГЭЭ',
    icon: '/assets/icons/service/zuu.svg',
    content: 'Биеийн гадаргууд байрладаг биологийн идэвхтэй сүвэнд зүү хатгаж арьс, булчин шөрмөс, суллан мэдрэхүйд сэдээн цочроох замаар судас-мэдрэлийн тогтолцоог даган тасралтгүй эргэлдэх энерги цусны урсгалыг сэргээн, биологийн идэвхт бодисын ялгаралтыг идэвхжүүлэн нэмэгдүүлж, мэдрэл-шүүрэл-дархлалын тогтолцоог тэнцвэржүүлэн, бие махбодын үйл ажиллагааг тэгшитгэн эмгэгийг анагааж, бие махбодын өвчин эсэргүүцэх болон дасан зохицох чадварыг өндөржүүлнэ. ',
    path: paths.marketing.posts,
  },
  {
    name: 'ТӨӨНҮҮР ЗАСАЛ',
    icon: '/assets/icons/service/tuunuur.png',
    content: 'Биеийн гадаргуу дээрх биологийн идэвхтэй бэлчрүүдээр дулааны болон эмт бодисын үйлдлийг бие махбодод дамжуулан дархлалын тогтолцоог идэвхжүүлж, цус, тунгалгийн бичил эргэлтийг сэргээж, илчийг үүсгэх, хий цусны гүйдлийг тэгшитгэж өвдөлт намдаана. Төөнүүр засал дам болон шууд гэж хоёр янз байдаг.',
    path: paths.marketing.posts,
  },
  {
    name: 'УАУ-НЫ ТОСОН ЗАСАЛ БУЮУ БАРИА ЗАСАЛ',
    icon: '/assets/icons/service/massage.svg',
    content: 'Суваг хэрдэс дагууд илэх, нухах, үрэх, чичиргэж доргиох аргаар арьс арьсан доорх өөхлөг эд, булчин, шөрмөс, хөлс, тосны булчирхайд сэдээлт өгч улмаар мэдрэлийн ширхэг, бичил цусны эргэлт, тунгалгийн зангилгаагаар дамжуулан тайвшруулах, цусны эргэлтийг сэргээх, арьсны тэжээллэг чанарыг нэмэгдүүлэх, булчин сулруулах, үрэвслийг дарах., өвдөлт намдаах',
    path: paths.marketing.posts,
  },
];

// ----------------------------------------------------------------------

export default function MarketingLandingServices() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 0 },
      }}
    >
      <Stack
        spacing={0}
        marginTop={5}
        sx={{
          maxWidth: 480,
          maxHeight: 50,
          mb: { xs: 5, md: 0 },
          mx: { xs: 'auto', md: 'unset' },
          textAlign: { xs: 'center', md: 'unset' },
        }}
      >
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Үйлчилгээ
        </Typography>

        <Typography variant="h4">Монголын уламжлалт анагаах ухааны оношилгоо болон эмчилгээ</Typography>

        <Typography sx={{ color: 'text.secondary' }}>
         Бид дараах үйлчилгээнүүдийг явуулж байна.
        </Typography>
      </Stack>

      {/* <Box
        sx={{
          gap: 4,
          display: 'grid',
          alignItems: 'center',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.name} service={service} index={index} />
        ))}
      </Box> */}
    </Container>
  );
}

// ----------------------------------------------------------------------

function ServiceItem({ service, index }) {
  const { name, icon, content, path } = service;

  return (
    <Card
      sx={{
        px: 4,
        py: 5,
        textAlign: 'center',
        ...(index === 1 && {
          py: { xs: 5, md: 8 },
        }),
        ...(index === 2 && {
          py: { xs: 5, md: 10 },
          boxShadow: (theme) => ({ md: theme.customShadows.z24 }),
        }),
      }}
    >
      <SvgColor
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: 'auto',
          color: (theme) => theme.palette[COLORS[index]].main,
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <TextMaxLine variant="h6">{name}</TextMaxLine>
        <TextMaxLine variant="body2" sx={{ color: 'text.secondary' }}>
          {content}
        </TextMaxLine>
      </Stack>

      <IconButton
        component={RouterLink}
        href={path}
        color={
          (index === 0 && 'primary') ||
          (index === 1 && 'secondary') ||
          (index === 2 && 'success') ||
          'warning'
        }
      >
        <Iconify icon="carbon:direction-straight-right" />
      </IconButton>
    </Card>
  );
}

ServiceItem.propTypes = {
  index: PropTypes.number,
  service: PropTypes.shape({
    name: PropTypes.string,
    path: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
};
