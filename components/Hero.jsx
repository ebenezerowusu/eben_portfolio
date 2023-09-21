import Image from 'next/image'
import React from 'react'

export const Hero = () => {
    const yearsOfExp = new Date().getFullYear() - 2022; 

  return (
      <div id="home" className="h-[40rem] w-full bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://img.freepik.com/free-photo/fantasy-enchanted-fairy-forest-magic-baby-dragon-generative-ai_157027-1747.jpg?w=1800&t=st=1695313149~exp=1695313749~hmac=df39f05728a135fe8beb8c015822b51e38648fdf8a9fc646b61f1ab602496c83')`,
          }}>
          <div className="h-full w-full flex justify-center items-end bg-gradient-to-tr from-[#002B6B]/70 via-[#10011A]/80 to-[#070643]/90 bg-blend-multiply">
              {/**Content */}  
                <div className="h-[60vh] w-1/3 space-y-10">
                    <h1 className="text-4xl text-white">
                        🙋‍♂️ Hi Am <span className="italic text-yellow-500">Ephraim</span>
                    </h1>

                    <p className="text-gray-200 text-xl font-thin leading-relaxed tracking-wide">
                      {`“Coding Enthusiast with ${yearsOfExp} year(s) of Professional Software engineering
                       experience. Crafting efficient solutions and optimizing code for
                        real-world challenges. Passionate  about technology and always
                        eager to embrace new opportunities.”`}
                    </p>
              </div>
                {/**Image */}
              <div className="relative h-[70vh] w-1/3">
                  {/**Import image component from nextjs */}
                  <Image
                      src={'/e.png'}
                      fill
                      alt="ephriam"
                      priority={true}
                      className="object-cover"
                      
                  />

              </div>
          </div>
      </div>
  )
}