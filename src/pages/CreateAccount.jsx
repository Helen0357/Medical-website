import { Container, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css'
function CreateAccount() {
    useEffect(()=> {

        Aos.init({duration: 2000});
        
        } , []);
  return (
    <section className='create_account'>
        <section className='land text-center '>
            <Container>
                <NavBar />

                <h1 className='flex items-center justify-center heading gap-2 text-white text-lg py-14'>ارسال طلب انشاء حساب
                <IconButton onClick={()=> window.history.back()}>
                <img src='/assets/Vector.png' />
                </IconButton>
                </h1>
            </Container>
        </section>

       <section className='inf-form py-16 overflow-hidden'>
        <Container>
            <form >
               <section className='flex justify-between gap-4'>
               <section>
                    <h3 data-aos="fade-left">المعلومات العامة</h3>
                    <input data-aos="fade-right" type='text' placeholder='الاسم الثلاثي' />
                    <input data-aos="fade-left" type='email' placeholder='الايميل' />
                    <select data-aos="fade-right">
                        <option >النوع</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <select data-aos="fade-left">
                        <option >الاختصاص</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <h3 className='pt-5' data-aos="fade-right">كلمةالمرور</h3>
                    <input data-aos="fade-left" type='password' placeholder='كلمة المرور' />
                    <input data-aos="fade-right" type='password' placeholder='تاكيد كلمة المرور' />
                </section>
                <section>
                <h3 data-aos="fade-left">معلومات المركز</h3>
                <input data-aos="fade-right" type='text' placeholder='اسم المركز' />
                    <input data-aos="fade-left" type='text' placeholder='موقع المركز' />
                    <div data-aos="fade-right" className='flex items-center justify-between mt-4 mb-5'>
                        <h3 style={{marginBottom: '0'}}>ارقام التواصل</h3>
                        <button className='add'>
                            <img src='/assets/plus.png' />
                            اضافة
                        </button>
                    </div>
                    <div className='number ' data-aos="fade-left">
                    <input type='text' placeholder='0993746738'  />
                    </div>
                    <div className='number' data-aos="fade-right">
                    <input type='text' placeholder='0993746738'  />
                    </div>
                    <input data-aos="fade-left"  type='text' placeholder='ألموقع الالكتروني'  />
                    <input data-aos="fade-right" type='text' placeholder='الرقم الضريبي'  />
                    <input data-aos="fade-left" type='text' placeholder='الرقم النقابي'  />
                    <textarea data-aos="fade-right" className='p-3 ' placeholder='وصف المركز' style={{resize: 'none'}} rows={5}></textarea>

                </section>
               </section>
                <button>ارسال</button>
            </form>
        </Container>
       </section>
       <Footer />
    </section>
  )
}

export default CreateAccount