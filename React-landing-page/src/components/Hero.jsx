export default function Hero(props) {
  console.log(props);
  return (
    <div className="">
      <div className="relative w-full h-screen">
        <img
          src="https://react-landing-page-template-93ne.vercel.app/img/intro-bg.jpg"
          alt="Background"
          className="absolute w-full h-full object-cover brightness-[75%]"
        />
        <h2 className="text-center text-7xl font-bold text-white relative top-48 w-2/5 left-1/3 py-5">
          WE ARE A LANDING PAGE
        </h2>
        <p className="text-center relative top-48 w-2/5 left-1/3 space-y-2 text-white font-light text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
          dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.
        </p>
        <button className="border rounded-full relative top-48 left-1/2 uppercase px-10 py-3 my-6 bg-custom-blue text-white">Learn More</button>
      </div>
    </div>
  );
}
