import React from "react"
import Image from "next/image"
import Header from "../../components/Header"
import Magnetic from "../../common/Magnetic"

const index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <h1 className="absolute -top-12 text-[237px] m-auto font font-semibold tracking-[-5%]">
        PLANN<span className="text-[#0000A3] font-bold">O</span>RIUM
      </h1>

      <div className="absolute top-[35%] left-[1%] w-[725px] h-[330px] bg-[#0000a3]">
        <div className="w-full h-full flex items-center justify-center">
          <Image src="/images/landing-image.png" width={579} height={0} alt="image" />
        </div>
        <p className="text-[30px] text">Pioneering Digital Excellence</p>
      </div>

      <div className="absolute left-[57%] top-[40%]">
        <p className="text-[30px] text max-w-145">We design and develop modern websites, digital platforms, and interactive experiences for visionary brands.</p>

        <div className="flex absolute top-[120%] gap-10">
          <Magnetic>
            <button className="button button-full">see our projects</button>
          </Magnetic>
          <button className="button">contact us</button>
        </div>
      </div>
    </main>
  )
}

export default index
