import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
const Navbar = () => {
  return (
    <>
      <nav className="flex  items-center   justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <img
              src="https://see.fontimg.com/api/rf5/W9lv/ZDIwOTU3YjMzOTkwNDI3MTk1YjhmMjNkYjlmMTY3NmEudHRm/TXQ/quartzo-bold.png?r=fs&h=81&w=1250&fg=ECE4E4&bg=000000&tb=1&s=65"
              className="mx-2 "
              width={50}
              height={33}
              alt="logo"
            />
          </a>
        </div>
        <div className="m-8  flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/mahesh-thakor-748471243/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MaheshThakor166"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/music.mzee/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/Mayur1661?s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </nav>
    </>
  )
}

export default Navbar
