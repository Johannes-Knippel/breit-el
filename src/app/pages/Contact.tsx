import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      details: ["+49 (0) 123 456789", "Mo-Fr: 8:00 - 18:00 Uhr"],
      link: "tel:+491234567890",
    },
    {
      icon: Mail,
      title: "E-Mail",
      details: ["info@breit-elektrotechnik.de", "Antwort innerhalb von 24h"],
      link: "mailto:info@breit-elektrotechnik.de",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["Musterstraße 123", "12345 Musterstadt"],
      link: null,
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
              <span className="text-gray-900">Kontakt</span> aufnehmen
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Haben Sie Fragen oder benötigen Sie ein Angebot? Wir sind für Sie
              da und freuen uns auf Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-orange-500 hover:text-orange-600 font-medium block mb-1"
                  >
                    {info.details[0]}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium mb-1">
                    {info.details[0]}
                  </p>
                )}
                <p className="text-gray-600 text-sm">{info.details[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Senden Sie uns eine Nachricht
              </h2>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Vielen Dank für Ihre Nachricht! Wir melden uns in Kürze bei
                    Ihnen.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="Ihr Name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="ihre@email.de"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                      placeholder="+49 123 456789"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Betreff *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="installation">Elektroinstallation</option>
                    <option value="repair">Reparatur</option>
                    <option value="smart-home">Smart Home</option>
                    <option value="solar">Photovoltaik</option>
                    <option value="maintenance">Wartung</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Warum uns kontaktieren?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Kostenlose Erstberatung",
                    "Unverbindliche Angebote",
                    "Schnelle Reaktionszeiten",
                    "Professionelle Beratung",
                    "Transparente Preise",
                    "Zertifizierte Fachkräfte",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              So finden Sie uns
            </h2>
            <p className="text-white">
              Besuchen Sie uns in unserem Büro oder kontaktieren Sie uns
              telefonisch.
            </p>
          </div>

          {/* Mock Map */}
          <div className="aspect-[21/9] bg-gray-200 rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">
                  Musterstraße 123, 12345 Musterstadt
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  (Interaktive Karte würde hier angezeigt)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}