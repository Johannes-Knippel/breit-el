import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Home,
  Building2,
  Lightbulb,
  Zap,
  Shield,
  Cable,
  Sun,
  Smartphone,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Services() {
  const mainServices = [
    {
      icon: Home,
      title: "Wohnungsinstallationen",
      description:
        "Komplette Elektroinstallationen für Neubauten, Renovierungen und Modernisierungen von Wohnräumen.",
      features: [
        "Neuinstallationen",
        "Renovierungen",
        "Lichtplanung",
        "Steckdosen & Schalter",
      ],
    },
    {
      icon: Building2,
      title: "Gewerbliche Installationen",
      description:
        "Professionelle Elektrolösungen für Büros, Geschäfte, Restaurants und Industriegebäude.",
      features: [
        "Bürogebäude",
        "Einzelhandel",
        "Industrieanlagen",
        "Beleuchtungssysteme",
      ],
    },
    {
      icon: Smartphone,
      title: "Smart Home Systeme",
      description:
        "Moderne intelligente Haussteuerung für mehr Komfort, Sicherheit und Energieeffizienz.",
      features: [
        "Lichtsteuerung",
        "Heizungssteuerung",
        "Sicherheitssysteme",
        "Sprachsteuerung",
      ],
    },
    {
      icon: Sun,
      title: "Photovoltaik & Solar",
      description:
        "Installation und Wartung von Photovoltaikanlagen für nachhaltige Energiegewinnung.",
      features: [
        "Solaranlagen",
        "Batteriespeicher",
        "Energiemanagement",
        "Wartung & Service",
      ],
    },
    {
      icon: Cable,
      title: "Netzwerk & Datentechnik",
      description:
        "Professionelle Verkabelung und Installation von Netzwerk- und Kommunikationssystemen.",
      features: [
        "Strukturierte Verkabelung",
        "WLAN-Lösungen",
        "Serverschränke",
        "Telefonsysteme",
      ],
    },
    {
      icon: Wrench,
      title: "Wartung & Reparatur",
      description:
        "Regelmäßige Wartung und schnelle Reparatur aller elektrischen Systeme und Anlagen.",
      features: [
        "Störungsbehebung",
        "Sicherheitsprüfungen",
        "Instandhaltung",
        "Service & Beratung",
      ],
    },
  ];

  const additionalServices = [
    "E-Check und Elektroprüfungen",
    "Blitz- und Überspannungsschutz",
    "Rauchmelder-Installation",
    "Elektromobilität / Wallbox-Installation",
    "Beleuchtungsplanung und -design",
    "Sicherheitstechnik und Alarmanlagen",
  ];

  return (
    <div className="min-h-screen bg-orange-500">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Unsere <span className="text-gray-900">Leistungen</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Umfassende Elektrotechnik-Lösungen für jeden Bedarf – von der
              Planung bis zur Umsetzung.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwcGFuZWwlMjBpbnN0YWxsYXRpb258ZW58MXx8fHwxNzczODMzMTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professionelle Elektroinstallation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Weitere Dienstleistungen
              </h2>
              <p className="text-gray-600 mb-8">
                Neben unseren Hauptleistungen bieten wir eine Vielzahl
                zusätzlicher Services an, um all Ihre elektrischen Bedürfnisse
                abzudecken.
              </p>
              <ul className="space-y-3">
                {additionalServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Zap className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Unser Arbeitsprozess
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              So läuft ein Projekt mit uns ab – transparent und professionell.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Kontaktaufnahme",
                description: "Sie kontaktieren uns mit Ihrem Anliegen",
              },
              {
                step: "02",
                title: "Beratung & Planung",
                description: "Wir besprechen Ihre Anforderungen und erstellen ein Konzept",
              },
              {
                step: "03",
                title: "Angebot",
                description: "Sie erhalten ein transparentes, unverbindliches Angebot",
              },
              {
                step: "04",
                title: "Umsetzung",
                description: "Wir führen die Arbeiten fachgerecht und termingerecht aus",
              },
            ].map((item, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Haben Sie Fragen zu unseren Leistungen?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Kontaktieren Sie uns für eine kostenlose Beratung. Wir freuen uns
              darauf, Ihr nächstes Projekt zu realisieren.
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-500 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
            >
              Jetzt Kontakt aufnehmen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}