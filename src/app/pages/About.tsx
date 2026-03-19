import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Target, Users, Lightbulb, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import historyImage from "figma:asset/a3e388d74ed0e386d01a7af128f0d18f2a976ff9.png";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Qualität",
      description:
        "Höchste Qualitätsstandards bei allen unseren Projekten und Installationen.",
    },
    {
      icon: Users,
      title: "Kundenzufriedenheit",
      description:
        "Ihre Zufriedenheit steht im Mittelpunkt unseres Handelns.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Wir setzen auf modernste Technologien und innovative Lösungen.",
    },
    {
      icon: Heart,
      title: "Zuverlässigkeit",
      description:
        "Pünktlich, professionell und immer für Sie da – das ist unser Versprechen.",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-500">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Über <span className="text-gray-900">Uns</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Seit über 10 Jahren Ihr verlässlicher Partner für professionelle
              Elektrotechnik-Lösungen.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Breit Elektrotechnik wurde mit der Vision gegründet,
                  erstklassige elektrische Dienstleistungen anzubieten, die
                  Sicherheit, Effizienz und Innovation vereinen. Was als kleines
                  Unternehmen begann, hat sich zu einem führenden Anbieter in der
                  Region entwickelt.
                </p>
                <p>
                  Unter der Leitung von Thomas Breit hat sich das Unternehmen
                  einen ausgezeichneten Ruf für Qualität und Zuverlässigkeit
                  erarbeitet. Unsere Expertise reicht von einfachen
                  Wohnungsinstallationen bis hin zu komplexen gewerblichen
                  Projekten.
                </p>
                <p>
                  Heute sind wir stolz darauf, ein Team von hochqualifizierten
                  Fachleuten zu beschäftigen, die mit modernster Technik und
                  umfassendem Know-how arbeiten.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={historyImage}
                  alt="Professionelle Elektrotechnik"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <div className="aspect-[3/4] lg:aspect-auto lg:h-full">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwbWFufGVufDF8fHx8MTc3MzkyMDcwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Thomas Breit - Geschäftsführer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                    Geschäftsführer
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Thomas Breit
                </h2>
                <p className="text-xl text-orange-600 mb-6">
                  Meister der Elektrotechnik
                </p>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Mit über 10 Jahren Erfahrung in der Elektrotechnik leitet
                    Thomas Breit unser Unternehmen mit Leidenschaft und Expertise.
                    Seine Vision ist es, jedem Kunden die bestmögliche Lösung für
                    seine elektrischen Bedürfnisse zu bieten.
                  </p>
                  <p>
                    Als zertifizierter Elektrotechnik-Meister bringt er nicht nur
                    technisches Know-how, sondern auch ein tiefes Verständnis für
                    Kundenanforderungen mit. Unter seiner Führung hat sich Breit
                    Elektrotechnik zu einem der führenden Unternehmen in der
                    Region entwickelt.
                  </p>
                  <p>
                    Thomas Breit ist bekannt für seine Hingabe zur Qualität,
                    seinen kundenorientierten Ansatz und sein Engagement für
                    kontinuierliche Weiterbildung und Innovation.
                  </p>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Qualifikationen & Zertifizierungen
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3"></span>
                      <span>Meister der Elektrotechnik</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3"></span>
                      <span>Zertifizierter Sachverständiger</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3"></span>
                      <span>Spezialist für Smart Home Systeme</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3"></span>
                      <span>Fortbildung in erneuerbaren Energien</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Unsere Werte
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Diese Prinzipien leiten uns bei allem, was wir tun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}