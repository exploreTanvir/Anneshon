import React from 'react';
import anneshon from "../../assets/anneshon.png";
import "./footer.css";

const Footer = () => {
  return (
    <div>
        <section id="footer" className="text-white">
      <div className="container">
        <div className="row footerRow py-5 justify-content-around gap-md-5" >
          
          <div className="col-lg-3 col-md-5">
          <div className='d-flex align-items-center gap-3  mt-4'>
          <img src={anneshon} alt="" className='footerLogo'  />
          <h4 >"স্বপ্ন পূরণের পথে,<br />
                      অন্বেষণের সাথে"</h4>
          </div>
            <p className="py-3">
            আমাদের প্রতিষ্ঠান ই-লার্নিং শিক্ষার ক্ষেত্রে একটি বিশ্বস্ত নাম হিসেবে প্রতিষ্ঠিত। আমরা শিক্ষার্থীদের জন্য এমন একটি শিক্ষা ব্যবস্থা তৈরি করেছি যা তাদের চাহিদা অনুযায়ী শিক্ষার সুযোগ প্রদান করে এবং তাদেরকে প্রযুক্তির দ্রুত পরিবর্তনশীল বিশ্বে এগিয়ে থাকার জন্য প্রস্তুত করে।
            </p>
           
            
          </div>

          <div className="col-lg-2 col-md-5 mt-4 ">
          <h4 className='fw-bold'>নীতিমালা</h4>
            <a href="#"><p className='mt-3'>টার্মস এবং শর্তাবলী</p></a>
            <a href="#"><p>প্রাইভেসি পলিসি</p></a>
            <a href="#"><p>রিফান্ড পলিসি</p></a>
            <a href="#"><p>সাপোর্ট</p></a>
            <a href="#"><p>লাইসেন্স</p></a>
            
          </div>
          <div className="col-lg-2 col-md-5 mt-4 ">
          <h4 className='fw-bold'>অন্যান্য</h4>
            <a href="#"><p className='mt-3'>প্রশিক্ষক নিবন্ধন</p></a>
            <a href="#"><p>শিক্ষার্থী নিবন্ধন</p></a>
            <a href="#"><p>এ্যাপ্লাইড প্রোগ্রাম</p></a>
            <a href="#"><p>সকল প্রডাক্ট</p></a>
            <a href="#"><p>আমাদের সম্পর্কে</p></a>
          </div>
          <div className="col-lg-2 col-md-5  mt-4">
          <h4 className='fw-bold'>যোগাযোগ</h4>
          <p className='mt-3 d-flex align-items-center'>
              <i className="fa-location-dot fa-solid me-2"></i> মাগুরা পুলিশ লাইন, মাগুরা।
            </p>
            <p className='d-flex align-items-center'><i className="fa-phone fa-solid me-2"></i>+8801818301681</p>
            <p className='d-flex align-items-center'><i class="fa-solid fa-envelope me-2"></i>anneshon@gmail.com</p>
            <div className="last_icon d-flex align-items-center gap-3 fs-5 ">
              <a href="https://www.facebook.com/anneshondotcom"><i className="fa-brands fa-facebook-f "></i></a>
              <a href="#"><i className="fa-brands fa-twitter "></i></a>
              <a href="https://www.linkedin.com/company/anneshon/mycompany/"><i className="fa-brands fa-linkedin "></i></a>
              <a href="https://www.youtube.com/@anneshondotcom"><i className="fa-brands fa-youtube"></i></a>
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>
            
          </div>


        </div>
      </div>
      <div className="copy text-white d-flex align-items-center justify-content-center fw-bold">
      <h6>Copyright © Anneshon. All Right Reserved. 2024</h6>
    </div>
    </section>
    
    </div>
  )
}

export default Footer