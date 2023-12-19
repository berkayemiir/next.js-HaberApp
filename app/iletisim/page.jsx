import React from 'react'

const page = () => {
    return (
        <div className='flex justify-center items-center bg-neutral-300 mb-8 '>
            <div className=''>
                <h1 className='text-3xl mb-4 mt-4 '>Bize Ulaşın</h1>
                <p className='mb-8'>Bize ulaştırmak istediğiniz mesajı aşağıdaki kutuya yazıp "Gönder" <br /> butonuna basınız. Yazacağınız mesaj sistemimiz tarafından ilgili kişiye <br /> yönlendirilecektir.</p>
                <p className='mb-8'>Lütfen bülten gönderimlerini berkayemiir@gmail.com mail adresi <br /> üzerinden yapınız.</p>
                
                <h1 className='text-3xl mb-2'>Adres</h1>
                <p className='mb-2'> Kadıköy/İstanbul</p>
                <h1 className='text-3xl mb-2'>Telefon Numaramız</h1>
                <a className=' font-bold' href="tel:+05428984761" >05428984761</a>

                <p className='font-bold mb-2 mt-4'>Adınız Soyadınız</p>
                <input className='mb-2 w-full border-none rounded-sm' type="text" name="" id="" placeholder='Adınızı Giriniz..' />
                <p className='font-bold mb-2'>E-Posta Adresiniz</p>
                <input className='mb-2 w-full border-none rounded-sm' type="text" name="" id="" placeholder='Mail Giriniz...'/>
                <p className='font-bold mb-2'>Mesajınız</p>
                <input className='mb-2 w-full border-none rounded-sm' type="text" name="" id="" placeholder='Mesajınızı Yazınız...'/>
                <br />
                <button className='mb-8 mt-8 w-full font-bold text-white bg-cyan-400 h-14 border-none rounded-md'>Mesajı Gönder</button>

            </div>
        </div>
    )
}

export default page
