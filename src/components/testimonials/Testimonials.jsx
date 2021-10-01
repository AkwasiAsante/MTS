import './testimonials.scss';

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: 'Akwasi Asante',
      title: 'Senior Developer',
      img: 'assets/major1.jpg',
      icon: 'assets/twitter.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.',
      link: 'https://www.twitter.com',
    },
    {
      id: 2,
      name: 'Ps Osei-Tutu',
      title: 'Director - APS',
      img: 'assets/kofi.jpg',
      icon: 'assets/youtube.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ',
      featured: true,
    },
    {
      id: 3,
      name: 'Miss Elizabeth',
      title: 'CEO of Divine 7 Bookshop',
      img: 'assets/lizzy.jpg',
      icon: 'assets/linkedin.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem',
      link: 'https://www.linkedin.com/',
    },
  ];

  return (
    <div className='testimonials' id='testimonials'>
      <h1>Testimonials</h1>
      <div className='container'>
        {data.map((d) => (
          <div className={d.featured ? 'card featured' : 'card'}>
            <div className='top'>
              <img src='assets/right-arrow.png' className='left' alt='' />

              <img className='user' src={d.img} alt='' />

              <img className='right' src={d.icon} alt='' />
            </div>
            <div className='center'>{d.desc}</div>
            <div className='bottom'>
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
