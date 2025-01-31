import VerticalTimelineModule from "react-vertical-timeline-component";
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineModule;
import "react-vertical-timeline-component/style.min.css";

const EducationTimeline = () => {

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#17171B", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #17171B" }}
        date="August 23 - Aktualität"
        iconStyle={{ background: "#fff" }}
        icon={
          <img
            src="/assets/csbe.webp"
            alt="Icon"
            loading="lazy"
            style={{
              width: "85%",
              height: "85%",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">ICT Ausbildung</h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{
            textShadow: `
              0 0 5px #5A5962,
              0 0 15px #5A5962,
              0 0 30px #5A5962
            `,
          }}
        >
          Computer Schule Bern
        </h4>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          <li>Entwerfen und Erstellen von Webanwendungen mit HTML, CSS und JavaScript.</li>
          <li>Effektive Zusammenarbeit in Teamprojekten und selbstständige Lösung von Aufgaben.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#17171B", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #17171B" }}
        date="August 21 - Juli 22"
        iconStyle={{ background: "#fff" }}
        icon={
          <img
            src="/assets/morillon.webp"
            alt="Icon"
            loading="lazy"
            style={{
              width: "85%",
              height: "85%",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Sekundarschule</h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{
            textShadow: `
              0 0 5px #5A5962,
              0 0 15px #5A5962,
              0 0 30px #5A5962
            `,
          }}
        >
          Schulhaus Morillon
        </h4>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          <li>Sich schnell an eine neue akademische Umgebung anpassen und gleichzeitig in einer Fremdsprache lernen.</li>
          <li>Aufbau von Grundlagenwissen in verschiedenen Fächern und gleichzeitige Integration in die Schweizer Schulkultur.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#17171B", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  #17171B" }}
        date="September 19 - Juli 20"
        iconStyle={{ background: "#fff" }}
        icon={
          <img
            src="/assets/cristoRey.webp"
            alt="Icon"
            loading="lazy"
            style={{
              width: "85%",
              height: "85%",
              borderRadius: "50%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Sekundarschule</h3>
        <h4
          className="vertical-timeline-element-subtitle"
          style={{
            textShadow: `
              0 0 5px #5A5962,
              0 0 15px #5A5962,
              0 0 30px #5A5962
            `,
          }}
        >
          Colegio Cristo Rey
        </h4>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          <li>Konsolidierung wichtiger akademischer Kenntnisse aus verschiedenen Fächern in einer dynamischen Lernumgebung.</li>
          <li>Teilnahme an Gruppenprojekten, die Zusammenarbeit und Problemlösung fördern.</li>
        </ul>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default EducationTimeline;
