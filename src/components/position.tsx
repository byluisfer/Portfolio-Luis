export const TextRevealTW = () => {
  const text = [
    "Applikationsentwickler", 
    "in der Schweiz"
  ];

  return (
    <h2 className="overflow-hidden text-3xl sm:text-6xl md:text-7xl font-InstrumentSerif text-white leading-tight mt-5 cursor-default">
      {text.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.split("").map((char, charIndex) => (
            <span
              className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
              key={`${char}-${lineIndex}-${charIndex}`}
              style={{ animationDelay: `${(lineIndex * line.length + charIndex) * 0.04}s` }}
              aria-hidden="true"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          {lineIndex < text.length - 1 && <br />} {/* Add an br except in the last line */}
        </div>
      ))}
    </h2>
  );
};

export default TextRevealTW;