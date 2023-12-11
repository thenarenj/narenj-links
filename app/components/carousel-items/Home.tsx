import { FaInstagram } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";
import Image from "next/image";

const Home = () => {
    return (
        <div id="home" className="carousel-item h-full bg-secondary-content">
            <div className='container mx-auto px-4 flex flex-col justify-center items-center gap-8'>
                {/* <Image src={'/assets/images/logotypefa.png'} className="mb-8" alt="logo" width={300} height={105} /> */}
                <h1 className="text-xl">راه های ارتباطی :</h1>
                <div className="flex flex-col gap-4">
                    <a href='https://instagram.com/narenj.web' className='btn btn-secondary'>
                        <FaInstagram className="text-2xl" />
                        اینستاگرام
                    </a>
                    <a href='https://t.me/narenj_web' className='btn btn-secondary'>
                        <FaTelegramPlane className="text-2xl" />
                        تلگرام
                    </a>
                    <a href='tel:+981144422984' className='btn btn-secondary'>
                        <FaPhoneFlip className="text-xl" />
                        تماس
                    </a>
                    <a href='mailto:narenj.official@gmail.com' className='btn btn-secondary'>
                        <RiMailOpenFill className="text-2xl" />
                        ایمیل
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home