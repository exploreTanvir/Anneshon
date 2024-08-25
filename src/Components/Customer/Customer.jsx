import React from 'react'
import customerImg from '../../assets/about9@2x.jpg'
import './customer.css'

const Customer = () => {
  return (
    <div className='customerTop'> 
      <div className="container customer">
      <h2 className='fw-bold pt-1 serviceTop mt-4 overflow-hidden text-center'><span className='fw-bold'>"অন্বেষণ"</span> কীভাবে কাজ করে? </h2>
        <div className="row align-items-center">
          <div className="col-lg-6 p-5">
            <img className='leftCustomerImg' src={customerImg} alt="" />
          </div>
          <div className="col-lg-6 customerRight">
            <p>এটা কিভাবে কাজ করে?</p>
            <h4 className='customerTitle pb-1'>এখানে তিনটি কার্যকরী পদক্ষেপ রয়েছে কেন আমাদের মূল্যবান গ্রাহকরা আমাদের বেছে নেন।</h4>
            <div className='d-flex gap-3 mt-4 mb-1'>
            <div className="rounded-circle customerSub text-white d-flex align-items-center justify-content-center"><i className="fa-solid fa-check"></i></div>
              <div>
                  <h4>ইউজার টেস্টিং</h4>
                  <p className='customerTitle'>সম্ভাব্য ব্যবহারকারীদের দিয়ে প্রোটোটাইপটি পরীক্ষা করুন এবং তাদের মতামত নিন।</p>
              </div>
            </div>
            <div className='d-flex gap-3 mt-1'>
            <div className="rounded-circle customerSub text-white d-flex align-items-center justify-content-center"><i className="fa-solid fa-check"></i></div>
              <div>
                  <h4>ডিজাইন রিভিউ</h4>
                  <p className='customerTitle'>প্রোডাক্টের ডিজাইনটি পুনরায় যাচাই করুন এবং প্রয়োজন হলে সংশোধন করুন।</p>
              </div>
            </div>
            <div className='d-flex gap-3 mt-1'>
            <div className="rounded-circle customerSub text-white d-flex align-items-center justify-content-center"><i className="fa-solid fa-check"></i></div>
              <div>
                  <h4>স্কেলেবিলিটি</h4>
                  <p className='customerTitle'>প্রোডাক্টের স্কেলেবিলিটি নিয়ে চিন্তা করুন এবং সেই অনুযায়ী আইডিয়া উন্নয়ন করুন।</p>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customer