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

          {/* Title */}
          <div className="flex items-center gap-3 relative">
            {/* Punto LED */}
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1.0)]"></div>

            {/* Texto del título */}
            <h2 className="text-sm uppercase font-bold text-white opacity-50 tracking-[0.1em]">
              Meine Geschichte
            </h2>
          </div>

          <p className="text-gray-300 mt-6 relative">
            Ich bin<strong className="text-white"> Luis Fernández Da Silva </strong>, 18 Jahre alt und vor vier Jahren von Spanien in die Schweiz gezogen, um mein Studium zu vertiefen. 
          </p>
          <br />
          <p className="text-gray-300 relative">
          Ich habe mich schon immer für<strong className="text-white"> Technologie begeistert</strong>, und als ich ihr unendliches Potenzial entdeckte, alles Mögliche zu entwicklen, beschloss ich,<strong className="text-white"> Applikationsentwicklung zu studieren.</strong>
          </p>
          <br />
          <p className="text-gray-300 relative">
          Ich befinde mich derzeit im<strong className="text-white"> zweiten Jahr meines Studiums an der CsBe</strong>, wo ich<strong className="text-white"> grundlegende Kenntnisse im Frontend und Backend-Entwicklung</strong> gesammelt habe.
          </p>
          <br />
          <p className="text-gray-300 relative">
            Ich bin auf der Suche nach einer<strong className="text-white"> Praktikumsstelle als Applikationsentwicklung</strong>, bei der ich mein Wissen anwenden und meine Ausbildung abschliessen kann.
          </p>
        </div>

        {/* Stack */}
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
              Stack
            </h2>
          </div>

          <p className="text-gray-300 mt-6 relative">
            Ich bin<strong className="text-white"> Luis Fernández Da Silva </strong>, 18 Jahre alt und vor vier Jahren von Spanien in die Schweiz gezogen, um mein Studium zu vertiefen. 
          </p>
          <br />
          <p className="text-gray-300 relative">
          Ich habe mich schon immer für<strong className="text-white"> Technologie begeistert</strong>, und als ich ihr unendliches Potenzial entdeckte, alles Mögliche zu entwicklen, beschloss ich,<strong className="text-white"> Applikationsentwicklung zu studieren.</strong>
          </p>
          <br />
          <p className="text-gray-300 relative">
          Ich befinde mich derzeit im<strong className="text-white"> zweiten Jahr meines Studiums an der CsBe</strong>, wo ich<strong className="text-white"> grundlegende Kenntnisse im Frontend und Backend-Entwicklung</strong> gesammelt habe.
          </p>
          <br />
          <p className="text-gray-300 relative">
            Ich bin auf der Suche nach einer<strong className="text-white"> Praktikumsstelle als Applikationsentwicklung</strong>, bei der ich mein Wissen anwenden und meine Ausbildung abschliessen kann.
          </p>
        </div>

        <div className="relative bg-nose border-2 border-navbarBorder p-10 rounded-3xl shadow-md text-white overflow-hidden">
          {/* Ligth effect on background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>

          {/* Noise on background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{ backgroundImage: "url('/assets/noise_2.png')", backgroundSize: "cover" }}
          ></div>

          <h2 className="text-3xl font-NyghtSerif italic font-bold mb-4 relative">
            Meine Story
          </h2>
          <p className="text-gray-400 relative">
            Ich bin<strong className="text-white"> Luis Fernández Da Silva </strong>, 18 Jahre alt und vor vier Jahren von Spanien in die Schweiz gezogen, um mein Studium zu vertiefen. 
          </p>
          <br />
          <p className="text-gray-400 relative">
          Ich habe mich schon immer für<strong className="text-white"> Technologie begeistert</strong>, und als ich ihr unendliches Potenzial entdeckte, alles Mögliche zu entwicklen, beschloss ich,<strong className="text-white"> Applikationsentwicklung zu studieren.</strong>
          </p>
          <br />
          <p className="text-gray-400 relative">
          Ich befinde mich derzeit im<strong className="text-white"> zweiten Jahr meines Studiums an der CsBe</strong>, wo ich<strong className="text-white"> grundlegende Kenntnisse im Frontend und Backend-Entwicklung</strong> gesammelt habe.
          </p>
          <br />
          <p className="text-gray-300 relative">
            Ich bin auf der Suche nach einer<strong className="text-white"> Praktikumsstelle als Applikationsentwicklung</strong>, bei der ich mein Wissen anwenden und meine Ausbildung abschliessen kann.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeContent;