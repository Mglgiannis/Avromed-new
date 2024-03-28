import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const content = (name) => `
<p>Дам төөнийг төөнөх сүвэндээ эмт бодис тавьж түүгээр дамжуулан төөнөнө. Шууд нь төөнөх сүв дээр төөнүүрийг тавьж төөнөх, эсвэл тодорхой зайнаас янжуур төөнөөр буюу төөнөх зориулалтын багажаар халаах, зохих тунг нь тааруулж төөнөнө.</p>
<br/>

<br/>
<br/>
<br/>
// <p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_01.jpg" /></p>
<br/>
<br/>
<br/>

<h4>Заалт:</h4>
<br/>

<p>Эс шингэсэн өвчин, хоол боловсруулах тогтолцооны хүйтнээс үүссэн шингээлтийн эмгэг, цайвар хаван, усан хаван, бэтэг, хүйтэн шар, үе гишүүний шар усны өвчин, бэтэг, биеийн чалх тамир доройтсон, эмэгтэйчүүдийн хий бүрэлдсэн өвчин, бадган хүйтнээр толгой өвдөх, зүрхний хий, солио, ой ухаан сулрах, адын эмгэг, шээс, бэлгийн замын хүйтэн өвчин, бадган, хийн гэмээр үүсгэгдсэн эмгэгүүд.</p>
<br/>

<h4>Эсрэг заалт:</h4>
<br/>

<p>Цус, шарын халуун давамгайлсан халуун өвчин, халдварт өвчин, гэмтсэн, хямарсан, хорын халуун өвчнүүд, амьсгалын замын харшлын өвчнүүд, үр дамжуулах сувагт төөнүүр хийхийг хориглоно.</p>
<br/>

<h4>Нэмэлт мэдээлэл:</h4>
<br/>

<p>Чүн чи буюу байлдаант (МЭӨ 722—481) улсын үед зохиогдсон хятадын анагаах ухааны том зохиол «Нэй-жин» Huangdi Neijing бичвэрт:
«Умарт хэмээх аглаг бөглүү говь орон болой. Газар нь өндөр, уур амьсгал нь тэсгим хүйтэн, тэндэх иргэд хээр оторлож цагаан идээ идмой. Хүйтэн өвчин олох аваас тусламой. Тиймийн тул төөнөх засал Умартаас ирвэй» гэжээ.
Умарт гэж өнөөгийн Монголчуудыг хэлэх ба Монголчуудын хэлбэр хэмжээг бичихдээ мушгирсан сур адил хатуу чанга биетэй олон давхар дээр өмсдөг улиралдаа зохицуулж хоолоо тэжээлийн байдал нь өөрчлөгддөг гэсэн байжээ.</p>

<br/>
<br/>
<br/>
// <p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_02.jpg" /></p>
<br/>
<br/>
<br/>
`;



const base = (index) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  description: _mock.description(index),
  detail : _mock.detail(index),
  category: 'Marketing',
  favorited: _mock.boolean(index),
  createdAt: _mock.time(index),
  duration: '8 minutes read',
  tags: _tags.slice(index + 1, index + 2),
  author: {
    name: _mock.fullName(index),
    role: _mock.role(index),
    avatarUrl: _mock.image.avatar(index),
    quotes: 'Member since Mar 15, 2021',
    about:
      'Манай АVRO MED Уламжлалт Анагаах Ухааны Эмнэлэг 2019 оноос хойш үйл ажиллагаагаа явуулсаар ирсэн.',
  },
});

// ----------------------------------------------------------------------

export const _marketingPosts = [...Array(21)].map((_, index) => ({
  ...base(index),
  content: content('marketing'),
  coverUrl: _mock.image.marketing(index),
  heroUrl: `/assets/images/marketing/marketing_post_hero.jpg`,
}));

export const _travelPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('travel'),
  coverUrl: _mock.image.travel(index),
  heroUrl: `/assets/images/travel/travel_post_hero.jpg`,
}));

export const _careerPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('career'),
  coverUrl: _mock.image.career(index),
  heroUrl: `/assets/images/career/career_post_hero.jpg`,
}));

export const _coursePosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('course'),
  coverUrl: _mock.image.course(index),
  heroUrl: `/assets/images/course/course_post_hero.jpg`,
}));
