import React from 'react'

const page = () => {
  return (
    <div>
            <div>
                <div className='ml-8 mb-10 flex'>
                    <div>
                        <h1 className='text-2xl font-bold mb-8'>Box Office Türkiye: Ölümlü Dünya 2, yaklaşık 271 <br /> bin seyirciyle liderliğini sürdürdü</h1>
                        <img className='rounded-lg' src="/olum.jpg" alt="" />
                        <p className='mt-4 mb-4 font-bold'>Ölümlü Dünya 2, gösterimdeki ikinci hafta sonunda yaklaşık 271 bin <br /> seyirciyle gişe liderliğini sürdürdü. Film, on günde toplamda yaklaşık 930 <br /> bin seyirci tarafından izlendi.</p>
                        <hr />
                        <p className='mb-4 mt-4 opacity-80'>Bir önceki hafta sonunda Box Office Türkiye'ye hızlı bir giriş yapan Ölümlü Dünya 2 <br />, vizyondaki ikinci hafta sonunda 271 bin 95 seyirciyle gişenin zirvesindeki yerini korudu. <br /> Film, gösterimdeki ilk on gününde toplamda yaklaşık 930 bin seyirci tarafından <br /> izlendi.</p>
                       
                    </div>

                    <div className='mt-24 ml-10 '>
                    <iframe className='rounded-lg' width="560" height="350" src="https://www.youtube.com/embed/PnQrVt3Vvxc?si=nPHBBq7ynXLfB3PF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default page
