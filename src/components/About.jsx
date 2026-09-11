import HtmlCssCertificate from "../assets/HTML&CSS_Certification.pdf"
import JavascriptCertificate from "../assets/JavaScript_Cert.pdf"
import PythonCertificate from "../assets/Python_Cert.pdf"
import ProjectManagementCertificate from "../assets/PMI Project Management Ready.pdf"
import MayaCertificate from "../assets/Maya_Certifications.pdf"
import NetworkingCertificate from "../assets/NETWORKING_Certification.pdf"

const About = () => {

  return (

    <section
      id="about"
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
          mb-14
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

            About Me

          </p>


          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >

            My Professional
            <span className="text-cyan-400">
              Journey
            </span>

          </h2>


        </div>









        {/* Introduction */}

        <div
          className="
          max-w-3xl
          mb-20
          "
        >

          <p
            className="
            text-gray-400
            leading-7
            "
          >

            I am an Information Technology graduate with
            experience in Quality Assurance, Web Development,
            and Game Development.

            Through my internship experiences, I have worked
            on developing applications, designing interfaces,
            testing software functionality, and improving
            user experiences through quality-driven solutions.

          </p>


        </div>













        {/* Education */}

        <section
          className="
          mb-24
          "
        >


          <h3
            className="
            text-3xl
            font-bold
            mb-8
            "
          >

            Education

          </h3>





          <div
            className="
            flex
            flex-col
            md:flex-row
            md:justify-between
            "
          >


            <div>


              <h4
                className="
                text-2xl
                font-bold
                "
              >

                FEU Institute of Technology

              </h4>



              <p
                className="
                text-cyan-400
                mt-3
                "
              >

                Bachelor of Science in Information Technology

              </p>



              <p
                className="
                text-gray-400
                mt-2
                "
              >

                Specialization in Animation and Game Development

              </p>


            </div>




            <p
              className="
              text-cyan-400
              text-sm
              font-semibold
              mt-3
              md:mt-0
              "
            >

              2026

            </p>



          </div>


        </section>

        {/* Experience */}

        <section>


          <h3
            className="
            text-3xl
            font-bold
            mb-10
            "
          >

            Experience

          </h3>


          {/* Timeline */}

          <div
            className="
            border-l
            border-white/20
            ml-3
            space-y-14
            "
          >


            {/* Highly Succeed */}


            <div
              className="
              relative
              pl-8
              "
            >


              <div
                className="
                absolute
                -left-[9px]
                top-1
                w-4
                h-4
                rounded-full
                bg-cyan-400
                "
              />

              <div
                className="
                flex
                flex-col
                md:flex-row
                md:justify-between
                "
              >


                <h4
                  className="
                  text-2xl
                  font-bold
                  "
                >

                  Highly Succeed Inc.

                </h4>



                <p
                  className="
                  text-cyan-400
                  font-semibold
                  text-sm
                  mt-2
                  md:mt-0
                  "
                >

                  January - March 2026

                </p>


              </div>









              {/* Quality Assurance Intern */}

              <h5
                className="
                text-lg
                font-semibold
                text-cyan-400
                mt-3
                mb-4
                "
              >

                Quality Assurance Intern

              </h5>




              <ul
                className="
                text-gray-400
                text-sm
                leading-7
                list-disc
                ml-5
                space-y-2
                "
              >

                <li>
                  Designed manual test cases across multiple client websites, including an alumni engagement platform 
                  and a barangay management system, to validate their functionality and track progress over time. 
                </li>


                <li>
                  Conducted manual regression testing on client platforms such as a municipal government and a hospital 
                  information system, using documented test cases to catch defects and ensure reliable deployment.
                </li>


                <li>
                  Annotated native tobacco plant imagery on a custom built website platform, labeling plants by health status 
                  to verify AI model accuracy in automated disease detection
                </li>


              </ul>



              {/* Web Developer Intern */}

              <h5
                className="
                text-lg
                font-semibold
                text-cyan-400
                mt-8
                mb-4
                "
              >

                Web Developer Intern

              </h5>



              <ul
                className="
                text-gray-400
                text-sm
                leading-7
                list-disc
                ml-5
                space-y-2
                "
              >

                <li>
                  Coded the front-end features of the alumni engagement platform using React.js and Tailwind CSS, 
                  ensuring consistent display across devices.
                </li>


                <li>
                  Implemented the back-end features of the alumni engagement platform using MongoDB, structuring data storage 
                  for user accounts and profile information, enabling reliable account access and management. 
                </li>


                <li>
                  Created manual test cases for the alumni engagement platform, conducting UI testing to identify and resolve 
                  issues before release. 
                </li>


              </ul>


            </div>


            {/* FEU TECH */}


            <div
              className="
              relative
              pl-8
              "
            >


              <div
                className="
                absolute
                -left-[9px]
                top-1
                w-4
                h-4
                rounded-full
                bg-cyan-400
                "
              />



              <div
                className="
                flex
                flex-col
                md:flex-row
                md:justify-between
                "
              >


                <h4
                  className="
                  text-2xl
                  font-bold
                  "
                >

                  FEU TECH Innovation Center

                </h4>



                <p
                  className="
                  text-cyan-400
                  font-semibold
                  text-sm
                  mt-2
                  md:mt-0
                  "
                >

                  September - December 2025

                </p>


              </div>

              <h5
                className="
                text-lg
                font-semibold
                text-cyan-400
                mt-3
                mb-4
                "
              >

                Game Developer Intern

              </h5>

              <ul
                className="
                text-gray-400
                text-sm
                leading-7
                list-disc
                ml-5
                space-y-2
                "
              >

                <li>
                  Developed Tam’s Quiz, a 2D game focusing on Design Thinking concepts through interactive gameplay, 
                  enhancing the players learning experience.  
                </li>


                <li>
                  Coded gameplay mechanics and game logic using C# and Unity, delivering smooth gameplay.
                </li>


                <li>
                  Performed functional testing across gameplay to identify and resolve bugs, improving the overall game stability and player experience.
                </li>


              </ul>



            </div>




          </div>


        </section>












        {/* Certifications */}


        <section
          className="
          mt-24
          "
        >


          <h3
            className="
            text-3xl
            font-bold
            mb-6
            "
          >

            Certifications

          </h3>




          {/* Row 1 */}

          <div
            className="
            flex
            flex-wrap
            gap-3
            mb-3
            "
          >

            {[
              {
                name: "Autodesk Certified User: Maya",
                file: MayaCertificate
              },

              {
                name: "PMI: Project Management Ready",
                file: ProjectManagementCertificate
              },

              {
                name: "IT Specialist: HTML & CSS",
                file: HtmlCssCertificate
              }


            ].map((certificate,index)=>(


              <button
                key={index}
                onClick={() => window.open(certificate.file, "_blank")}
                className="
                px-4
                py-2
                rounded-full
                border
                border-white/20
                text-sm
                text-gray-300
                hover:border-cyan-400
                hover:text-cyan-400
                hover:-translate-y-1
                transition
                duration-300
                cursor-pointer
                "
              >

                {certificate.name}

              </button>


            ))}


          </div>






          {/* Row 2 */}

          <div
            className="
            flex
            flex-wrap
            gap-3
            "
          >

            {[
              {
                name: "IT Specialist: Networking",
                file: NetworkingCertificate
              },

              {
                name: "Python Developer Certification",
                file: PythonCertificate
              },

              {
                name: "JavaScript Developer Certification",
                file: JavascriptCertificate
              }


            ].map((certificate,index)=>(


              <button
                key={index}
                onClick={() => window.open(certificate.file, "_blank")}
                className="
                px-4
                py-2
                rounded-full
                border
                border-white/20
                text-sm
                text-gray-300
                hover:border-cyan-400
                hover:text-cyan-400
                hover:-translate-y-1
                transition
                duration-300
                cursor-pointer
                "
              >

                {certificate.name}

              </button>


            ))}


          </div>



        </section>



      </div>


    </section>

  )

}


export default About