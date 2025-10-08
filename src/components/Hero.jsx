import { BackgroundVideo } from "./BackgroundVideo";

function Hero() {
  return (
    <div
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen bg-transparent shadow-2xl text-center text-white p-4"
    >
      <BackgroundVideo></BackgroundVideo>
      <h1 className="text-5xl font-bold">Welcome to Our Website</h1>
      <p className="my-4 mx-40 text-xl font-bold ">
        Now, your home will be truly smart—everything is right at your
        fingertips. You can control lights, AC, fans, and curtains directly from
        your phone or even with your voice. Even when you’re not at home, you’ll
        still have full control, helping you save on electricity bills. The
        moment you open the door and step inside, the lights will turn on
        automatically, making life easier for children and elders. This
        technology makes your home not only interactive but also impressive. A
        house where everything is in your control—convenient, efficient, and
        modern.
      </p>
    </div>
  );
}

export default Hero;
