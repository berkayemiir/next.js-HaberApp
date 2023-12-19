import React from 'react'

const page = () => {
  return (
    <div>
    <div>
      <h1 className='text-2xl font-bold mb-10 ml-8'>Haile 2: Var mı, Yok mu?!</h1>
    </div>
    <div className='flex  ml-8 mb-8'>
      <div>
        <img className='h-full w-80 rounded-lg opacity-90 hover:opacity-100 cursor-pointer' src="/3.jpg" alt="" />
      </div>
      <div className='ml-8'>
        <h3 className='font-bold'>Filmin Türü</h3>
        <h3 className='font-bold mb-4 opacity-70'>Korku</h3>
        <h3 className='font-bold'>Yönetmen</h3>
        <h3 className='font-bold mb-4 opacity-70'>Alper Mestçi</h3>
        <h3 className='font-bold'>Oyuncular</h3>
        <h3 className='font-bold mb-4 opacity-70'>Gülşah Aydın, Betigül Ceylan, Ömer Gecü</h3>
        <h3 className='font-bold'>Vizyon Tarihi</h3>
        <h3 className='font-bold mb-4 opacity-70'>8 Aralık 2023</h3>
        <h3 className='font-bold'>Sinema Dağıtım</h3>
        <h3 className='font-bold mb-4 opacity-70'>CGV Mars D.</h3>
        <h3 className='font-bold'>Yapımcı</h3>
        <h3 className='font-bold mb-4 opacity-70'>Aytaç Medya</h3>
        <h3 className='font-bold'>Ülke</h3>
        <h3 className='font-bold mb-4 opacity-70'>Türkiye</h3>
        </div>
      <div className='ml-2'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/l-3ZWgKO2hA?si=c73Eyp9QMYghoMXp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3 className='text-2xl font-bold mt-4'>Filmin Konusu</h3>
        <p  className='font-bold mb-4  opacity-70'>Haile 2: Var mı, Yok mu?!, geçmişe hapsolmuş kabuslarla dolu bir evde <br /> yaşananları konu ediniyor.</p>
      </div>
      
     </div>
  </div>
  )
}

export default page