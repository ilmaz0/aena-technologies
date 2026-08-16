import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://www.aenatechnologies.com";
const PAGE_URL = `${SITE_URL}/services/machine-retrofit`;

export const metadata: Metadata = {
  title:
    "Industrial Machine Retrofit & Makine Revizyonu | AENA Technologies",

  description:
    "Industrial machine retrofit, makine revizyonu ve makine modernizasyonu hizmetleri. PLC, HMI, sürücü, servo, sensör, elektrik pano ve endüstriyel haberleşme sistemlerinin yenilenmesi. Adana ve Türkiye genelinde.",

  keywords: [
    // English
    "industrial machine retrofit",
    "machine retrofit",
    "industrial machine modernization",
    "machine modernization services",
    "machine retrofit Turkey",
    "industrial machine retrofit Turkey",
    "industrial automation retrofit",
    "electrical machine retrofit",
    "PLC retrofit",
    "PLC replacement",
    "obsolete PLC replacement",
    "HMI modernization",
    "HMI replacement",
    "drive replacement",
    "servo drive replacement",
    "industrial drive retrofit",
    "sensor replacement",
    "industrial sensor integration",
    "industrial communication retrofit",
    "industrial gateway integration",
    "machine control modernization",
    "electrical panel modernization",
    "production line modernization",
    "obsolete machine modernization",
    "machine commissioning",
    "industrial automation Turkey",
    "factory machine modernization",

    // Turkish
    "makine revizyonu",
    "makine revizyon",
    "makine modernizasyonu",
    "makine modernizasyon",
    "endüstriyel makine revizyonu",
    "endüstriyel makine modernizasyonu",
    "makine retrofit",
    "makine retrofit hizmeti",
    "endüstriyel otomasyon",
    "endüstriyel otomasyon hizmetleri",
    "endüstriyel otomasyon revizyon",
    "PLC değişimi",
    "eski PLC değişimi",
    "obsolete PLC değişimi",
    "PLC yenileme",
    "HMI değişimi",
    "HMI yenileme",
    "sürücü değişimi",
    "servo sürücü değişimi",
    "motor sürücü değişimi",
    "frekans inverter değişimi",
    "sensör değişimi",
    "sensör yenileme",
    "elektrik pano revizyonu",
    "elektrik pano yenileme",
    "makine elektrik revizyonu",
    "makine otomasyon revizyonu",
    "makine kontrol sistemi yenileme",
    "endüstriyel haberleşme",
    "PLC haberleşme",
    "sürücü haberleşme",
    "endüstriyel gateway",
    "makine devreye alma",
    "makine bakım ve revizyon",
    "eski makine yenileme",
    "üretim hattı modernizasyonu",

    // Local
    "Adana makine revizyon",
    "Adana makine revizyonu",
    "Adana makine modernizasyon",
    "Adana makine modernizasyonu",
    "Adana endüstriyel otomasyon",
    "Adana otomasyon firması",
    "Adana PLC programlama",
    "Adana PLC değişimi",
    "Adana sürücü değişimi",
    "Adana elektrik pano revizyonu",
    "Adana sanayi otomasyon",
    "Adana OSB otomasyon",
    "Hacı Sabancı Organize Sanayi Bölgesi otomasyon",
    "Sarıçam otomasyon",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Industrial Machine Retrofit & Makine Revizyonu | AENA Technologies",

    description:
      "Industrial machine retrofit, makine revizyonu ve makine modernizasyonu. PLC, HMI, sürücü, servo, sensör, elektrik pano ve endüstriyel haberleşme sistemlerinin yenilenmesi.",

    url: PAGE_URL,

    siteName: "AENA Technologies",

    type: "website",

    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Machine Retrofit & Makine Revizyonu | AENA Technologies",

    description:
      "Industrial machine retrofit, makine revizyonu ve endüstriyel otomasyon modernizasyonu. PLC, HMI, sürücü, servo, sensör ve elektrik pano revizyonu.",
  },
};

