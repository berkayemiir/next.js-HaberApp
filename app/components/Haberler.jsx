import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold mb-8 border-b border-cyan-400 inline-block'>Yerli Filmlerden Haberler</h1>
      <Link href='/eksi' className='flex mb-8 border max-w-4xl rounded-lg shadow  duration-300 hover:border hover:border-cyan-400'>
        <div>
          <img className='w-96 rounded-s-lg cursor-pointer opacity-80 hover:opacity-100' src="/eksi.png" alt="" />
        </div>
        <div className='ml-8 mt-4'>
          <p className='font-bold opacity-70 mb-2 text-sm'>12 Aralık 2023</p>
          <p className='font-bold text-lg'>15 Aralık'ta vizyona girecek Nefes- <br />Yer Eksi İki'den yeni fragman <br /> yayınlandı</p>
        </div>
      </Link>
      <Link href="/c-takimi" className='flex mb-8 border max-w-4xl rounded-lg shadow  duration-300 hover:border hover:border-cyan-400'>
        <div>
          <img className='w-96 rounded-s-lg cursor-pointer opacity-80 hover:opacity-100' src="/c.jpg" alt="" />
        </div>
        <div className='ml-8 mt-4'>
          <p className='font-bold opacity-70 mb-2 text-sm'>12 Aralık 2023</p>
          <p className='font-bold text-lg'>C Takımı filminden teaser <br /> yayınlandı</p>
        </div>
      </Link>
      <Link href="/olum" className='flex mb-8 border max-w-4xl rounded-lg shadow  duration-300 hover:border hover:border-cyan-400'>
        <div>
          <img className='w-96 rounded-s-lg cursor-pointer opacity-80 hover:opacity-100' src="/olum.jpg" alt="" />
        </div>
        <div className='ml-8 mt-4'>
          <p className='font-bold opacity-70 mb-2 text-sm'>11 Aralık 2023</p>
          <p className='font-bold text-xl'>Ölümlü Dünya 2, <br /> yaklaşık 271 bin seyirciyle liderliğini <br /> sürdürdü.</p>
        </div>
      </Link>
      <Link href="/demon" className='flex mb-8 border max-w-4xl rounded-lg shadow  duration-300 hover:border hover:border-cyan-400'>
        <div>
          <img className='w-96 rounded-s-lg cursor-pointer opacity-80 hover:opacity-100' src="/demon.jpg" alt="" />
        </div>
        <div className='ml-8 mt-4'>
          <p className='font-bold opacity-70 mb-2 text-sm'>8 Aralık 2023</p>
          <p className='font-bold text-xl'>Demon:Azab-ül Kem filminden <br /> yeni bir fragman yayınlandı</p>
        </div>
      </Link>
      <div className=''>
        <a
          href='https://boxofficeturkiye.com/haberler/yerli-film-haberleri'
          style={{ display: 'inline-block', width: '150px', paddingTop: '10px' }}
          className='relative bg-neutral-600 w-40 h-12 rounded-lg text-lg font-bold text-center text-white mb-4 overflow-hidden group'
        >
          Daha Fazlası
          <span className="absolute inset-x-0 bottom-0 h-1 bg-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </a>

      </div>
    </div>
  );
};

export default Page;

