import React from 'react'

const page1 = () => {
  return (
    <div>
      <div>
        <h1 className='text-2xl font-bold mb-10 ml-8'>Atatürk 1881 - 1919 (1. Film)</h1>
      </div>
      <div className='flex  ml-8 mb-8'>
        <div>
          <img className='h-full w-80 rounded-lg opacity-90 hover:opacity-100 cursor-pointer' src="/6.jpg" alt="" />
        </div>
        <div className='ml-8'>
          <h3 className='font-bold'>Filmin Türü</h3>
          <h3 className='font-bold mb-4 opacity-70'>Dram, Tarihi, Biyografi</h3>
          <h3 className='font-bold'>Yönetmen</h3>
          <h3 className='font-bold mb-4 opacity-70'>Mehmet Ada Öztekin</h3>
          <h3 className='font-bold'>Oyuncular</h3>
          <h3 className='font-bold mb-4 opacity-70'>Aras Bulut İynemli, Songül Öden, Sarp Akkaya</h3>
          <h3 className='font-bold'>Vizyon Tarihi</h3>
          <h3 className='font-bold mb-4 opacity-70'>3 Kasım 2023</h3>
          <h3 className='font-bold'>Sinema Dağıtım</h3>
          <h3 className='font-bold mb-4 opacity-70'>CJ ENM</h3>
          <h3 className='font-bold'>Yapımcı</h3>
          <h3 className='font-bold mb-4 opacity-70'>Lanistar Medya</h3>
          <h3 className='font-bold'>Ülke</h3>
          <h3 className='font-bold mb-4 opacity-70'>Türkiye</h3>
          </div>
        <div className='ml-2'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/J6YdxsvH9j4?si=P6piHL3XstJodZGl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <h3 className='text-2xl font-bold mt-4'>Filmin Konusu</h3>
          <p  className='font-bold mb-4  opacity-70'>İki bölüm olarak izleyiciyle buluşan Atatürk 1881 - 1919'un ilk kısmında, Mustafa Kemal'in milli <br/> mücadelenin lideri olmaya giden basamakları tırmandığı dönemleri konu ediniyor.</p>
        </div>
        
       </div>
    </div>
  )
}

export default page1
