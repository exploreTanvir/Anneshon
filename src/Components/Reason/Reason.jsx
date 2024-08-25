import React from 'react'
import reason1 from '../../assets/g1@2x.jpg'
import reason2 from '../../assets/g2@2x.jpg'
import reason3 from '../../assets/g3@2x.jpg'
import reason4 from '../../assets/g4@2x.jpg'
import FAQS from '../FAQ/FAQS'
import "./reason.css"

const Reason = () => {
  return (
    <section className='Reason'>
        <div className="container">
        <h2 className='fw-bold mt-5 overflow-hidden reasonHeading text-center'><span className='fw-bold'>"অন্বেষণ"</span> সম্পর্কিত কিছু প্রশ্ন ও উত্তর</h2>
            <div className="row align-items-center">
                <div className="col-lg-6 faqTop">
                    
                    <FAQS/>
                </div>
                <div className="col-lg-6 reasonRight d-flex align-items-end flex-column gap-4">
                    <div className="row align-items-end gap-4">
                        <div className="col-lg-4 d-flex align-items-end reason1 p-0">
                            <img src={reason1} alt="" />
                        </div>
                        <div className="col-lg-8 reason2 p-0">
                        <img src={reason2} alt="" />
                        </div>
                    </div>
                    <div className="row align-items-start gap-4">
                        <div className="col-lg-8 reason3 p-0">
                            <img src={reason3}  alt="" />
                        </div>
                        <div className="col-lg-4 reason4 p-0">
                        <img src={reason4}  alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reason