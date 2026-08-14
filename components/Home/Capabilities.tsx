export default function Capabilities() {
  const skills = [
    "Industrial Automation",
    "PLC Programming",
    "HMI Development",
    "SCADA Systems",
    "Machine Retrofit",
    "Machine Modernization",
    "Electrical Engineering",
    "Control Panel Design",
    "Servo & Motion Control",
    "Industrial Networking",
    "PROFINET",
    "EtherNet/IP",
    "Modbus TCP/IP",
    "Siemens Automation",
    "Allen-Bradley",
    "Yaskawa",
    "Mitsubishi",
    "ABB",
    "Omron",
    "Machine Commissioning",
    "Industrial Troubleshooting",
    "Preventive Maintenance",
    "Production Monitoring",
    "Energy Optimization",
  ];

  return (
    <section className="bg-slate-950 py-28 text-white">
      <div className="mx-auto max-w-7xl px-8">

        {/* HEADER */}
        <div className="text-center">

          <span className="font-semibold uppercase tracking-[3px] text-orange-400">
            Engineering Expertise
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Industrial Automation & Engineering Capabilities
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-400">
            AENA Technologies combines industrial automation, PLC programming,
            electrical engineering, machine retrofit, motion control and
            industrial networking to modernize existing machinery and improve
            production performance.
          </p>

        </div>

        {/* CAPABILITIES GRID */}
        <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
                rounded-xl
                border
                border-slate-700
                bg-slate-900
                px-6
                py-5
                text-center
                font-semibold
                text-slate-200
                transition
                duration-300
                hover:-translate-y-1
                hover:border-orange-500
                hover:bg-slate-800
                hover:text-white
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}