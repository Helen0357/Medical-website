import { Container } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <div className='login'>
      <Container>
        <section className='bg-white '>
          <img src='/assets/login.png' />
          <section>
            <h2>اهلا بك في Matrix Medical</h2>
            <span>الرجاء تسجيل الدخول</span>
        <form className='mt-10'>
          <label htmlFor='email' className='text-sm'>اسم المستخدم او الايميل</label>
          <input type='text' id='email' className='mb-5' />
          <label htmlFor='password' className='text-sm'>كلمة المرور</label>
          <input type='password' id='password' />
          <a>هل نسيت كلمةالمرور؟</a>
        <button type='submit'>تسجيل الدخول</button>
        </form>
          </section>
        </section>
      </Container>
    </div>
  )
}

export default Login