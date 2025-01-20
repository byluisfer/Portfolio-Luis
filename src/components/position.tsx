export const TextRevealTW = () => {
  const text = [
    "Applikationsentwickler", 
    "in der Schweiz"
  ]; // Define el texto como un array de líneas

  return (
    <h1 className="overflow-hidden text-5xl sm:text-6xl md:text-7xl font-InstrumentSerif text-white leading-tight mt-5 cursor-default">
      {text.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.split("").map((char, charIndex) => (
            <span
              className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
              key={`${char}-${lineIndex}-${charIndex}`}
              style={{ animationDelay: `${(lineIndex * line.length + charIndex) * 0.04}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          {lineIndex < text.length - 1 && <br />} {/* Agrega un <br> excepto en la última línea */}
        </div>
      ))}
    </h1>
  );
};

export default TextRevealTW;