export default function MachineRetrofitPage() {
  const retrofitScope = [
    "Machine inspection and technical evaluation",
    "Makine revizyonu ve teknik değerlendirme",
    "Electrical system modernization",
    "Elektrik sistemi modernizasyonu",
    "Electrical cabinet revision",
    "Elektrik pano revizyonu",
    "PLC and HMI modernization",
    "PLC ve HMI değişimi / yenileme",
    "Drive and servo system replacement",
    "Sürücü ve servo sistemlerinin değiştirilmesi",
    "Sensor replacement and integration",
    "Sensör değişimi ve entegrasyonu",
    "Industrial communication modernization",
    "Endüstriyel haberleşme sistemlerinin yenilenmesi",
    "Communication protocol mapping",
    "Haberleşme protokolü eşleştirme",
    "Gateway-based device integration",
    "Endüstriyel gateway entegrasyonu",
    "Hydraulic system improvements",
    "Hidrolik sistem iyileştirmeleri",
    "Pneumatic system improvements",
    "Pnömatik sistem iyileştirmeleri",
    "Mechanical system integration",
    "Mekanik sistem entegrasyonu",
    "Software development and modification",
    "PLC / HMI yazılım geliştirme ve değişiklikleri",
    "Component replacement and equivalent selection",
    "Eşdeğer komponent seçimi ve değişimi",
    "Machine commissioning and production support",
    "Makine devreye alma ve üretim desteği",
  ];

  const communicationServices = [
    {
      title: "Protocol Mapping",
      text:
        "Adapt control words, status words, parameters and process data between different device structures.",
    },
    {
      title: "Gateway Integration",
      text:
        "Use an industrial gateway as an intermediate communication layer between legacy and modern equipment.",
    },
    {
      title: "Existing PLC Compatibility",
      text:
        "Design the integration around the existing control architecture when modification of the original PLC software is limited.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Inspection",
      text:
        "Evaluate the existing machine, electrical system, automation architecture and obsolete components.",
    },
    {
      number: "02",
      title: "Engineering",
      text:
        "Define replacement components, electrical modifications, communication strategy and automation requirements.",
    },
    {
      number: "03",
      title: "Integration",
      text:
        "Install and configure new PLC, HMI, drives, sensors, communication devices and electrical equipment.",
    },
    {
      number: "04",
      title: "Commissioning",
      text:
        "Test the machine, optimize parameters and support production startup.",
    },
  ];

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}

      <section className="border-b border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <p className="font-semibold uppercase tracking-[4px] text-orange-400">
            Industrial Machine Retrofit
          </p>

          <h1 className="mt-4 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl">
            Industrial Machine Retrofit &
            <span className="block text-orange-500">
              Modernization Services
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-slate-200">
            Makine Revizyonu, Makine Modernizasyonu ve Endüstriyel Otomasyon
          </h2>

          <p className="mt-8 max-w-4xl text-xl leading-8 text-slate-400">
            AENA Technologies provides industrial machine retrofit and
            modernization services for existing production machinery.
            Our engineering scope includes electrical systems, PLC,
            HMI, drives, servo systems, sensors, industrial communication,
            software and machine commissioning.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            AENA Technologies; makine revizyonu, makine modernizasyonu,
            endüstriyel otomasyon, PLC ve HMI yenileme, sürücü ve servo
            değişimi, sensör entegrasyonu, elektrik pano revizyonu ve
            endüstriyel haberleşme sistemleri konusunda hizmet vermektedir.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-500">
            We modernize existing industrial machinery by replacing obsolete
            or unreliable components while preserving usable mechanical and
            electrical infrastructure whenever practical.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/projects"
              className="rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
            >
              View Retrofit Projects
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-bold text-slate-200 transition hover:border-orange-500 hover:text-orange-400"
            >
              Request a Retrofit Evaluation
            </Link>

          </div>

        </div>
      </section>


      {/* MODERNIZATION */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Retrofit Engineering
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Modernize Your Existing Machine
          </h2>

          <p className="mt-4 text-xl font-semibold text-slate-300">
            Mevcut Makinenizi Yenileyin ve Çalışma Ömrünü Uzatın
          </p>

          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-slate-400">

            <p>
              Existing industrial machinery can often be modernized without
              replacing the complete machine. AENA Technologies evaluates the
              existing equipment and develops a retrofit strategy according
              to production requirements, machine architecture and available
              components.
            </p>

            <p>
              Mevcut endüstriyel makinelerde komple makine değişimi yerine
              makine revizyonu ve modernizasyon uygulanabilir. Mevcut
              elektrik, mekanik ve otomasyon altyapısı incelenerek uygun
              yenileme stratejisi belirlenir.
            </p>

            <p>
              The retrofit process can include electrical engineering,
              industrial automation, PLC programming, HMI modernization,
              drive and servo systems, sensors, industrial communication,
              hydraulics, pneumatics, mechanical integration and software.
            </p>

            <p>
              Makine revizyonu kapsamında PLC, HMI, sürücüler, servo sistemleri,
              sensörler, elektrik panosu, endüstriyel haberleşme, hidrolik,
              pnömatik, mekanik ve yazılım sistemlerinde gerekli değişiklikler
              yapılabilir.
            </p>

            <p>
              Obsolete components can be replaced with current or equivalent
              technology while maintaining compatibility with the existing
              machine architecture where possible.
            </p>

            <p>
              Özellikle artık üretilmeyen veya temin edilmesi zor olan PLC,
              sürücü, servo, sensör ve diğer otomasyon komponentleri için
              uygun eşdeğer ürünler değerlendirilerek mevcut makineye
              entegre edilebilir.
            </p>

            <p>
              The objective is not simply to replace old components. The
              replacement equipment must work correctly with the machine&apos;s
              existing electrical connections, control signals, communication
              architecture and mechanical installation.
            </p>

          </div>

        </div>
      </section>


      {/* RETROFIT SCOPE */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Retrofit Scope
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            From Machine Inspection to Commissioning
          </h2>

          <p className="mt-4 text-xl font-semibold text-slate-300">
            Makine İncelemesinden Devreye Almaya Kadar Revizyon Hizmeti
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
            Our machine retrofit projects can cover the complete control
            architecture or selected parts of an existing industrial machine.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {retrofitScope.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >
                <span className="text-orange-400">
                  ✓
                </span>

                <p className="mt-3 font-semibold">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* COMPONENT COMPATIBILITY */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Component Compatibility
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Obsolete or Unavailable Components
              </h2>

              <p className="mt-4 text-xl font-semibold text-slate-300">
                Eski ve Temin Edilemeyen Komponentlerin Değişimi
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-400">
                Industrial machines often remain mechanically usable even
                when their original automation components are obsolete.
              </p>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                When the original drive, sensor, PLC module or other
                automation component is no longer available, AENA Technologies
                can evaluate suitable replacement or equivalent solutions.
              </p>

              <p>
                Orijinal sürücü, PLC modülü, sensör veya otomasyon komponenti
                artık bulunamıyorsa elektriksel özellikler, haberleşme yapısı,
                sinyal tipi ve mekanik özellikler dikkate alınarak uygun
                eşdeğer ürünler belirlenebilir.
              </p>

              <p>
                Compatibility is evaluated according to electrical
                characteristics, communication protocols, control architecture,
                mechanical dimensions, signal types and machine requirements.
              </p>

              <p>
                A replacement component that looks technically similar is not
                necessarily a suitable replacement. Voltage, current, output
                type, connector structure, communication protocol, addressing
                and mechanical mounting can all affect compatibility.
              </p>

              <p>
                Where required, the replacement system can be configured and
                commissioned to operate within the existing machine control
                architecture.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* SENSOR REPLACEMENT */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[3px] text-orange-400">
                Sensor Retrofit
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Equivalent Sensor Selection & Integration
              </h2>

              <p className="mt-4 text-xl font-semibold text-slate-300">
                Sensör Değişimi ve Endüstriyel Sensör Entegrasyonu
              </p>

            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-400">

              <p>
                Industrial sensors can become difficult to source when a
                machine has been operating for many years. A suitable
                replacement must match the machine requirements rather than
                only the physical appearance of the original sensor.
              </p>

              <p>
                Replacement sensors can be evaluated according to supply
                voltage, PNP or NPN output, analog or digital signal,
                switching characteristics, connector type, sensing distance,
                mounting dimensions and environmental conditions.
              </p>

              <p>
                For communication-based sensors, additional compatibility
                requirements can include the communication protocol, device
                addressing, data structure and PLC communication architecture.
              </p>

              <p>
                Bu nedenle sensör değişimi yalnızca fiziksel olarak aynı
                sensörü bulmak anlamına gelmez. PNP/NPN çıkış, analog veya
                dijital sinyal, besleme gerilimi, bağlantı tipi, algılama
                mesafesi ve PLC haberleşme yapısı birlikte değerlendirilir.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* DRIVE AND COMMUNICATION RETROFIT */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Drive & Communication Retrofit
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold">
            Integrating New Drives into Existing Communication Systems
          </h2>

          <p className="mt-4 text-xl font-semibold text-slate-300">
            Yeni Sürücüleri Mevcut PLC ve Haberleşme Sistemlerine Entegre Etme
          </p>

          <div className="mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-400">

            <p>
              Replacing an obsolete drive can become more complex when the
              existing PLC program and machine communication architecture
              cannot easily be modified.
            </p>

            <p>
              Eski bir sürücünün yeni bir sürücü ile değiştirilmesi sırasında
              PLC programının değiştirilememesi veya mevcut haberleşme
              mimarisinin korunmasının gerekmesi önemli bir mühendislik
              problemi oluşturabilir.
            </p>

            <p>
              In these situations, the replacement drive may use a different
              communication protocol, register structure, parameter mapping
              or data format than the original device.
            </p>

            <p>
              AENA Technologies can evaluate the existing communication
              architecture and develop a suitable mapping strategy so that
              the new drive can exchange the required control commands,
              status information and process values with the existing system.
            </p>

            <p>
              Where direct communication is not practical, an industrial
              gateway can be used as an intermediate communication layer
              between the existing PLC network and the new drive or device.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {communicationServices.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >

                <h3 className="text-xl font-bold text-orange-400">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ENGINEERING APPROACH */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Engineering Approach
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            One Retrofit Process, Multiple Engineering Disciplines
          </h2>

          <p className="mt-4 text-xl font-semibold text-slate-300">
            Tek Bir Revizyon Projesinde Birden Fazla Mühendislik Alanı
          </p>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A machine retrofit is not limited to replacing electrical
            components. Depending on the machine, the project can involve
            electrical engineering, industrial automation, PLC programming,
            drives, sensors, communication systems, hydraulics, pneumatics,
            mechanical integration, software development and commissioning.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Makine revizyonu yalnızca elektrik komponentlerinin değiştirilmesi
            değildir. Projeye göre elektrik mühendisliği, otomasyon, PLC
            programlama, HMI, sürücü, servo, sensör, haberleşme, hidrolik,
            pnömatik, mekanik entegrasyon, yazılım ve devreye alma çalışmaları
            birlikte yürütülebilir.
          </p>

        </div>
      </section>


      {/* PROCESS */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Retrofit Process
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              A Structured Machine Modernization Process
            </h2>

            <p className="mt-4 text-xl font-semibold text-slate-300">
              Planlı Makine Revizyon ve Modernizasyon Süreci
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
              >

                <span className="text-3xl font-extrabold text-orange-500">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* WHY RETROFIT */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="font-semibold uppercase tracking-[3px] text-orange-400">
            Why Retrofit?
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Extend the Operating Life of Existing Machinery
          </h2>

          <p className="mt-4 text-xl font-semibold text-slate-300">
            Mevcut Makinelerin Çalışma Ömrünü Uzatın
          </p>

          <div className="mt-10 grid gap-6 text-left md:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

              <h3 className="text-xl font-bold">
                Reduce Replacement Costs
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Modernizing the control system can be an alternative to
                replacing an otherwise mechanically usable machine.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

              <h3 className="text-xl font-bold">
                Improve Maintainability
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Replacing obsolete components can make future maintenance,
                troubleshooting and spare-parts sourcing easier.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7">

              <h3 className="text-xl font-bold">
                Modernize Machine Control
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                New automation, HMI, drive and communication technologies can
                improve machine functionality and monitoring.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* COMMISSIONING */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Electrical & Automation
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Electrical cabinet revision, PLC, HMI, drives, sensors and
                machine control integration.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Communication Testing
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Verification of communication between PLCs, drives, HMIs,
                gateways and other industrial devices.
              </p>

            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

              <h3 className="text-2xl font-bold">
                Production Commissioning
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                Machine testing, parameter optimization, troubleshooting and
                production startup support.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* LOCAL SEO / SERVICE AREA */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Service Area
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Industrial Machine Retrofit in Adana and Turkey
            </h2>

            <p className="mt-4 text-xl font-semibold text-slate-300">
              Adana Başta Olmak Üzere Türkiye&apos;nin Sanayi Bölgelerinde
            </p>

          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-6 text-lg leading-8 text-slate-400">

            <p>
              AENA Technologies provides industrial machine retrofit,
              modernization and automation engineering services in Adana
              and across Turkey.
            </p>

            <p>
              Adana Hacı Sabancı Organize Sanayi Bölgesi ve çevresindeki
              endüstriyel işletmeler başta olmak üzere; Mersin, Gaziantep,
              Konya, Kayseri, Bursa, Kocaeli, İstanbul, Ankara, İzmir ve
              Türkiye&apos;nin diğer sanayi bölgelerinde makine revizyonu,
              otomasyon modernizasyonu ve elektrik mühendisliği hizmetleri
              sunulabilir.
            </p>

            <p>
              Our service scope can also support industrial customers in
              international markets including the Middle East, Central Asia
              and selected European markets.
            </p>

          </div>

        </div>
      </section>


      {/* RELATED PROJECTS */}

      <section className="border-y border-slate-800 bg-slate-900/40 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-[3px] text-orange-400">
              Engineering Case Studies
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Machine Retrofit Projects
            </h2>

            <p className="mt-4 text-xl font-semibold text-slate-300">
              Makine Revizyon ve Modernizasyon Projeleri
            </p>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Explore selected machine retrofit, automation modernization
              and industrial engineering projects completed by AENA
              Technologies.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <Link
              href="/projects/stretch-transfer-machine"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
            >

              <p className="text-xs font-semibold uppercase tracking-[2px] text-orange-400">
                Machine Retrofit
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Stretch Transfer Machine Retrofit
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Electrical redesign, PLC redevelopment and machine
                modernization.
              </p>

            </Link>


            <Link
              href="/projects/hemigstone-bag-cutting-machine"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
            >

              <p className="text-xs font-semibold uppercase tracking-[2px] text-orange-400">
                Machine Modernization
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Plastic Bag Cutting Machine Retrofit
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Electrical, drive, servo and sensor modernization of an
                existing production machine.
              </p>

            </Link>


            <Link
              href="/projects/cable-pay-off-drive"
              className="rounded-2xl border border-slate-800 bg-slate-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500"
            >

              <p className="text-xs font-semibold uppercase tracking-[2px] text-orange-400">
                Drive Optimization
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Cable Pay-Off Drive Optimization
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Siemens drive parameter optimization and motion-control
                improvements.
              </p>

            </Link>

          </div>

          <div className="mt-10 text-center">

            <Link
              href="/projects"
              className="inline-flex rounded-xl border border-slate-700 bg-slate-950 px-7 py-3.5 text-sm font-bold text-slate-200 transition hover:border-orange-500 hover:text-orange-400"
            >
              View All Engineering Projects
            </Link>

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="bg-orange-500 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-orange-100">
            Industrial Machine Retrofit
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Need to Retrofit an Existing Machine?
          </h2>

          <p className="mt-6 text-xl text-orange-100">
            Mevcut makinenizi yenilemek veya modernize etmek mi istiyorsunuz?
          </p>

          <p className="mt-3 text-lg text-orange-100">
            Send us the machine model, current control system or your
            modernization requirement.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-orange-500 transition hover:bg-slate-100"
          >
            Request a Retrofit Evaluation
          </Link>

        </div>

      </section>

    </main>
  );
}