import { Link } from 'react-router-dom';

//import ScrollButton from './ScrollButton'; // Make sure to provide the correct path



const Home = () => {

  const scrollToTop = () => {
    // Add your scroll to top logic here
    window.scrollTo({
      top: [3],
      behavior: 'smooth',
    });
  }; 

 
  return (
    <div className='mx-auto w-[100%px] h-[3300px] z-1 bg-blue-100'>
        <div id="Home"></div>
        <div className="h-[160px]"></div>
        {/* Header hero  */}
      <div className='hero w-[90%] h-[500px] mx-auto flex-shrink-0'>
              {/* Hero image */}
        <img
        className="w-[100%] h-[500px] rounded-md"
        src="src/resources/hero-1.jpg"
        alt="Your Image"
        />


      {/* Hero Write-up */}
        <div className="w-[1000px] h-[250px] flex-shrink-0 absolute top-[350px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <p className="text-white text-center text-shadow font-poppins text-7xl font-extrabold leading-tight uppercase">Building Tomorrows Solutions</p>
        </div>

        <a href="tel:+2348037491748" className="w-[200px] h-[70px] flex-shrink-0 rounded-full bg-white hover:bg-gray-300 shadow-lg absolute top-[500px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer">
          <p className="text-blue-900 text-center font-poppins text-2xl font-bold">Call Now</p>
        </a>
      </div> 


      
      {/* services */}
      <div className="w-[280px] h-[90px] flex-shrink-0 absolute top-[800px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-gray-900 text-center font-poppins text-5xl font-extrabold uppercase">Services</p>
      </div>

      {/* three services */}
      <div className="w-[1200px] h-[500px] flex-shrink-0 flex justify-between absolute top-[1100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       
        {/* service one */}
        <Link to="/Services#innovativeSolutions" onClick={scrollToTop}>
        <div className="w-[380px] h-[500px] rounded-[30px] bg-gray-100 shadow-md flex-shrink-0">
        {/* <ScrollButton targetId="innovativeSolutions">Scroll to Innovative Solutions</ScrollButton> */}
          <img
          className="w-[380px] h-[300px] rounded-t-[30px] bg-cover bg-no-repeat bg-center"
          src="src/resources/service-Innovative-Solutions.jpg"
          alt="Your Image"
          />
            {/* service write up */}
          <div className="mt-[20px]">
            <div className="w-[325px] h-[24px] flex-shrink-0 mx-auto">
              <p className="text-green-900 font-poppins text-[25px] font-extrabold leading-6">Innovative-Solutions</p>
            </div>

            <div className="w-[325px] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
              <p className="text-green-900 font-poppins text-[17px] font-normal leading-5">We offers tailored problem-solving, technology integration, consulting, and product development, driving digital transformation, efficiency, and user-centric innovation</p>
            </div>
          </div>   
        </div>
        </Link>



            {/* service two */}
        <Link to="/Services#Scalability" onClick={scrollToTop}>
        <div className="w-[380px] h-[500px] rounded-[30px] bg-gray-100 shadow-md flex-shrink-0">
          <img
          className="w-[380px] h-[300px] rounded-t-[30px] bg-cover bg-no-repeat bg-center"
          src="src/resources/service-Scalability.jpg"
          alt="Your Image"
          />
            {/* service write up */}
          <div className="mt-[20px]">
            <div className="w-[325px] h-[24px] flex-shrink-0 mx-auto">
              <p className="text-green-900 font-poppins text-[25px] font-extrabold leading-6">Scalability</p>
            </div>

            <div className="w-[325px] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
              <p className="text-green-900 font-poppins text-[17px] font-normal leading-5">we specialize in Scalability solutions, optimizing systems for growth, ensuring efficient performance, and adaptability to evolving demands, thus sustaining long-term success and facilitating seamless expansion for our customers.</p>
            </div>
          </div>   
        </div>
        </Link>



            {/* service three */}
        <Link to="/Services#Scalability" onClick={scrollToTop}>
        <div className="w-[380px] h-[500px] rounded-[30px] bg-gray-100 shadow-md flex-shrink-0">
          <img
          className="w-[380px] h-[300px] rounded-t-[30px] bg-cover bg-no-repeat bg-center"
          src="src/resources/service-Security.jpg"
          alt="Your Image"
          />
            {/* service write up */}
          <div className="mt-[20px]">
            <div className="w-[325px] h-[24px] flex-shrink-0 mx-auto">
              <p className="text-green-900 font-poppins text-[25px] font-extrabold leading-6">Security</p>
            </div>

            <div className="w-[325px] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
              <p className="text-green-900 font-poppins text-[17px] font-normal leading-5">We provide robust cybersecurity solutions, comprehensive threat detection, and prevention measures, ensuring data integrity and safeguarding against evolving digital risks for our clients.</p>
            </div>
          </div>   
        </div>
        </Link>

        <a href="tel:+2348037491748" className="w-[200px] h-[70px] flex-shrink-0 rounded-full bg-gray-200 hover:bg-gray-300 shadow-lg absolute top-[600px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer">
          <p className="text-blue-900 text-center font-poppins text-2xl font-bold">Call Now</p>
        </a>
      </div>


      {/* About us */}
      <Link to="/About" onClick={scrollToTop}>
      <div className="w-[280px] h-[90px] flex-shrink-0 absolute top-[1650px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-gray-900 text-center font-poppins text-5xl font-extrabold uppercase">About Us</p>
      </div>

      <div className=' w-[100%] h-[500px] flex-shrink-0 absolute top-[1700px]'>
                    {/* about banner image */}
              <img
              className="w-[90%] h-[500px] mx-auto rounded-md"
              src="src/resources/hero-2.jpg"
              alt="Your Image"
              />

              {/* three about */}
            <div className="w-[1200px] h-[500px] flex-shrink-0 flex justify-between absolute top-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            {/* Mission */}
                      <div className="w-[380px] h-[400px] rounded-[30px] bg-white bg-opacity-10 shadow-md flex-shrink-0">
                      
                          {/* Mission write up */}
                        <div className="mt-[20px]">
                          <div className="w-[325px] h-[24px] flex-shrink-0 mx-auto">
                            <p className="text-gray-200 font-poppins text-[25px] font-extrabold leading-6 text-center">Mission</p>
                          </div>

                          <div className="w-[325px] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
                            <p className="text-white font-poppins text-[20px] font-normal text-base leading-loose">The mission of our tech company is to harness cutting-edge technology to address complex business challenges, providing innovative solutions that empower businesses and individuals to thrive in the digital era.</p>
                          </div>
                        </div>   
                      </div>




                      {/* Goals */}
                      <div className="w-[380px] h-[400px] rounded-[30px] bg-white bg-opacity-10 shadow-md flex-shrink-0">
                  
                  {/* Goals write up */}
                <div className="mt-[20px]">
                  <div className="w-[325px] h-[24px] flex-shrink-0 mx-auto">
                    <p className="text-gray-200 font-poppins text-[25px] font-extrabold leading-6 text-center">Goals</p>
                  </div>

                  <div className="w-[325px] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
                    <p className="text-white font-poppins text-[20px] font-normal text-base leading-loose">Our goals include developing scalable software solutions, measured through key performance indicators and project timelines. These goals drive our commitment to advancing technology and delivering impactful solutions.</p>
                  </div>
                </div>   
              </div>




                    {/* Values */}
                    <div className="w-[380px] h-[400px] rounded-[30px] bg-white bg-opacity-10 shadow-md flex-shrink-0">
                  
                  {/* Values write up */}
                <div className="mt-[20px]">
                  <div className="w-[325px] h-[24px] flex-shrink-0 mx-auto">
                    <p className="text-gray-200 font-poppins text-[25px] font-extrabold leading-6 text-center">Values</p>
                  </div>

                  <div className="w-[325px] h-[120px] flex-shrink-0 mx-auto mt-[20px]">
                    <p className="text-white font-poppins font-normal text-[20px] leading-loose">Our tech company is built on a foundation of integrity, innovation, collaboration, and customer-centricity. These values guide our interactions with clients, partners, and each other, fostering a culture of excellence, adaptability, and ethical practices.</p>
                  </div>
                </div>   
              </div>
          </div>
        </div>
        </Link>




      {/* Testimonials */}
      <Link to="/Testimonials" onClick={scrollToTop}>
      <div className="w-[280px] h-[90px] flex-shrink-0 absolute top-[2380px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-gray-900 text-center font-poppins text-5xl font-extrabold uppercase">Testimonials</p>
      </div>

        {/* All four testimonials */}
      <div className="testimonial w-[1200px] h-[500px] flex justify-between flex-shrink-0 absolute top-[2680px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
       
        <div>

          {/* One */}
            <div className="one w-[575px] h-[225px] flex justify-between flex-shrink-0 rounded-xl border border-green-500 bg-white">
            <img
              className="w-[80px] h-[80px] rounded-[80px] mt-[40px] ml-[30px]"
              src="src/resources/one.jpeg"
              alt="Your Image"
              />
              
              {/* writeups */}
              <div className="relative">
                <div className="writeups mr-[20px]">
                  <div className="w-[400px] h-[22px] flex-shrink-0 mt-[5px] mb-[20px]">
                    <p className="text-green-500 font-poppins text-base font-bold leading-6">James Obi - Business Owner</p>
                  </div>

                  <div className="w-[400px] h-[22px] flex-shrink-0">
                    <p className="text-green-900 font-poppins text-[15px] font-normal leading-6">“Our experience with this tech company has been transformative. Their innovative solutions not only addressed our complex business challenges but propelled us into the digital era. Their commitment to excellence is evident in the scalable software solutions that have significantly enhanced our operations.”</p>
                  </div>
                </div>

                <div className="absolute bottom-0 w-[400px] h-[22px] flex-shrink-0">
                  <p className="text-green-500 font-poppins text-[25px] font-bold leading-6">* * * * *</p>
                </div>
              </div>


            </div>

            {/* two */}
            <div className="two absolute bottom-1 w-[575px] h-[225px] flex justify-between flex-shrink-0 rounded-xl border border-green-500 bg-white">
            <img
              className="w-[80px] h-[80px] rounded-[80px] mt-[40px] ml-[30px]"
              src="src/resources/two.jpeg"
              alt="Your Image"
              />
              
              {/* writeups */}
              <div className="relative">
                <div className="writeups mr-[20px]">
                  <div className="w-[400px] h-[22px] flex-shrink-0 mt-[5px] mb-[20px]">
                    <p className="text-green-500 font-poppins text-base font-bold leading-6">Kerim douglays - Project Manager</p>
                  </div>

                  <div className="w-[400px] h-[22px] flex-shrink-0">
                    <p className="text-green-900 font-poppins text-[15px] font-normal leading-6">“Working with this tech company on our latest project was a game-changer. Their dedication to meeting project timelines and delivering impactful solutions exceeded our expectations. The collaboration and adaptability displayed by their team truly set them apart.”</p>
                  </div>
                </div>

                <div className="absolute bottom-4 w-[400px] h-[22px] flex-shrink-0">
                  <p className="text-green-500 font-poppins text-[25px] font-bold leading-6">* * * * *</p>
                </div>
              </div>


            </div>
        </div>


        <div>
          {/* three */}
          <div className="three w-[575px] h-[225px] flex justify-between flex-shrink-0 rounded-xl border border-green-500 bg-white">
            <img
              className="w-[80px] h-[80px] rounded-[80px] mt-[40px] ml-[30px]"
              src="src/resources/three.jpg"
              alt="Your Image"
              />
              
              {/* writeups */}
              <div className="relative">
                <div className="writeups mr-[20px]">
                  <div className="w-[400px] h-[22px] flex-shrink-0 mt-[5px] mb-[20px]">
                    <p className="text-green-500 font-poppins text-base font-bold leading-6">Jane Rob - Technology Enthusiast</p>
                  </div>

                  <div className="w-[400px] h-[22px] flex-shrink-0">
                    <p className="text-green-900 font-poppins text-[15px] font-normal leading-6">“I&rsquo;m continually impressed with the cutting-edge technology this company employs. Their commitment to advancing technology is evident in every solution they provide. Their innovative approach reflects a deep understanding of industry needs.”</p>
                  </div>

                </div>

                <div className="absolute bottom-4 w-[400px] h-[22px] flex-shrink-0">
                  <p className="text-green-500 font-poppins text-[25px] font-bold leading-6">* * * * *</p>
                </div>
              </div>


            </div>

            {/* four */}
            <div className="four absolute bottom-0 w-[575px] h-[225px] flex justify-between flex-shrink-0 rounded-xl border border-green-500 bg-white">
            <img
              className="w-[80px] h-[80px] rounded-[80px] mt-[40px] ml-[30px]"
              src="src/resources/four.jpg"
              alt="Your Image"
              />
              
              {/* writeups */}
              <div className="relative">
                <div className="writeups mr-[20px]">
                  <div className="w-[400px] h-[22px] flex-shrink-0 mt-[5px] mb-[20px]">
                    <p className="text-green-500 font-poppins text-base font-bold leading-6">Amy Moore </p>
                  </div>

                  <div className="w-[400px] h-[22px] flex-shrink-0">
                    <p className="text-green-900 font-poppins text-[15px] font-normal leading-6">“Integrity, innovation, and customer-centricity are not just values on paper for this tech company; they are at the core of every interaction. Their commitment to ethical practices and collaborative partnerships has made them our trusted technology partner. Highly recommend!”</p>
                  </div>
                </div>

                <div className="absolute bottom-4 w-[400px] h-[22px] flex-shrink-0">
                  <p className="text-green-500 font-poppins text-[25px] font-bold leading-6">* * * * *</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      </Link>


          {/* Contact Us  */}
          <Link to="/contact" onClick={scrollToTop}>
          <div className="w-[350px] h-[90px] flex-shrink-0 absolute top-[3100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-gray-900 text-center font-poppins text-5xl font-extrabold uppercase">Contact Us</p>
          </div>

          {/* The three Contacts */}

          <div className="threeContact ml-[300px] w-[1200px] flex-shrink-0 absolute top-[3200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
           
                {/* Mail */}
            <div className="mail w-[1000px] flex justify-between mb-5">
            <img
              className="w-[30px] h-[30px]"
              src="src/resources/mail.jpg"
              alt="Your Image"
            />

            <div className="w-[900px]">
              <p className="text-gray-900 font-tt-hoves text-[20px] font-medium leading-normal">contact@derutron.com</p>
            </div>
            </div>



                   {/* Call */}
                   <div className="mail w-[1000px] flex justify-between mb-5">
            <img
              className="w-[30px] h-[30px]"
              src="src/resources/call.jpg"
              alt="Your Image"
            />

            <div className="w-[900px]">
              <p className="text-gray-900 font-tt-hoves text-[20px] font-medium leading-normal">+234-803-7491-748</p>
            </div>
            </div>



                   {/* Location */}
                   <div className="mail w-[1000px] flex justify-between">
            <img
              className="w-[30px] h-[30px]"
              src="src/resources/location.jpg"
              alt="Your Image"
            />

            <div className="w-[900px]">
              <p className="text-gray-900 font-tt-hoves text-[20px] font-medium leading-normal">11 Third Lane off summot road, Osisioma, aba, Abia state, Nigeria.</p>
            </div>
            </div>

          </div>
          </Link>





    </div>
  )
}

export default Home