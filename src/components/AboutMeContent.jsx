import Globe from "./Globe.jsx";

const AboutMeContent = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto mt-12 relative">
      {/* Fixed photo on the left with texts */}
      <div className="w-full md:w-1/2 md:sticky top-28 self-start">
        <img
          src="/assets/perfil_photo.png"
          alt="Your Profile"
          className="rounded-3xl shadow-lg h-[525px] object-cover"
        />
      </div>

      {/* Container mit all the box on the right */}
      <div className="w-full md:w-7/12 flex mt-6 sm:mt-0 flex-col gap-6">

        {/* My Story */}
        <div className="relative bg-nose border-2 border-navbarBorder p-10 rounded-3xl shadow-md text-white overflow-hidden">
          {/* Ligth effect on background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>

          {/* Noise on background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: "url('/assets/noise_2.png')", backgroundSize: "cover" }}
          ></div>

          {/* Title */}
          <div className="flex items-center gap-3 relative">
            {/* Punto LED */}
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1.0)]"></div>

            {/* Texto del título */}
            <h2 className="text-sm uppercase font-bold text-white opacity-50 tracking-[0.1em]">
              Meine Geschichte
            </h2>
          </div>

          <p className="text-gray-300 text-base sm:text-lg mt-6 relative">
            Ich bin<strong className="text-white"> Luis Fernández Da Silva </strong>, 18 Jahre alt und vor vier Jahren von Spanien in die Schweiz gezogen, um mein Studium zu vertiefen. 
          </p>
          <br />
          <p className="text-gray-300 text-base sm:text-lg relative">
          Ich habe mich schon immer für<strong className="text-white"> Technologie begeistert</strong>, und als ich ihr unendliches Potenzial entdeckte, alles Mögliche zu entwicklen, beschloss ich,<strong className="text-white"> Applikationsentwicklung zu studieren.</strong>
          </p>
          <br />
          <p className="text-gray-300 text-base sm:text-lg relative">
          Ich befinde mich derzeit im<strong className="text-white"> zweiten Jahr meines Studiums an der CsBe</strong>, wo ich<strong className="text-white"> grundlegende Kenntnisse im Frontend und Backend-Entwicklung</strong> gesammelt habe.
          </p>
          <br />
          <p className="text-gray-300 text-base sm:text-lg relative">
            Ich bin auf der Suche nach einer<strong className="text-white"> Praktikumsstelle als Applikationsentwicklung</strong>, bei der ich mein Wissen anwenden und meine Ausbildung abschliessen kann.
          </p>
        </div>

        {/* Stack */}
        <div className="relative bg-nose border-2 border-navbarBorder p-10 rounded-3xl shadow-md text-white overflow-hidden w-full">
          {/* Efecto de luz en el fondo */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>

          {/* Noise en el fondo */}
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('/assets/noise_2.png')", backgroundSize: "cover" }}></div>

          {/* Título */}
          <div className="flex items-center gap-3 relative">
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1.0)]"></div>
            <h2 className="text-sm uppercase font-bold text-white opacity-50 tracking-[0.1em]">
              Meine Stack
            </h2>
          </div>

          {/* Carrusel with the apps icons */}
          <div
            className="relative w-full mx-auto p-4 overflow-hidden mt-4"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="flex w-max whitespace-nowrap animate-scroll items-center">
              {[
                "/assets/Vscode.png",
                "/assets/Figma.png",
                "/assets/Github.png",
                "/assets/Notion.png",
                "/assets/Docker.png",
                "/assets/Warp.png",
              ]
                .concat([
                  "/assets/Vscode.png",
                  "/assets/Figma.png",
                  "/assets/Github.png",
                  "/assets/Notion.png",
                  "/assets/Docker.png",
                  "/assets/Warp.png",
                ])
                .map((icon, index) => (
                  <div
                    key={index}
                    className="h-16 w-16 mx-3 bg-nose rounded-xl flex justify-center items-center shadow-md"
                  >
                    <img
                      src={icon}
                      alt={`Stack Icon ${index}`}
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="relative bg-nose border-2 border-navbarBorder rounded-3xl shadow-md text-white overflow-hidden">
          {/* Efecto de luz */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>

          {/* Noise en el fondo */}
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: "url('/assets/noise_2.png')", backgroundSize: "cover" }}
          ></div>

          {/* Título */}
          <div className="flex items-center gap-3 p-10 relative">
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1.0)]"></div>
            <h2 className="text-sm uppercase font-bold text-white opacity-50 tracking-[0.1em]">
              Schweiz • UTC/GMT +1
            </h2>
          </div>

          {/* Render the globe */}
          <div className="relative w-full h-[165px] sm:h-[300px] flex justify-center items-end overflow-hidden">
            <Globe />
          </div>
        </div>

        {/* Languages */}
        <div className="relative bg-nose border-2 border-navbarBorder rounded-3xl shadow-md text-white overflow-hidden p-10">
          {/* Efecto de luz */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>

          {/* Noise en el fondo */}
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: "url('/assets/noise_2.png')", backgroundSize: "cover" }}
          ></div>

          {/* Título */}
          <div className="flex items-center gap-3 relative mb-6">
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1.0)]"></div>
            <h2 className="text-sm uppercase font-bold text-white opacity-50 tracking-[0.1em]">
              Sprachen
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-2 sm:gap-6">
            {/* German */}
            <div className="bg-background border-2 border-navbarBorder rounded-xl shadow-md p-4 w-full md:w-1/3 text-center">
              <h3 className="text-xl font-bold text-white">Deutsch</h3>
              <p className="text-quatenario">Fliessend</p>
            </div>

            {/* Inglish */}
            <div className="bg-background border-2 border-navbarBorder rounded-xl shadow-md p-4 w-full md:w-1/3 text-center">
              <h3 className="text-xl font-bold text-white">Englisch</h3>
              <p className="text-quatenario">Fliessend</p>
            </div>

            {/* Spanish */}
            <div className="bg-background border-2 border-navbarBorder rounded-xl shadow-md p-4 w-full md:w-1/3 text-center">
              <h3 className="text-xl font-bold text-white">Spanisch</h3>
              <p className="text-quatenario">Muttersprache</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;