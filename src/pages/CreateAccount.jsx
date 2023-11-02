import { Container, IconButton } from '@mui/material'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function CreateAccount() {
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

       <section className='inf-form py-16'>
        <Container>
            <form >
               <section className='flex justify-between gap-4'>
               <section>
                    <h3>المعلومات العامة</h3>
                    <input type='text' placeholder='الاسم الثلاثي' />
                    <input type='email' placeholder='الايميل' />
                    <select>
                        <option >النوع</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <select>
                        <option >الاختصاص</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <h3 className='pt-5'>كلمةالمرور</h3>
                    <input type='password' placeholder='كلمة المرور' />
                    <input type='password' placeholder='تاكيد كلمة المرور' />
                </section>
                <section>
                <h3>معلومات المركز</h3>
                <input type='text' placeholder='اسم المركز' />
                    <input type='text' placeholder='موقع المركز' />
                    <div className='flex items-center justify-between mt-4 mb-5'>
                        <h3 style={{marginBottom: '0'}}>ارقام التواصل</h3>
                        <button className='add'>
                            <img src='/assets/plus.png' />
                            اضافة
                        </button>
                    </div>
                    <div className='number '>
                    <input type='text' placeholder='0993746738'  />
                    </div>
                    <div className='number'>
                    <input type='text' placeholder='0993746738'  />
                    </div>
                    <input type='text' placeholder='ألموقع الالكتروني'  />
                    <input type='text' placeholder='الرقم الضريبي'  />
                    <input type='text' placeholder='الرقم النقابي'  />
                    <textarea className='p-3 ' placeholder='وصف المركز' style={{resize: 'none'}} rows={5}></textarea>

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