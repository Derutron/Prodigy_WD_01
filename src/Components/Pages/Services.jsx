
const Services = () => {
  return (
    
    <div className="w-[100%] pb-10 bg-blue-100">
      <div className="h-[160px]"></div>
      <div id="Services"></div>
          {/* services */}
      <div className="w-[100%] h-[90px] flex-shrink-0 flex justify-center items-center">
        <p className="text-black font-poppins text-5xl font-extrabold uppercase">Our Services</p>
      </div>

            {/* three services */}
      <div >
         {/* service one */}
         
         <div id="innovativeSolutions"></div>
        <div className="w-[90%] h-[300px] rounded-[30px] flex mt-[50px] mx-auto bg-gray-200 shadow-md flex-shrink-0">
          <img
          className="w-[380px] h-[300px] rounded-l-[30px] bg-cover bg-no-repeat bg-center"
          src="src/resources/service-Innovative-Solutions.jpg"
          alt="Your Image"
          />
         
             {/* service write up */}
          <div>
            <div className="w-[325px] h-[24px] flex-shrink-0 ml-7 mt-5">
              <p className="text-green-900 font-poppins text-[25px] font-extrabold leading-6">Innovative-Solutions</p>
            </div>

            <div className="w-[95%] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
              <p className="text-green-900 font-poppins text-[20px] font-[500] leading-6">Derutron Ventures is your trusted partner for tailored problem-solving, technology integration, consulting, and product development. Our dedicated team excels in driving digital transformation, efficiency, and user-centric innovation. We pride ourselves on offering personalized solutions that meet the unique challenges of your organization. With a client-centric approach, we prioritize your success, guiding you through strategic consulting, seamless technology integration, and cutting-edge product development. Our commitment to efficiency ensures streamlined operations and increased productivity. Embrace the future with Innovative-Solutions, where every solution is crafted to exceed industry standards and deliver a transformative, user-centric experience. Shape your success with our innovative approach.</p>
            </div>
          </div>
        </div>
        




         {/* service two */}
         <div id="Scalability"></div>
         <div className="w-[90%] h-[300px] rounded-[30px] flex mt-[50px] mx-auto bg-gray-200 shadow-md flex-shrink-0">
          <img
          className="w-[380px] h-[300px] rounded-l-[30px] bg-cover bg-no-repeat bg-center"
          src="src/resources/service-Scalability.jpg"
          alt="Your Image"
          />
         
             {/* service write up */}
          <div>
            <div className="w-[325px] h-[24px] flex-shrink-0 ml-7 mt-5">
              <p className="text-green-900 font-poppins text-[25px] font-extrabold leading-6">Scalability</p>
            </div>

            <div className="w-[95%] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
              <p className="text-green-900 font-poppins text-[20px] font-[500] leading-6">At Derutron Ventures, our specialization lies in providing comprehensive scalability solutions designed to optimize systems for sustained growth and peak performance. We pride ourselves on ensuring adaptability to evolving demands, facilitating long-term success, and enabling seamless expansion for our valued customers. Our dedicated team employs cutting-edge strategies to enhance system scalability, allowing businesses to effectively handle increased workloads and evolving requirements. Through meticulous planning and innovative technologies, we empower organizations to achieve operational excellence and navigate the complexities of a dynamic business environment. With a forward-thinking approach, we strive to future-proof your systems, ensuring they not only meet current demands but also remain robust and efficient as your business evolves. Choose Innovative-Solutions for a scalable, efficient, and adaptable technology ecosystem that forms the foundation for enduring success.</p>
            </div>
          </div>
        </div>



         {/* service three */}
         <div className="w-[90%] h-[300px] rounded-[30px] flex mt-[50px] mx-auto bg-gray-200 shadow-md flex-shrink-0">
          <img
          className="w-[380px] h-[300px] rounded-l-[30px] bg-cover bg-no-repeat bg-center"
          src="src/resources/service-Security.jpg"
          alt="Your Image"
          />
         
             {/* service write up */}
          <div>
            <div className="w-[325px] h-[24px] flex-shrink-0 ml-7 mt-5">
              <p className="text-green-900 font-poppins text-[25px] font-extrabold leading-6">Security</p>
            </div>

            <div className="w-[95%] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
              <p className="text-green-900 font-poppins text-[20px] font-[500] leading-6">Derutron Ventures stands as a cybersecurity powerhouse, delivering robust solutions tailored to fortify digital landscapes. Specializing in comprehensive cybersecurity, we prioritize data integrity and resilience against evolving threats. Our expertise extends to advanced threat detection and prevention, ensuring a secure environment for our clients. By integrating cutting-edge technologies and proactive methodologies, we go beyond conventional measures to establish a formidable defense. Our commitment revolves around preserving the confidentiality, integrity, and availability of critical information, providing a holistic cybersecurity approach. With Innovative-Solutions as your trusted partner, you gain a proactive stance that anticipates and mitigates emerging risks, fostering enduring security and trust in your digital infrastructure. Join us on a journey towards cybersecurity excellence, where innovation meets resilience for your organization's protection.</p>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Services;
