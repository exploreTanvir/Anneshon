import React from 'react'

import "./faq.css"

const FAQS = () => {
  return (
    <div>
<div class="accordion accordion-flush" id="accordionFlushExample">

<div class="accordion-item">
    <h2 class="accordion-header rounded" id="panelsStayOpen-headingOne">
      <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      এই অনলাইন স্কিল ডেভেলপমেন্ট প্ল্যাটফর্মটি কীভাবে কাজ করে ?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
       <p><b>"অন্বেষন"</b> প্ল্যাটফর্মটি বিভিন্ন দক্ষতা উন্নয়নের কোর্স অফার করে, যা আপনি যেকোনো সময় এবং যেকোনো স্থান থেকে নিতে পারেন। আপনি একটি কোর্সে এনরোল করার পর, আপনাকে ভিডিও লেকচার, কুইজ, এবং প্রজেক্ট অ্যাসাইনমেন্টগুলির মাধ্যমে শেখানো হবে। এছাড়াও, আমাদের ফোরামে অন্যান্য শিক্ষার্থী এবং প্রশিক্ষকদের সাথে যোগাযোগ করতে পারবেন।</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h1 class="accordion-header rounded" id="flush-headingTwo">
      <button class="accordion-button fs-5 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      কোর্সের জন্য কি কোন পূর্বশর্ত আছে ?
      </button>
    </h1>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        বেশিরভাগ কোর্সের জন্য কোন পূর্বশর্ত নেই। তবে কিছু উন্নত কোর্সের জন্য মৌলিক দক্ষতার প্রয়োজন হতে পারে, যা কোর্সের বিবরণে উল্লেখ থাকে। আমরা প্রাথমিক থেকে উন্নত স্তর পর্যন্ত কোর্স অফার করে থাকি।
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h1 class="accordion-header rounded" id="flush-headingThree">
      <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      যদি আমি কোর্সের মধ্যে কোনো সমস্যার সম্মুখীন হই, তাহলে কী করব ?
      </button>
    </h1>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        যদি আপনি কোনো সমস্যার সম্মুখীন হন, তাহলে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করতে পারেন। আমাদের কাছে একটি হেল্প সেকশন রয়েছে, যেখানে আপনি সাধারণ সমস্যার সমাধান পেতে পারেন। এছাড়াও, আপনি সরাসরি মেসেজ বা ইমেইলের মাধ্যমে আমাদের সাপোর্ট টিমের সাহায্য নিতে পারেন।
        </p>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h1 class="accordion-header rounded" id="flush-headingFour">
      <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      আমাদের প্ল্যাটফর্মে কিভাবে একজন প্রশিক্ষক হিসেবে যোগ দিতে পারেন?
      </button>
    </h1>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        আপনি আমাদের ওয়েবসাইটের ‘Become an Instructor’ পৃষ্ঠায় গিয়ে আবেদন করতে পারেন। আবেদন প্রক্রিয়ায় আপনাকে আপনার শিক্ষাগত যোগ্যতা এবং অভিজ্ঞতার বিস্তারিত বিবরণ দিতে হবে। আমাদের টিম আপনার আবেদন পর্যালোচনা করবে এবং আপনার সাথে যোগাযোগ করবে।
        </p>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h1 class="accordion-header rounded" id="flush-headingFive">
      <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      প্ল্যাটফর্মটি কি স্কেলযোগ্য এবং ভবিষ্যতের জন্য প্রস্তুত ?
      </button>
    </h1>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>হ্যাঁ, আমাদের প্ল্যাটফর্মটি স্কেলযোগ্য এবং ভবিষ্যতের জন্য প্রস্তুত। আমরা নতুন প্রযুক্তি এবং বাজারের চাহিদা অনুযায়ী প্ল্যাটফর্ম আপডেট করি এবং আরও উন্নত করতে ক্রমাগত কাজ করি।</p>
      </div>
    </div>
  </div>


  <div class="accordion-item">
    <h1 class="accordion-header rounded" id="flush-headingSix">
      <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      কিভাবে আপনি ক্যারিয়ার গাইডেন্স পেতে পারেন?
      </button>
    </h1>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>
        আমরা আমাদের শিক্ষার্থীদের জন্য ক্যারিয়ার গাইডেন্স এবং পরামর্শ প্রদান করি। আপনি আমাদের ক্যারিয়ার সার্ভিস টিমের সাথে যোগাযোগ করতে পারেন অথবা লাইভ ওয়েবিনারে অংশগ্রহণ করতে পারেন।
        </p>
      </div>
    </div>
  </div>
  
</div>

      
    </div>
  )
}

export default FAQS