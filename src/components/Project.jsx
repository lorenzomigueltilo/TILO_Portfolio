import Babylon from "../assets/Babylon.jpg"
import TaskManager from "../assets/TaskManager.png"
import Beahm from "../assets/Beahm.jpg"
import MaskedMan from "../assets/MaskedMan.jpg"
import Catherine from "../assets/Catherine.jpg"

const Projects = () => {


  return (

    <section
      id="projects"
      className="
      min-h-screen
      bg-[#0B0F19]
      text-white
      py-24
      "
    >



      <div
        className="
        max-w-6xl
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
            Projects
          </p>



          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            "
          >

            My Featured
            <span className="text-cyan-400">
              Work
            </span>

          </h2>



          <p
            className="
            text-gray-400
            mt-5
            max-w-2xl
            leading-7
            "
          >

            A collection of web applications and
            creative 3D projects showcasing my
            development and design experience.

          </p>


        </div>













        {/* ================= WEB PROJECTS ================= */}


        <section
          className="
          mb-24
          "
        >


          <h3
            className="
            text-3xl
            font-bold
            mb-10
            "
          >

            Web Projects

          </h3>






          <div
            className="
            space-y-10
            "
          >








            {/* CMS Website */}


            <div
              className="
              border
              border-white/10
              rounded-2xl
              p-6
              flex
              flex-col
              md:flex-row
              gap-8
              hover:border-cyan-400/50
              transition
              "
            >




              <img
                src={Babylon}
                alt="CMS Website"
                className="
                w-full
                md:w-96
                rounded-xl
                object-cover
                "
              />





              <div
                className="
                flex
                flex-col
                justify-center
                "
              >


                <p
                  className="
                  text-cyan-400
                  text-sm
                  mb-2
                  "
                >

                  Full Stack Development

                </p>




                <h4
                  className="
                  text-2xl
                  font-bold
                  "
                >

                  CMS Website Thesis

                </h4>



                <p
                  className="
                  text-gray-400
                  mt-4
                  leading-7
                  "
                >

                  A content management system website
                  developed to manage and organize
                  digital content efficiently.

                </p>





                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-5
                  "
                >

                  <span className="projectTag">
                    PHP
                  </span>

                  <span className="projectTag">
                    HTML/CSS
                  </span>

                  <span className="projectTag">
                    Xampp
                  </span>


                </div>




                {/* CMS WEBSITE LINK */}

                <a
                  href="https://babyloncms.42web.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  mt-6
                  text-cyan-400
                  font-semibold
                  hover:text-cyan-300
                  transition
                  "
                >

                  View Project →

                </a>



              </div>



            </div>












            {/* Task Manager */}


            <div
              className="
              border
              border-white/10
              rounded-2xl
              p-6
              flex
              flex-col
              md:flex-row
              gap-8
              hover:border-cyan-400/50
              transition
              "
            >




              <img
                src={TaskManager}
                alt="Task Manager"
                className="
                w-full
                md:w-96
                rounded-xl
                object-cover
                "
              />





              <div
                className="
                flex
                flex-col
                justify-center
                "
              >



                <p
                  className="
                  text-cyan-400
                  text-sm
                  mb-2
                  "
                >

                  Front-End Development

                </p>




                <h4
                  className="
                  text-2xl
                  font-bold
                  "
                >

                  Task Manager Application

                </h4>




                <p
                  className="
                  text-gray-400
                  mt-4
                  leading-7
                  "
                >

                  A productivity application designed
                  to organize tasks and improve user
                  workflow.

                </p>




                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-5
                  "
                >

                  <span className="projectTag">
                    React
                  </span>


                  <span className="projectTag">
                    JavaScript
                  </span>


                  <span className="projectTag">
                    Tailwind CSS
                  </span>


                </div>




                <a
                  href="https://task-managerapp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  mt-6
                  text-cyan-400
                  font-semibold
                  hover:text-cyan-300
                  transition
                  "
                >

                  View Project →

                </a>



              </div>




            </div>






          </div>




        </section>














        {/* ================= 3D PROJECTS ================= */}



        <section>


          <h3
            className="
            text-3xl
            font-bold
            mb-10
            "
          >

            3D Art Projects

          </h3>





          <div
            className="
            grid
            md:grid-cols-3
            gap-6
            "
          >






            {/* Image 1 */}

            <div>


              <img
                src={MaskedMan}
                alt="3D Character"
                className="
                rounded-2xl
                w-full
                h-96
                object-contain
              bg-black
                hover:scale-105
                transition
                "
              />


              <h4
                className="
                text-lg
                font-semibold
                mt-4
                "
              >

                Knight

              </h4>


              <p
                className="
                text-gray-400
                text-sm
                "
              >

                Autodesk Maya

              </p>


            </div>









            {/* Image 2 */}


            <div>


              <img
                src={Catherine}
                alt="3D Character"
                className="
                rounded-2xl
                w-full
                h-96
                object-contain
              bg-black
                hover:scale-105
                transition
                "
              />


              <h4
                className="
                text-lg
                font-semibold
                mt-4
                "
              >

                Catherine

              </h4>


              <p
                className="
                text-gray-400
                text-sm
                "
              >

                Autodesk Maya

              </p>


            </div>









            {/* Image 3 */}


            <div>


              <img
                src={Beahm}
                alt="3D Character"
                className="
                rounded-2xl
                w-full
                h-96
                object-contain
              bg-black
                hover:scale-105
                transition
                "
              />


              <h4
                className="
                text-lg
                font-semibold
                mt-4
                "
              >

                Beahm

              </h4>


              <p
                className="
                text-gray-400
                text-sm
                "
              >

                Autodesk Maya

              </p>


            </div>




          </div>



        </section>





      </div>


    </section>

  )

}


export default Projects