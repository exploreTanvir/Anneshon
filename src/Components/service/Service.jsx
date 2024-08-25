import React from 'react'
import service1 from "../../assets/service1.png"
import service4 from "../../assets/service10.png"
import service5 from "../../assets/service11.png"
import service6 from "../../assets/service12.png"
import service2 from "../../assets/service8.png"
import service3 from "../../assets/service9.png"
import "./service.css"

const Service = () => {
  return (
    <section className='service'>
        <div className="container">
            <h2 className='fw-bold serviceTop mt-3 overflow-hidden text-center'><span className='fw-bold'>"অন্বেষণ"</span> কেন বেছে নেবেন</h2>
            
            <div className="row" >
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center overflow-hidden pb-2">
                <div class="card mt-5">
                    <div class="card-body text-center p-4 d-flex flex-column justify-content-center">
                       <div className="serviceImg text-center">
                       <img src={service1} alt=""/>
                       </div>
                <h4 class="fw-semibold py-2">সুবিধামত অনুশীলন</h4>
                <p class="fw-bold text-start">"আপনার সুবিধামত সময়ে আমাদের ওয়েবসাইট থেকে সব কোর্সের তথ্য ও কনটেন্ট এক্সেস করতে পারবেন।"</p></div></div>
                </div>


                <div className="col-lg-4 col-md-6 col-sm-12  d-flex justify-content-center  overflow-hidden pb-2">
                <div class="card mt-5">
                    <div class="card-body text-center p-4 d-flex flex-column justify-content-center">
                       <div className="serviceImg text-center">
                       <img src={service2} alt=""/>
                       </div>
                <h4 class="fw-semibold py-2">কোর্স সাপোর্ট</h4>
                <p class="fw-bold text-start">"কোর্সের কোনো অংশ বুঝতে অসুবিধা হলে, আমাদের ২৪x৭ সাপোর্ট টিম সবসময় আপনার সমস্যার সমাধানে কাজ করবে।"</p></div></div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12  d-flex justify-content-center  overflow-hidden pb-2">
                <div class="card mt-5">
                    <div class="card-body text-center p-4 d-flex flex-column justify-content-center">
                       <div className="serviceImg text-center">
                       <img src={service3} alt="" />
                       </div>
                <h4 class="fw-semibold py-2">পর্যাপ্ত রিসোর্স সরবরাহ</h4>
                <p class="fw-bold text-start">"প্রতিটি কোর্সের সাথে কোর্স এবং লেসন সম্পর্কিত সকল রিসোর্স প্রদান করা হয়, যা শিক্ষার্থীদের জন্য শেখার অভিজ্ঞতাকে সমৃদ্ধ করে।"</p></div></div>
                </div>



                <div className="col-lg-4 col-md-6 col-sm-12  d-flex justify-content-center  overflow-hidden pb-2">
                <div class="card mt-5">
                    <div class="card-body text-center p-4 d-flex flex-column justify-content-center">
                       <div className="serviceImg text-center">
                       <img src={service4} alt=""/>
                       </div>
                <h4 class="fw-semibold py-2">অনলাইন ও অফলাইন ক্লাস</h4>
                <p class="fw-bold text-start">"আমাদের কোর্সের লেসনের উপর ভিত্তি করে শিক্ষার্থীদের জন্য লাইভ ক্লাস এবং অফলাইন ক্লাসের সুযোগ প্রদান করা হয়।"</p></div></div>
                </div>


                <div className="col-lg-4 col-md-6 col-sm-12  d-flex justify-content-center  overflow-hidden pb-2">
                <div class="card mt-5">
                    <div class="card-body text-center p-4 d-flex flex-column justify-content-center">
                       <div className="serviceImg text-center">
                       <img src={service5} alt=""/>
                       </div>
                <h4 class="fw-semibold py-2">সার্টিফিকেশন</h4>
                <p class="fw-bold text-start">"প্রতিটি কোর্স শেষে অন্বেষন একাডেমি এর পক্ষ থেকে শিক্ষার্থীদেরকে সার্টিফিকেট প্রদান করা হয়, যা তাদের দক্ষতা ও অর্জনকে স্বীকৃতি দেয়।"</p></div></div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center overflow-hidden pb-2">
                <div class="card mt-5">
                    <div class="card-body overflow-hidden text-center p-4 d-flex flex-column justify-content-center">
                       <div className="serviceImg text-center">
                       <img src={service6} alt="" />
                       </div>
                <h4 class="fw-semibold py-2">অভিজ্ঞ শিক্ষকমন্ডলির সাপোর্ট</h4>
                <p class="fw-bold text-start">"অভিজ্ঞ শিক্ষকমন্ডলির মেন্টরশিপে আমাদের কার্যক্রম সম্পন্ন হয়, যা শিক্ষার্থীদের জন্য কার্যক্রমগুলি সফলভাবে সম্পন্ন করতে দিকনির্দেশনা প্রদান করে।"</p></div></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Service