const Navbar = () => {

  return (

    <nav
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-[#0B0F19]/70
      backdrop-blur-xl
      border-b
      border-white/10
      "
    >


      <div
        className="
        max-w-6xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        "
      >



        {/* Logo */}
        <h1
          className="
          text-2xl
          font-bold
          text-cyan-400
          "
        >
          Portfolio
        </h1>





        {/* Navigation Links */}
        <div
          className="
          hidden
          md:flex
          items-center
          gap-4
          ml-auto
          "
        >



          {/* Home */}
          <a
            href="#home"
            className="
            px-4
            py-2
            rounded-lg
            text-white
            font-medium
            transition-all
            duration-300
            hover:text-cyan-300
            hover:bg-cyan-400/10
            hover:border-cyan-400/30
            hover:scale-105
            "
          >
            Home
          </a>




          {/* About */}
          <a
            href="#about"
            className="
            px-4
            py-2
            rounded-lg
            text-white
            font-medium
            transition-all
            duration-300
            hover:text-cyan-300
            hover:bg-cyan-400/10
            hover:border-cyan-400/30
            hover:scale-105
            "
          >
            About
          </a>




          {/* Projects */}
          <a
            href="#projects"
            className="
            px-4
            py-2
            rounded-lg
            text-white
            font-medium
            transition-all
            duration-300
            hover:text-cyan-300
            hover:bg-cyan-400/10
            hover:border-cyan-400/30
            hover:scale-105
            "
          >
            Projects
          </a>




          {/* Contact */}
          <a
            href="#contact"
            className="
            px-4
            py-2
            rounded-lg
            text-white
            font-medium
            transition-all
            duration-300
            hover:text-cyan-300
            hover:bg-cyan-400/10
            hover:border-cyan-400/30
            hover:scale-105
            "
          >
            Contact
          </a>



        </div>



      </div>


    </nav>

  )

}


export default Navbar