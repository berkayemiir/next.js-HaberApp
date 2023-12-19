import React from 'react'

const page = () => {
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
          image: '/4.jpg',
          detail: 'Ölümlü Dünya 2',
          buttonText: 'Detaya Git',
          link: '/olumlu', // Her kartın kendi link'i
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
    
      const groupedCards = chunkArray(cardData, 3);
  return (
    <div className='flex'>
      <div>
        <div className='ml-8 mt-12'>
            <img className='rounded-3xl' src="/profil.png " alt="" />
            <p className='font-bold mt-4'>berkay emir</p>
            <p className='font-bold opacity-70 mb-4'>berkayemiir</p>
            <p className='text-lg mb-10'>Merhaba,25 yaşındayım istanbul'da <br /> yaşıyorum. Yazılım alanında kendimi <br /> geliştirmekteyim.</p>
        </div>
       
          

       
      </div>
      <div className='ml-16 mb-16'>
      
      <h1 className='text-2xl font-bold text-center' >Favori Filmlerim</h1>
     
      {groupedCards.map((group, groupIndex) => (
        <div key={groupIndex} className="flex flex-wrap justify-center">
          {group.map((card, index) => (
            <div
              key={index}
              className="max-w-sm m-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-1  text-xl font-bold "
            >
              <a href="#">
                <img className="rounded-t-lg w-72 opacity-90 hover:opacity-100" src={card.image} alt="" style={{ maxWidth: '470px' }} />
              </a>
              <div className="p-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.detail}</p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
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
    
     
    </div>
    </div>
  )
}

export default page
