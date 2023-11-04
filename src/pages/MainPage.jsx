import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
function MainPage() {

useEffect(()=> {

Aos.init({duration: 2000});

} , []);

  return (
    <section className='main-page' >
        
        <section className='landing'>
            <Container>
             <NavBar />
          <section className='text-center landing-text'>
          <h2>المنصة الطبية الشاملة لخدمة المجتمع الصحي السوري</h2>
             <Link to='/create_account' className='main-btn' >جرب المنصة مجانا لمدة شهر</Link>
          </section>

            </Container>
        </section>

     <section className='aboutus py-16 overflow-hidden' id='about'>
        <Container>
        <section className=' flex items-center justify-between flex-wrap md:flex-nowrap'>
            <section data-aos='fade-left'>
                <h5>حول المنصة</h5>
                <h3>المنصة الطبية الشاملة لخدمة المجتمع الصحي السوري</h3>
                    <div>
                      <div>  <img src='/assets/true.png'  alt='' />
                        <h4>متابعة المرضى ووضعهم الصحي</h4></div>
                        <p>عن طريق ميدكالماتريكس اصبح بامكانك الان معالجة مرضاك بسهولة و اللطاع ع ملفه مالصحي</p>
                    </div>
                    <div>
                      <div>  <img src='/assets/true.png'  alt='' />
                        <h4>متابعة المرضى ووضعهم الصحي</h4></div>
                        <p>عن طريق ميدكالماتريكس اصبح  اتريكس اصبح بامكانك الان معالجة مرضاك بسهولة و اللطاع ع ملفه مالصاتريكس اصبح بامكانك الان معالجة مرضاك بسهولة و اللطاع ع ملفلة و اللطاع ع ملفه مالصحي</p>
                    </div>
                    <button className='main-btn flex items-center gap-2'>
                        قراءة المزيد 
                        <KeyboardBackspaceIcon />
                    </button>
            </section>
            <section className='about-imgs' data-aos='fade-right'>
                <img src='/assets/about1.png' />
                <img src='/assets/about2.png' />
            </section>
        </section>
        </Container>
     </section>

     <section className='advantages py-36' id='advan'>
        <Container>
            <section>  
            <h4 className='h4main'>ميزات المنصة</h4> 
            <p>نقدم افضل الخدمات في المجال الصحي</p>
                <div className='cards'>
                    <div className='card' data-aos="flip-left" >
                        <div className='head'>
                            <img src='/assets/pic1.png' />
                            <div>
                                <h3>السرعة</h3>
                                <span>سرعة استجابة النظام</span>
                            </div>
                        </div>
                        <p>تطرح شركة ماتريكس الخيار الأمثل في صناعة التسويق والترويج حيث تتيح لك فرصة عمل فريدة من نوعها بنردود  مالي مميز ونسب 
بيعة محفزة تطرح شركة ماتريكس الخيار الأمثل
مميز ونسب  بيعة محفزة تطرح شركة ماتر</p>
                    </div>
                    <div className='card' data-aos="flip-right">
                        <div className='head'>
                            <img src='/assets/pic2.png' />
                            <div>
                                <h3>الخصوصية</h3>
                                <span>الحفاظ على الخصوصية</span>
                            </div>
                        </div>
                        <p>تطرح شركة ماتريكس الخيار الأمثل في صناعة التسويق والترويج حيث تتيح لك فرصة عمل فريدة من نوعها بنردود  مالي مميز ونسب 
بيعة محفزة تطرح شركة ماتريكس الخيار الأمثل
مميز ونسب  بيعة محفزة تطرح شركة ماتر</p>
                    </div>
                    <div className='card' data-aos="flip-left">
                        <div className='head'>
                            <img src='/assets/pic3.png' />
                            <div>
                                <h3>الاحترافية</h3>
                                <span>الاحرتافية العالية في التطوير</span>
                            </div>
                        </div>
                        <p>تطرح شركة ماتريكس الخيار الأمثل في صناعة التسويق والترويج حيث تتيح لك فرصة عمل فريدة من نوعها بنردود  مالي مميز ونسب 
بيعة محفزة تطرح شركة ماتريكس الخيار الأمثل
مميز ونسب  بيعة محفزة تطرح شركة ماتر</p>
                    </div>
                </div>
            </section>
        </Container>
     </section>

     <section className='products py-12' id='products'>
        <Container>
            <section className='text-center'>
            <h4 className='h4main'>منتجاتنا</h4> 
            <p>نقدم افضل الخدمات في المجال الصحي</p>

            <section className='flex items-center gap-12 justify-between mt-24 products-card'>
                <div className='product' data-aos="zoom-in-up">
                    <img src='/assets/products1.png' alt='' />
                    <div>
                        <h2>منصى مديكال ماتريكس للاطباء</h2>
                        <p>تطرح شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريدة من نوعها بمردود مالي مميز و نسب بيع محفزة تطرح شركة ماتريكس الخيار الامثل</p>
                    </div>
                </div>
                <div className='product' data-aos="zoom-in-up">
                    <img src='/assets/products2.png' alt='' />
                    <div>
                        <h2>تطبيق مديكال ماتريكس للمريض</h2>
                        <p>تطرح شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريدة من نوعها بمردود مالي مميز و نسب بيع محفزة تطرح شركة ماتريكس الخيار الامثل</p>
                    </div>
                </div>
            </section>
            </section>
        </Container>
     </section>


     <section className='stratigy py-24' id='how' data-aos="fade-up">
        <h4 className='h4main mb-14 mt-20'>الية عمل المنصة</h4>
     <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
      
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='swiper-div'>
                <h2>المنصة الطبية الشاملة لخدمة المجتمع السوري الصجي</h2>
                <p>تطرح شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريدة من نوعها بمردود مالي مميز و نسب بيع محفزة تطرح شركة  شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريد شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريد ماتريكس الخيار الامثل</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-div'>
                <h2>المنصة الطبية الشاملة لخدمة المجتمع السوري الصجي</h2>
                <p>تطرح شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريدة من نوعها بمردود مالي مميز و نسب بيع محفزة تطرح شركة  شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريد شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريد ماتريكس الخيار الامثل</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-div'>
                <h2>المنصة الطبية الشاملة لخدمة المجتمع السوري الصجي</h2>
                <p>تطرح شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريدة من نوعها بمردود مالي مميز و نسب بيع محفزة تطرح شركة  شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريد شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريد ماتريكس الخيار الامثل</p>
            </div>
        </SwiperSlide>
      </Swiper>
     </section>

     <section className='counter mt-28 mb-24 relative' id='who' data-aos="fade-up">
        <Container>
            <section >
                <div data-aos="zoom-in">
                    <h2>+150</h2>
                    <span>اطباء و مرضى</span>
                </div>
                <div data-aos="zoom-in">
                    <h2>+30</h2>
                    <span>مشفى</span>
                </div>
                <div data-aos="zoom-in">
                    <h2>+30</h2>
                    <span>صيدلية</span>
                </div>
                <div data-aos="zoom-in">
                    <h2>+70</h2>
                    <span>مخبر طيي</span>
                </div>
            </section>
        </Container>
     </section>
<Footer />
    </section>
  )
}

export default MainPage