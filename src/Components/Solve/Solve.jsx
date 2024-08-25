import React from 'react'
import solveImg from '../../assets/i11@2x.png'
import "./Solve.css"

const Solve = () => {
  return (
    <div className='SolveTop'>
        <div className="container solve">
        <h2 className='fw-bold serviceTop mt-4 overflow-hidden text-center'><span className='fw-bold'>"অন্বেষণ"</span> এর উদ্দেশ্য </h2>
            <div className="row align-items-end mb-4">
                <div className="col-lg-6 customerRight solveMain">
                <p className='mt-2'>আমাদের সমাধান</p>
                <h4 className='customerTitle pb-1'>আপনার সুবিধামত সময়ে আমাদের ওয়েবসাইট থেকে সব কোর্সের তথ্য ও কনটেন্ট এক্সেস করতে পারবেন।</h4>
                <h4 className='customerTitle pb-1'>প্রতিটি কোর্স শেষে অন্বেষন একাডেমি এর পক্ষ থেকে শিক্ষার্থীদেরকে সার্টিফিকেট প্রদান করা হয়, যা তাদের দক্ষতা ও অর্জনকে স্বীকৃতি দেয়।</h4>
                <div className="row">
                <div className='col-lg-6 solveLeft'>
                <div class="d-flex gap-3 mt-4 mb-1 align-items-start ">
                   <i class="fa-regular fa-circle-check"></i>
                    <div>
                    <p>সহজলভ্য শিক্ষা</p>
                    <p>অন্তর্ভুক্তিমূলক লার্নিং </p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-6 solveLeft'>
                <div class="d-flex gap-3 mt-4 mb-1 align-items-start ">
                <div className='p-1 overflow-hidden'>
                <div className='p-1 overflow-hidden'>
                <i class="fa-regular fa-circle-check"></i>
                </div>
                </div>
                    <div>
                    <p>গুণগত মানের শিক্ষা প্রদান</p>
                    <p>দক্ষতা উন্নয়নের সুযোগ </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className='col-lg-6 solveLeft'>
                <div class="d-flex gap-3 mt-4 mb-1 align-items-start ">
                <div className='p-1 overflow-hidden'>
                <i class="fa-regular fa-circle-check"></i>
                </div>
                    <div>
                    <p>ব্যক্তিগতকৃত শিক্ষার সুযোগ</p>
                    <p>শিক্ষার নতুন দিগন্ত</p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-6 solveLeft'>
                <div class="d-flex gap-3 mt-4 mb-1 align-items-start ">
                <div className='p-1 overflow-hidden'>
                <i class="fa-regular fa-circle-check"></i>
                </div>
                    <div>
                    <p>ক্রমাগত উন্নয়নের সুযোগ</p>
                    <p>ডিজিটাল শিক্ষা প্ল্যাটফর্ম </p>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                <div className="col-lg-6 solveRight">
                    <img src={solveImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solve