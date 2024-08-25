import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css";
import { divisionsDistrictInfo } from "./district";


const Contact = () => {
  const notify = () => toast("👌 সফলভাবে মেসেজ প্রেরন হয়েছে! ধন্যবাদ  ");

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    email: '',
    subject: '',
    division: '',
    district: '',
  });

  useEffect(() => {
    const selectDivision = document.getElementById("divisions");
    const selectDistrict = document.getElementById("district");

    selectDistrict.disabled = true;

    for (let division in divisionsDistrictInfo) {
      selectDivision.options[selectDivision.options.length] = new Option(division, division);
    }

    selectDivision.onchange = (e) => {
      selectDistrict.disabled = false;
      selectDistrict.length = 1; // Reset district options
      const districts = divisionsDistrictInfo[e.target.value];

      for (let i = 0; i < districts.length; i++) {
        selectDistrict.options[selectDistrict.options.length] = new Option(districts[i], districts[i]);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <section className="contact contactTitle">
     <h2 className='fw-bold mt-5 contactTop overflow-hidden text-center'><span className='fw-bold'>"অন্বেষণ"</span> এর সাথে যোগাযোগের মাধ্যম</h2>
      <div className="container">
        <div className="row pt-2 pb-5">
          
        <div className="col-lg-6 overflow-hidden mb-2">
        <iframe className="map h-100 w-100 overflow-hidden" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1829.6517798103646!2d89.40482566481752!3d23.485573203408308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe570008acc5cf%3A0x7a40900fac2f42b1!2sAnneshon!5e0!3m2!1sen!2sbd!4v1724035483629!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <form onSubmit={handleSubmit} action="/POST" method="post" enctype="multipart/form-data" className="left-form mt-1 col-md-12 col-lg-6 col-sm-12">
          <div>
            <div className="row gy-4">
              <div className="col-lg-6">
                <input type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required  id="name" className="form-control" placeholder="নাম"/> 
              </div>
              <div className="col-lg-6 ">
                <input type="email"
                  name="email"
                  required value={formData.email} className="form-control" onChange={handleChange}  placeholder="ইমেইল" />
              </div>
              <div className="col-lg-6">
                <input
                  required type="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="মোবাইল নাম্বার"/>                
              </div>
              <div className="col-lg-6">
                <input
                  required type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-control" placeholder="সাবজেক্ট"/>                
              </div>
              <div className="col-lg-6">
                <div className="select-wrapper">
                  <select name="division" id="divisions" className="selected-Info" value={formData.division} onChange={handleChange} >
                    <option>-- আপনার বিভাগ --</option>
                  </select>
                </div>             
              </div>
              <div className="col-lg-6">
                <div className="select-wrapper">
                  <select name="district" id="district" className="selected-Info" value={formData.district} onChange={handleChange}>
                    <option>-- আপনার জেলা --</option>
                  </select>  
                 
                </div>             
              </div>
              <div className="col-md-12">
                <textarea       
                  value={formData.message}
                  onChange={handleChange}
                  required name="message"   
                  className="form-control" 
                  rows="7" 
                  placeholder="মন্তব্য লিখুন ......">
                </textarea>
              </div>
              <div className="col-md-12 text-center">
                <button className="fs-5 sendBtn  d-flex justify-content-around align-items-center gap-2 course" type="submit" onClick={notify}>
                  মেসেজ সেন্ড করুন <i className="fa fa-arrow-right "></i>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </section>
  )
}

export default Contact;
