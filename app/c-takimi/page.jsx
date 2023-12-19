import React from 'react'

const page = () => {
  return (
    <div>
          <div>
      <div className='ml-8 mb-10 flex'>
        <div>
        <h1 className='text-2xl font-bold mb-8'>C Takımı filminden teaser yayınlandı</h1>
        <img className='rounded-lg' src="/c.jpg" alt="" />
        <p className='mt-4 mb-4 font-bold'>İlkokulda aynı sınıfta okuyan haşarı arkadaşların otuz yıl sonra bir araya <br /> gelmeleriyle yaşadıklarını konu edinen C Takımı'ndan teaser yayınlandı. Film, 16 Şubat 2024'te sinemalarda vizyona girecek.</p>
        <hr />
        <p className='mb-4 mt-4 opacity-80'>Oyuncu kadrosunda Murat Akkoyunlu, Sera Tokdemir, Toygan Avanoğlu, Emir Sefa <br /> Yıldırım, Barış Başar, Hakan Bulut, Ömer Kurt, Turgay Tanülkü, Altan Erkekli gibi <br /> isimlerin yer aldığı C Takımı filminden teaser yayınlandı.</p>
        <p className='mb-4 opacity-80'>Barış Başar'ın senaryosunu kaleme aldığı, yönetmen koltuğunda Bora Onur'un <br /> oturduğu C Takımı, ilkokulda okudukları C sınıfının tembel öğrencileri olan bir grup <br /> arkadaşın, 30 yıl sonra bir araya geldiklerinden başlarından geçenleri anlatıyor. Film, <br /> 16 Şubat 2024'te sinemalarda vizyona girecek.</p>
        </div>
        
        <div className='mt-16  '>
        <iframe className='rounded-lg' width="560" height="350" src="https://www.youtube.com/embed/UNrJy51JiH8?si=J7CCgdbUAe7h_IYr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      
      </div>
      </div>
    </div>
    </div>
  )
}

export default page
