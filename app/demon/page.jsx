import React from 'react'

const page = () => {
    return (
        <div>
            <div>
                <div className='ml-8 mb-10 flex'>
                    <div>
                        <h1 className='text-2xl font-bold mb-8'>Demon: Azab-ül Kem filminden yeni bir <br /> fragman yayınlandı</h1>
                        <img className='rounded-lg' src="/demon.jpg" alt="" />
                        <p className='mt-4 mb-4 font-bold'>Mustafa Miraç Kaya'nın yönetmenliğini üstlendiği korku filmi Demon: <br /> Azab-ül Kem'den yeni bir fragman yayınlandı. Film, 5 Ocak 2024 tarihinde <br /> sinemalarda gösterime girecek.</p>
                        <hr />
                        <p className='mb-4 mt-4 opacity-80'>Mustafa Miraç Kaya'nın yazıp yönettiği Demon: Azab-ül Kem filminin ikinci fragmanı <br /> yayınlandı. Dağıtımcılığını Bir Film'in üstlendiği korku türündeki film, satanizm konulu <br /> büyük bir proje için gittikleri, Süryanilerin yaşadığı kasabada paranormal olaylar ile <br /> karşılaşan içerik üreticisi dört arkadaşın hikayesini takip ediyor.</p>
                        <p className='mb-4 opacity-80'>Yapımcılığını Ema Pictures Prod.'ın üstlendiği Demon: Azab-ül Kem filminin oyuncu <br /> kadrosunu Gizem Tan, İlkşans Tan, Revşan Tümay Genç, Serdal Yazıcı ve Sera Tübek <br /> oluşturuyor. Demon: Azab-ül Kem filmi 5 Ocak 2024 tarihinde vizyona girecek.</p>
                    </div>

                    <div className='mt-24 ml-10 '>
                    <iframe className='rounded-lg' width="560" height="350" src="https://www.youtube.com/embed/TxkOxaRHSM8?si=fVnN1G-8uxbJwyEO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
