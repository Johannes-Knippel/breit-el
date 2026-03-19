import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import {
  Zap,
  Shield,
  Clock,
  Award,
  ArrowRight,
  Lightbulb,
  Wrench,
  Building2,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroImage from "figma:asset/3ea3ca628592e8c3930458774c9b13f682b097c8.png";

export function Home() {
  const services = [
    {
      icon: Lightbulb,
      title: "Elektroinstallationen",
      description:
        "Professionelle Installation elektrischer Anlagen für Wohn- und Gewerbeimmobilien.",
    },
    {
      icon: Wrench,
      title: "Wartung & Reparatur",
      description:
        "Zuverlässige Wartung und schnelle Reparatur Ihrer elektrischen Systeme.",
    },
    {
      icon: Building2,
      title: "Gewerbliche Projekte",
      description:
        "Umfassende Elektrolösungen für Büros, Geschäfte und Industriegebäude.",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Zertifiziert & Sicher",
      description: "Alle Arbeiten nach aktuellen Sicherheitsstandards",
    },
    {
      icon: Award,
      title: "Über 10 Jahre Erfahrung",
      description: "Bewährte Expertise in der Elektrotechnik",
    },
    {
      icon: Zap,
      title: "Moderne Technologie",
      description: "Einsatz neuester Technik und Verfahren",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-500">
      <Header />

      {/* Hero Section */}
      <section className="pt-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Ihre Experten für{" "}
                <span className="text-gray-900">Elektrotechnik</span>
              </h1>
              <p className="text-lg text-white mb-8">
                Mit über 10 Jahren Erfahrung bieten wir professionelle
                Elektroinstallationen, Wartung und Beratung für Privat- und
                Geschäftskunden in ganz Deutschland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-500 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  Unsere Leistungen
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={heroImage}
                  alt="Moderne Elektrotechnik"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-500 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Von der Planung bis zur Umsetzung – wir bieten umfassende
              Elektrotechnik-Lösungen für jeden Bedarf.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to="/leistungen"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute für eine kostenlose Beratung und ein
            unverbindliches Angebot.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-500 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}