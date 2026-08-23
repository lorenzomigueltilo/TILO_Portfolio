import profileImg from "../assets/Pic.JPG"


const Home = () => {


  return (

    <section
      id="home"
      className="
      min-h-screen
      bg-[#0B0F19]
      text-white
      flex
      items-center
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        pt-20
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >



        {/* Text Content */}
        <div>


          <p
            className="
            text-cyan-400
            text-lg
            font-medium
            mb-3
            "
          >
            Hello, I'm
          </p>



          <h1
            className="
            text-5xl
            md:text-6xl
            font-bold
            "
          >
            Lorenzo Miguel Tilo
          </h1>



          <h2
            className="
            mt-4
            text-2xl
            md:text-3xl
            font-semibold
            text-gray-300
            "
          >
            Quality Assurance
            <span className="text-cyan-400">
              .
            </span>
          </h2>



          <p
            className="
            mt-6
            text-gray-400
            leading-relaxed
            max-w-xl
            "
          >
            Detail-oriented Information Technology graduate with practical experience 
            in Game Development, Web Development, and Quality Assurance. Skilled in manual 
            testing and test case design, with front-end development experience using React.js, 
            Tailwind CSS, and Unity/C#. 
          </p>



          {/* Buttons */}
          <div
            className="
            flex
            gap-4
            mt-8
            "
          >


            <a
              href="#projects"
              className="
              bg-cyan-400
              text-black
              px-6
              py-3
              rounded-lg
              font-semibold
              hover:bg-cyan-300
              transition
              "
            >
              View Projects
            </a>



            <a
              href="#contact"
              className="
              border
              border-gray-700
              px-6
              py-3
              rounded-lg
              hover:border-cyan-400
              hover:text-cyan-400
              transition
              "
            >
              Contact Me
            </a>


          </div>




          {/* Skills */}
          <div
            className="
            grid
            grid-cols-4
            gap-x-8
            gap-y-3
            mt-10
            text-gray-400
            text-sm
            "
          >

            <span>
              C#
            </span>

            <span>
              HTML & CSS
            </span>

            <span>
              JavaScript
            </span>

            <span>
              Python
            </span>


            <span>
              Unity
            </span>

            <span>
              Tailwind CSS
            </span>

            <span>
              React.js
            </span>

            <span>
              Autodesk Maya
            </span>

          </div>



        </div>





        {/* Profile Image */}
        <div
          className="
          flex
          justify-center
          "
        >


          <div
            className="
            relative
            "
          >


            {/* Glow */}
            <div
              className="
              absolute
              inset-0
              bg-cyan-400
              blur-3xl
              opacity-20
              rounded-full
              "
            />



            <img
              src={profileImg}
              alt="Lorenzo Profile"
              className="
              relative
              w-72
              h-72
              scale-110
              rounded-full
              object-cover
              border-4
              border-gray-800
              "
            />


          </div>


        </div>



      </div>


    </section>

  )

}


export default Home
