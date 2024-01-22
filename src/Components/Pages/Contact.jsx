
const Contact = () => {
  return (
    <div id="contact">
<div className="w-[100%] h-[650px] bg-blue-100">

          {/* Contact Us  */}
          <div className="w-[350px] h-[90px] flex-shrink-0 absolute top-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-gray-900 text-center font-poppins text-5xl font-extrabold uppercase">Contact Us</p>
          </div>

          {/* The three Contacts */}

          <div className="threeContact ml-[300px] w-[1200px] flex-shrink-0 absolute top-[400px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
           
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


          </div>

    </div>
  )
}

export default Contact