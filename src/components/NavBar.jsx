import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {

const [pop , setPop] = useState(false);
console.log(pop);

return (
    <>
       <section className='flex items-center justify-between text-white navBar'>
                    <div className='flex items-center gap-8 info'>
                        <div className='flex items-center gap-2'>
                            <img src='/assets/phone.png' alt='' />
                            <span>+98764836</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <img src='/assets/email.png' alt='' />
                            <span>matrix@info.erp.net</span>
                        </div>
                    </div>
                    <div  className='flex items-center gap-8 user-login'>
                        <Link to='/login' className='flex items-center gap-2 text-sm'><img src='/assets/user.png' />تسجيل الدخول</Link>
                 <div className='flex items-center gap-2 text-sm lang'>
                    <img src='/assets/lang.png' />
                 <details className="dropdown">
  <summary className="m-1 btn">العربية</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><a>العربية</a></li>
    <li><a>English</a></li>
  </ul>
</details>
                 </div>
                 <ul className='social ssoc'>
                    <li><a><img src='/assets/facebook.png' /></a></li>
                    <li><a><img src='/assets/insta.png' /></a></li>
                    <li><a><img src='/assets/whatsapp.png' /></a></li>
                    <li><a><img src='/assets/linkedin.png' /></a></li>
                 </ul>

                    </div>
                </section>

                <section className='flex gap-10 relative trf'>
                    <img src='/assets/logo.png' />
                    <ul className='flex items-center gap-12 text-white main-ul'>
                        <li><a href="/">الرئيسية</a></li>
                        <li><a href="#about">حول المنصة</a></li>
                        <li><a href="#advan">لميزات</a></li>
                        <li><a href="#products">المنتجات</a></li>
                        <li><a href="#who">من نحن</a></li>
                        <li><a href="#how">كيف تعمل المنصة</a></li>
                    </ul>
  <IconButton className='pop-btn cursor-pointer' onClick={()=> setPop(prev => !prev)}>
<MenuIcon />
</IconButton>
{pop && <div className='absolute menu-ul'>
<ul className='flex flex-col  items-center gap-5'>
<li><a href="/">الرئيسية</a></li>
<li><a href="#about">حول المنصة</a></li>
<li><a href="#advan">لميزات</a></li>
<li><a href="#products">المنتجات</a></li>
<li><a href="#who">من نحن</a></li>
<li><a href="#how">كيف تعمل المنصة</a></li>
<li  className='flex items-center gap-3 hg'>

{/* <a href=''> <img alt='' src='/assets/linkedin.png' className='inline' /></a>
  <a href=''> <img alt='' src='/assets/insta.png' className='inline' /></a>
  <a  href=""
> <img alt='' src='/assets/whatsapp.png' className='inline' /></a>
  <a href=''> <img alt='' src='/assets/facebook.png' className='inline' /></a> */}

</li>
</ul>
</div>}
                </section>

    </>
  )
}

export default NavBar