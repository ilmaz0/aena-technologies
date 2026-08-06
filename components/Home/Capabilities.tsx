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
    "Servo Motion Control",
    "Industrial Networking",
    "Profinet",
    "Ethernet/IP",
    "Modbus TCP/IP",
    "Siemens",
    "Allen Bradley",
    "Yaskawa",
    "Mitsubishi",
    "ABB",
    "Omron",
    "Commissioning",
    "Troubleshooting",
    "Preventive Maintenance",
    "Production Monitoring",
    "Energy Optimization",
  ];

  return (
    <section className="bg-slate-950 py-28 text-white">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="text-orange-400 uppercase tracking-[3px] font-semibold">
            Expertise
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Engineering Capabilities
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-400">
            Comprehensive engineering services covering industrial automation,
            machine modernization and electrical systems.
          </p>

        </div>

        <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-5 text-center font-semibold transition hover:border-orange-500 hover:bg-slate-800"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}