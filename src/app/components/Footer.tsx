import { Mail, Phone, MapPin, Zap } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Breit Elektrotechnik</span>
            </div>
            <p className="text-gray-400 text-sm">
              Ihr zuverlässiger Partner für alle elektrischen Installationen und
              Dienstleistungen. Qualität, Sicherheit und Kundenzufriedenheit
              stehen bei uns an erster Stelle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Start
                </Link>
              </li>
              <li>
                <Link
                  to="/ueber-uns"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  to="/leistungen"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <div>+49 (0) 123 456789</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <a
                    href="mailto:info@breit-elektrotechnik.de"
                    className="hover:text-orange-500 transition-colors"
                  >
                    info@breit-elektrotechnik.de
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Breit Elektrotechnik. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
