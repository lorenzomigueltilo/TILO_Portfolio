import { 
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaFilePdf
} from "react-icons/fa"


import Resume from "../assets/Resume.pdf"



const Contact = () => {


  return (

    <section
      id="contact"
      className="
      min-h-screen
      bg-[#0B0F19]
      text-white
      py-24
      "
    >



      <div
        className="
        max-w-5xl
        mx-auto
        px-6
        "
      >





        {/* Header */}

        <div
          className="
          mb-16
          "
        >


          <p
            className="
            text-cyan-400
            uppercase
            tracking-widest
            text-sm
            mb-3
            "
          >
            Contact
          </p>



          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >

            Let's
            <span className="text-cyan-400">
              Connect
            </span>

          </h2>



          <p
            className="
            text-gray-400
            mt-5
            max-w-xl
            leading-relaxed
            "
          >

            Feel free to reach out for opportunities,
            collaborations, or professional inquiries.

          </p>



        </div>









        {/* Contact Information */}

        <div
          className="
          space-y-6
          "
        >







          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/lmtilo"
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-6
            border
            border-white/10
            rounded-2xl
            p-6
            hover:border-cyan-400/50
            transition
            "
          >


            <FaLinkedin
              className="
              text-cyan-400
              text-4xl
              "
            />


            <div>

              <h3
                className="
                text-xl
                font-semibold
                "
              >
                LinkedIn
              </h3>


              <p
                className="
                text-gray-400
                "
              >
                linkedin.com/in/lmtilo
              </p>


            </div>


          </a>









          {/* Resume */}

          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-6
            border
            border-white/10
            rounded-2xl
            p-6
            hover:border-cyan-400/50
            transition
            "
          >


            <FaFilePdf
              className="
              text-cyan-400
              text-4xl
              "
            />


            <div>


              <h3
                className="
                text-xl
                font-semibold
                "
              >
                Resume
              </h3>



              <p
                className="
                text-gray-400
                "
              >

                View my professional resume

              </p>


            </div>


          </a>









          {/* Email Address */}

          <div
            className="
            flex
            items-center
            gap-6
            border
            border-white/10
            rounded-2xl
            p-6
            "
          >


            <FaEnvelope
              className="
              text-cyan-400
              text-4xl
              "
            />


            <div>


              <h3
                className="
                text-xl
                font-semibold
                "
              >
                Email Address
              </h3>



              <p
                className="
                text-gray-400
                "
              >

                lorenzo.tilo@outlook.com

              </p>


            </div>


          </div>









          {/* Phone Number */}

          <div
            className="
            flex
            items-center
            gap-6
            border
            border-white/10
            rounded-2xl
            p-6
            "
          >


            <FaPhone
              className="
              text-cyan-400
              text-4xl
              "
            />



            <div>


              <h3
                className="
                text-xl
                font-semibold
                "
              >
                Phone Number
              </h3>



              <p
                className="
                text-gray-400
                "
              >

                +63 968 793 6898

              </p>


            </div>


          </div>








        </div>





      </div>


    </section>

  )

}


export default Contact