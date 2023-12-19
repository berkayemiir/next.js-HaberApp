import React from 'react';

const Page = () => {
  const cardData = [
    {
      image: '/6.jpg',
      detail: 'Atatürk 1881 - 1919 (1. Film)',
      buttonText: 'Detaya Git',
      link: '/ataturk', // Her kartın kendi link'i
    },
    {
      image: '/2.jpg',
      detail: 'Nefes - Yer Eksi İki',
      buttonText: 'Detaya Git',
      link: '/nefes', // Her kartın kendi link'i
    },
    {
      image: '/3.jpg',
      detail: 'Haile 2: Var mı, Yok mu?!',
      buttonText: 'Detaya Git',
      link: '/haile', // Her kartın kendi link'i
    },
    {
      image: '/4.jpg',
      detail: 'Ölümlü Dünya 2',
      buttonText: 'Detaya Git',
      link: '/olumlu', // Her kartın kendi link'i
    },
    {
      image: '/5.jpg',
      detail: 'Öğretmen',
      buttonText: 'Detaya Git',
      link: '/ogretmen', // Her kartın kendi link'i
    },
    {
      image: '/1.jpg',
      detail: 'Vatikanın Şifresi: Bir Temel Macerası',
      buttonText: 'Detaya Git',
      link: '/vatikan', // Her kartın kendi link'i
    },
    {
      image: '/7.jpg',
      detail: 'Kolpaçino 4 4 lük',
      buttonText: 'Detaya Git',
      link: '/kolpa', // Her kartın kendi link'i
    },
    {
      image: '/8.jpg',
      detail: 'Murat Göğebakan: Kalbim Yaralı',
      buttonText: 'Detaya Git',
      link: '/murat', // Her kartın kendi link'i
    },
    // Diğer kartlar buraya eklenecek...
  ];

  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const groupedCards = chunkArray(cardData, 4);

  return (
    <div className='bg-neutral-300 mb-8'>
      <div className="max-w-7xl mx-auto py-4">
        <div className='flex justify-center items-center mb-8'>
          <div className='w-full text-center'>
            <h1 className='font-bold text-3xl border-b border-[#26C6DA] pb-1 mb-8 inline-block' >YAKINDA SİNEMALARDA</h1>
            <iframe className='w-full ' src="https://www.youtube.com/embed/LeCk90-TAcM?si=q6aN0JJJLsAhy5k4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen height={400} ></iframe>
          </div>
        </div>
        <div className='w-full text-center'>
          <h1 className='font-bold text-3xl text-center border-b border-[#26C6DA] pb-1 mb-8 inline-block'>YERLİ FİLMLER</h1>
        </div>
        {groupedCards.map((group, groupIndex) => (
          <div key={groupIndex} className="grid grid-cols-12 gap-4">
            {group.map((card, index) => (
              <div
                key={index}
                className="max-w-md col-span-6 lg:col-span-3 mb-4 bg-white border border-gray-200 rounded-lg shadow  duration-300 hover:border hover:border-cyan-400 dark:bg-gray-800 dark:border-gray-700   text-xl font-bold "
                width={320}
              >
                <a href="#">
                  <img className="rounded-t-lg w-full  opacity-90 hover:opacity-100 " src={card.image} alt="" style={{ maxWidth: '320px' }} />
                </a>
                <div className="p-5  w-80">
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">{card.detail}</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">{card.description}</p>
                  <a href={card.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-neutral-600 rounded-lg hover:bg-cyan-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {card.buttonText}
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="flex justify-center mb-8">
          <a href='https://boxofficeturkiye.com/haberler/yerli-film-haberleri'
            className='flex item-center justify-center bg-neutral-600 px-8 py-3 duration-300 rounded-lg text-lg font-bold text-center text-white hover:bg-neutral-800 '>
            Daha Fazla
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
