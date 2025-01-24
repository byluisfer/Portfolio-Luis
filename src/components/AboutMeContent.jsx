const AboutMeContent = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto mt-12 relative">
      {/* Fixed photo on the left with texts */}
      <div className="w-full md:w-1/2 sticky top-28 self-start">
        <img
          src="/assets/perfil_photo.png"
          alt="Your Profile"
          className="rounded-3xl shadow-lg h-[525px] object-cover"
        />

        {/* Container witch the texts on the image center to the right */}
        <div className="absolute bottom-6 right-8 flex flex-col gap-4 items-end pr-4">
          <div className="bg-navbarBorder text-white font-InterTight text-sm px-2 py-1 rounded-2xl w-max ml-auto">
            🟢 Verfügbar für Arbeiten
          </div>
          <div className="bg-navbarBorder text-white font-InterTight text-sm px-2 py-1 rounded-2xl w-max ml-auto">
            💻 Anwendungsentwickler in der Schweiz
          </div>
          <div className="bg-navbarBorder text-white font-InterTight text-sm px-2 py-1 rounded-2xl w-max ml-auto">
            🚀 Jeden Tag besser in der Softwareentwicklung
          </div>
        </div>
      </div>

      {/* Container mit all the box on the right */}
      <div className="w-full md:w-2/3 flex flex-col gap-6">

        {/* My Story */}
        <div className="relative bg-nose border-2 border-navbarBorder p-10 rounded-3xl shadow-md text-white overflow-hidden">
          {/* Ligth effect on background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>

          {/* Noise on background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: "url('/assets/noise_2.png')", backgroundSize: "cover" }}
          ></div>

          <h2 className="text-3xl font-NyghtSerif italic font-bold mb-4 relative">
            My Story
          </h2>
          <p className="text-gray-300 relative">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong className="text-white"> Sed gravida magna at leo tincidunt congue.</strong> Duis eu dui tincidunt nisi fermentum volutpat eget nec justo.
          </p>
          <br />
          <p className="text-gray-300 relative">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong className="text-white"> Sed gravida magna at leo tincidunt congue.</strong> Duis eu dui tincidunt nisi fermentum volutpat eget nec justo.
          </p>
          <br />
          <p className="text-gray-300 relative">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong className="text-white"> Sed gravida magna at leo tincidunt congue.</strong> Duis eu dui tincidunt nisi fermentum volutpat eget nec justo.
          </p>
          <br />
          <p className="text-gray-300 relative">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<strong className="text-white"> Sed gravida magna at leo tincidunt congue.</strong> Duis eu dui tincidunt nisi fermentum volutpat eget nec justo.
          </p>
        </div>

        {/* Other box (not styled yet) */}
        {[2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-gray-800 p-6 rounded-3xl shadow-md text-white h-[300px]"
          >
            <p className="text-lg font-medium">Test</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMeContent;