import im from '../assets/images/hero4.jpg';

export default function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center px-6"
      style={{ backgroundImage: `url(${im})` }}
    >
      <div className="max-w-2xl text-white pl-4 md:pl-30">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Setting your Future<br />with medicine<br />and Care
        </h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem debitis magni earum, amet illum natus facere, cupiditate nesciunt iure officiis recusandae repellendus illo ipsum dolores itaque ex temporibus rerum.
        </p>
        <button className="mt-6 bg-yellow-500 text-black px-6 py-2 font-semibold hover:bg-yellow-600">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
}
