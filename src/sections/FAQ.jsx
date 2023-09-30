import React, { useState } from 'react';

function FAQ({faqData}, { sectionRef }){
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  

  const handleQuestionClick = (index) => {
    if (expandedQuestion === index) {
      setExpandedQuestion(null);
    } else {
      setExpandedQuestion(index);
    }
  };

  return (
    <div  ref={ sectionRef } className="mb-16 space-y-3 md:w-2/3 w-3/4 self-center  flex flex-col relative ">
      <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] bg-transparent border-[#3866F2] border-[70px] md:border-[100px] lg:border-[140px] right-[-250px] md:right-[-450px] lg:right-[-600px] top-[100px] sm:top-0 lg:top-[-150px] opacity-40 absolute rounded-full -z-20"></div>
        <h1 className="font-bold md:font-[500] text-5xl text-[#0597F2] text-center md:text-[60px] mb-10">
          FAQs
        </h1>
          {faqData.map((faq, index) => (
            <div key={index} className="p-2 text-white rounded-md shadow-md border-[2px] border-[#389bf2] bg-zinc-100">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <button
                    className="text-left w-full focus:outline-none"
                    onClick={() => handleQuestionClick(index)}
                  >
                    <span className="font-bold text-[#3866F2]">{faq.question}</span>
                  </button>
                </div>
                <div>
                  <button
                    className=""
                    onClick={() => handleQuestionClick(index)}
                  >
                    {expandedQuestion === index ? <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13.3477H21" stroke="#9BA9B3" strokeWidth="5.14286" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        : <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 3.34766V23.3477M3 13.3477H23" stroke="#9BA9B3" strokeWidth="5.14286" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>}
                  </button>
                </div>
              </div>
              {expandedQuestion === index && (
                <div className="py-3 font-semibold text-[#64748B]">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
    </div>
  );
};

export default FAQ;
