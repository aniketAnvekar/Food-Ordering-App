import Image from "next/image"
import Right from "../icons/Right"



function Hero() {
  return (
    <section className="hero">
        <div className="py-12">
            <h1 className="text-4xl">
                <span className="text-primary"> 
                Hungry?
                </span>
            </h1>
            <p className="text-1xl mt-4 text-gray-500">Don't worry,<br /> I got your back</p>
            <p className="text-2xl mt-1 text-gray-500">Checkout our menu now!</p>
            <div className="mt-2">
                <button className="bg-primary flex gap-2 rounded-full text-white px-8 py-2">
                    Order Now
                    <Right />
                </button>    
            </div>
            </div> 
        <div className="relative rounded-full overflow-hidden mt-4"> 
            <Image src={'/food_img.png'} layout={'fill'} objectFit={'contain'} alt={"Home Image"} />
        </div>
        
    </section>
  )
}

export default Hero
