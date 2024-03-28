import { _mock } from './_mock';

// ----------------------------------------------------------------------

export const _categories = [
  { label: 'Marketing', path: '' },
  { label: 'Community', path: '' },
  { label: 'Tutorials', path: '' },
  { label: 'Business', path: '' },
  { label: 'Management', path: '' },
];

// ----------------------------------------------------------------------

export const _testimonials = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  role: _mock.role(index),
  avatarUrl: _mock.image.avatar(index),
  createdAt: _mock.time(index),
  ratingNumber: 5,
  review:
    'Бид чанартай, түргэн шуурхай, хариуцлагатай үйлчилнэ. AVRO MED Уламжлалт Анагаах Ухааны Эмнэлэгийн хамт олон мэндчилж байна.',
}));

// ----------------------------------------------------------------------

export const _socials = [
  {
    value: 'facebook',
    label: 'FaceBook',
    icon: 'carbon:logo-facebook',
    color: '#1877F2',
    href: 'https://www.facebook.com/AvroMedMongolia',
  },
  {
    value: 'instagram',
    label: 'Instagram',
    icon: 'carbon:logo-instagram',
    color: '#E02D69',
    href: 'https://www.instagram.com/avro.med/?fbclid=IwAR2E_3EclbdYS_kDOzeXJsCyvIPO3UijmACEoMDd7upB2TyfMqa5P09mIG4',
  },
  {
    value: 'linkedin',
    label: 'Linkedin',
    icon: 'carbon:logo-linkedin',
    color: '#007EBB',
    // href: 'https://www.facebook.com',
  },
  {
    value: 'twitter',
    label: 'Twitter',
    icon: 'carbon:logo-twitter',
    color: '#00AAEC',
    // href: 'https://www.facebook.com',
  },
];

// ----------------------------------------------------------------------

const LAT_LONG = [
  [33, 65],
  [-12.5, 18.5],
  [20.96, 26.27],
];

export const _offices = ['Jordan', 'Canada', 'AVRO MED'].map((office, index) => ({
  id: _mock.id(index),
  country: office,
  address: _mock.fullAddress(index),
  phoneNumber: _mock.phoneNumber(index),
  email: _mock.email(index),
  photo: _mock.image.travel(index + 4),
  latlng: LAT_LONG[index],
}));

// ----------------------------------------------------------------------

const BRANDS_NAME = [
  'airbnb',
  'dropbox',
  'facebook',
  'google',
  'heroku',
  'lenovo',
  'microsoft',
  'netflix',
  'slack',
  'spotify',
  'tripadvisor',
  'vimeo',
];

export const _brands = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}.svg`,
}));

export const _brandsColor = BRANDS_NAME.map((brand, index) => ({
  id: _mock.id(index),
  name: brand,
  image: `/assets/logo/${brand}_original.svg`,
}));

// ----------------------------------------------------------------------

export const _faqs = [
  'Савны хий, голын хий гаргадаг уу ?',
  'Ардын уламжлалт анагаах гэж хүмүүс хольж ойлгох нь их байдаг.',
  'Барианы цаг эсвэл массажны цаг авах гэсэн юм ?',
  'Бусад'
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer: getAnswerForQuestion(question), 
}));

function getAnswerForQuestion(question) {
  switch (question) {
    case 'Савны хий, голын хий гаргадаг уу ?':
      return 'Хүн бол шаар биш энд тэнд нь дарахад биеэс гарч буй агаар, газ нь УАУ-ны хий, шар, бадганы онолын ХИЙ биш юм. Хий бол бидний бүх эд эрхтэн тогтолцооны үйл ажиллагааг хариуцдаг, биеийг хөдөлгөгч, амьд байлгаж байгаа гол зүйл юм.';
    case 'Ардын уламжлалт анагаах гэж хүмүүс хольж ойлгох нь их байдаг.':
      return 'Уламжлалт анагаах ухаан нь онолтой мөн онолын дагуу оношилгоо хийж оношилгоонд тохирсон эмчилгээний тактикийг боловсруулж шат дарааллын дагуу эмчилгээ үйлчилгээг хийж гүйцэтгэдэг тусдаа салбар. Ардын эмчилгээ гэхлээр онолоос илүүтэйгээр ийм үед ингэдэг гэсэн туршлага дээр  үндэслэн шууд хийгддэг үйлдэл байдаг.';
    case 'Барианы цаг эсвэл массажны цаг авах гэсэн юм ?':
      return 'Уламжлалт анагаах ухааны эмнэлэгт хийгдэж байгаа үйлдэл нь өөрөө өвчнийг болон тухайн өвчний шалтгаанд чиглэсэн байдаг учир эмчилгээ гэж яривал зохино. Бариаг ихэвчлэн ардын эмчилгээний үед хэрэглэдэг, массаж бол алжаал тайлах газар болон саунд хэрэглэдэг нэр томьёо.';
    case 'Бусад':
      return 'Нэмэлт мэдээлэл авахыг хүсвэл манай холбоо барих хэсгийг ашиглана уу.';
    default:
      return 'Дэлгэрэнгүй мэдээлэл байхгүй байна.';
  }
}


export const _faqsSupport = [
  `[Covid] Seasonal Shopping Guide`,
  'I Want To Check Where My Order Is Delivered',
  '[Shipping Information] How To Contact The Shipping Unit/Look Up Shipping Information/Delivery Exchange?',
  '[Seller] Start Selling With Shopee',
  'Why Is My Account Locked/Limited?',
  'Free Shipping Code User Guide (Freeship Code)',
  'How To Buy / Order On Shopee App',
  `Why I Didn't Receive the Verification Code (OTP)?`,
  `Frequently Asked Questions About Product Reviews / Comments`,
  `How to Login Shopee Account When Forgot/Lost Password`,
].map((question, index) => ({
  id: _mock.id(index),
  question,
  answer:
    'Бид чанартай, түргэн шуурхай, хариуцлагатай үйлчилнэ. AVRO MED Уламжлалт Анагаах Ухааны Эмнэлэгийн хамт олон мэндчилж байна.',
}));
