

const About = () => {
  return (
    <div className="bg-blue-100">
          {/* About us */}
          <div className="h-[160px]"></div>
      <div id="About"></div>
      <div className="w-[280px] h-[90px] flex-shrink-0 mx-auto">
        <p className="text-gray-900 text-center font-poppins text-5xl font-extrabold uppercase">About Us</p>
      </div>

      <div className=' w-[100%] h-[1000px] flex-shrink-0 mb-10'>
                    {/* about banner image */}
              <img
              className="w-[90%] h-[1000px] mx-auto rounded-md"
              src="src/resources/hero-2.jpg"
              alt="Your Image"
              />

              {/* three about */}
            <div className="w-[1200px] h-[500px] flex-shrink-0 flex justify-between absolute top-[550px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            {/* Mission */}
                      <div className="w-[380px] h-[900px] rounded-[30px] bg-white bg-opacity-10 shadow-md flex-shrink-0">
                      
                          {/* Mission write up */}
                        <div className="mt-[20px]">
                          <div className="w-[325px] h-[24px] flex-shrink-0 mx-auto">
                            <p className="text-gray-200 font-poppins text-[25px] font-extrabold leading-6 text-center">Mission</p>
                          </div>

                          <div className="w-[325px] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
                            <p className="text-white font-poppins text-[25px] font-normal text-base leading-10">Our overarching mission is to leverage cutting-edge technology as a powerful tool to tackle intricate business challenges. We are committed to delivering innovative solutions that not only meet but exceed the evolving needs of businesses and individuals in the dynamic landscape of the digital era. By staying at the forefront of technological advancements, we aim to empower our clients with transformative tools and strategies. Our dedication lies in fostering an environment where businesses can not only adapt but thrive amidst the complexities of the modern digital landscape. Through a fusion of creativity, expertise, and state-of-the-art technology, we strive to redefine possibilities, drive efficiency, and ultimately contribute to the sustained success of our clients, enabling them to navigate and excel in the digital age.</p>
                          </div>
                        </div>   
                      </div>




                      {/* Goals */}
                      <div className="w-[380px] h-[900px] rounded-[30px] bg-white bg-opacity-10 shadow-md flex-shrink-0">
                  
                  {/* Goals write up */}
                <div className="mt-[20px]">
                  <div className="w-[325px] h-[24px] flex-shrink-0 mx-auto">
                    <p className="text-gray-200 font-poppins text-[25px] font-extrabold leading-9 text-center">Goals</p>
                  </div>

                  <div className="w-[325px] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
                    <p className="text-white font-poppins text-[20px] font-normal text-base leading-10">Our primary objectives encompass the development of scalable software solutions, a commitment assessed through key performance indicators (KPIs) and adherence to project timelines. These objectives underscore our dedication to technological advancement and the delivery of solutions with a meaningful impact. Scalability is a cornerstone, ensuring our software adapts seamlessly to evolving client needs. The use of KPIs provides tangible metrics, assessing the efficiency and effectiveness of our solutions, while our emphasis on project timelines reflects our commitment to timely, efficient delivery. These goals collectively drive our mission to stay at the forefront of technological innovation, offering not only cutting-edge but also reliable, scalable, and transformative solutions for the benefit of our clients and the broader technological landscape.</p>
                  </div>
                </div>   
              </div>




                    {/* Values */}
                    <div className="w-[380px] h-[900px] rounded-[30px] bg-white bg-opacity-10 shadow-md flex-shrink-0">
                  
                  {/* Values write up */}
                <div className="mt-[20px]">
                  <div className="w-[325px] h-[24px] flex-shrink-0 mx-auto">
                    <p className="text-gray-200 font-poppins text-[25px] font-extrabold leading-6 text-center">Values</p>
                  </div>

                  <div className="w-[325px] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
                    <p className="text-white font-poppins font-normal text-[20px] text-base leading-10">Our tech company stands firmly on the pillars of integrity, innovation, collaboration, and customer-centricity. These core values shape the essence of our organization, influencing every facet of our interactions with clients, partners, and within our team. Integrity is the bedrock of our operations, ensuring transparency and trust in all endeavors. We embrace innovation, constantly seeking novel solutions to meet evolving challenges. Collaboration is ingrained in our culture, fostering a sense of unity and collective achievement. Above all, customer-centricity drives our actions, putting the needs of our clients at the forefront. These values collectively create a culture of excellence, adaptability, and ethical practices, defining our identity and guiding us towards sustained success and positive impact in the tech industry.</p>
                  </div>
                </div>   
              </div>
          </div>
        </div>


    </div>
  )
}

export default About