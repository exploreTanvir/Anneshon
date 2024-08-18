import React from 'react'
import heroImg1 from "../../assets/graphic7.svg"
import "./hero.css"
// import js from "../../assets/js.jpg"
// import html from "../../assets/html.png"
// import css from "../../assets/css.png"
// import vdo from "../../assets/vdo.png"
// import py from "../../assets/py.png"

const Home = () => {
  return (
    <>
        <section className='home' id='home'>
            <div className='container '>
                <div className="row align-items col-sm-12-center overflow-hidden">
                    <div className=" col-lg-6 content">
                    <h1 className='fw-bold overflow-hidden'>
                    <span>" </span>স্বপ্ন পূরণের পথে <br /><span  className='fw-bold'> অন্বেষনের  </span>সাথে<span> "</span>
                </h1>
                <p className='my-4'>বিভিন্ন পলিটেকনিক ইন্সটিটিউট এর শিক্ষকমন্ডলী এবং শিক্ষার্থীদের অংশগ্রহনে বিভিন্ন শিক্ষামূলক টিউটোরিয়াল বা টেকোনোলোজি সমন্ধিত সমস্যা সমাধানের জন্য অসাধারন একটি প্লাটফর্ম ।
                </p>
                <div className="btn-grp d-flex mt-3 ">
                    <a href="/" className='fbCoursebtn heroBtn1 d-flex align-items-center gap-2 course me-4'>কোর্সগুলো দেখুন <i class="fa fa-arrow-right"></i></a>
                    <a href="/" className='heroBtn2 d-flex align-items-center gap-2 course'>আরও দেখুন <i class="fa fa-arrow-right "></i></a>
                </div>
                    </div>
                    <div className="col-lg-6 animated heroImg">
                        <img src={heroImg1} className='heroImg ' alt="" />
                    </div>
                </div>
            </div>

            {/* <div className="imgLogo animated">
            <div className="css">
                    <img src={css} className='css' alt="" />
                </div>
                
                <div className="js">
                    <img src={js}  className='js' alt="" />
                </div>
                <div className="html">
                    <img src={html} className='html' alt="" />
                </div>
               
                
                <div className='d-flex justify-content-between align-items-center'>
                <div className="vdo">
                    <img src={vdo}  className='w-25' alt="" />
                </div>
               
                <div className="py">
                    <img src={py}  className='py' alt="" />
                </div>
                </div>
                
                
            </div> */}
        </section>
    </>
  )
}

export default Home