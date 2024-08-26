import React from 'react'
import heroImg1 from '../../assets/shutterstock_1060195475-removebg-preview(1).png'
import "./hero.css"


const Home = () => {
  return (
    <>
        <section className='home' id='home'>
            <div className='container '>
                <div className="row align-items col-sm-12-center overflow-hidden">
                    <div className=" col-lg-6 content flex-column d-flex justify-content-center">
                    <h1 className=' overflow-hidden'>
                   স্বপ্ন পূরণের পথে <br /><span  className='fw-bold'> "অন্বেষণর" </span>সাথে
                </h1>
                <p className='my-4'>বিভিন্ন পলিটেকনিক ইন্সটিটিউট এর শিক্ষকমন্ডলী এবং শিক্ষার্থীদের অংশগ্রহনে বিভিন্ন শিক্ষামূলক টিউটোরিয়াল বা টেকোনোলোজি সমন্ধিত সমস্যা সমাধানের জন্য অসাধারন একটি প্লাটফর্ম ।
                </p>
                <div className="btn-grp d-flex mt-3 ">
                    <a href="/" className='fbCoursebtn heroBtn1 d-flex align-items-center gap-2 course me-4'>কোর্সগুলো দেখুন <i class="fa fa-arrow-right"></i></a>
                    <a href="https://service.anneshon.org/" target="_blank" className='heroBtn1 d-flex align-items-center gap-2 course' rel="noreferrer">সার্ভিসসমূহ দেখুন <i class="fa fa-arrow-right "></i></a>
                </div>
                    </div>
                    <div className="col-lg-6 animated heroImgContainer  d-flex align-items-center">
                        <img src={heroImg1} className='heroImg ' alt="" />
                    </div>
                </div>
            </div>

           
        </section>
    </>
  )
}

export default Home