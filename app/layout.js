import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://aeronational.inc"),
  icons: {
    icon: "/images/aero-logo-icon.png",
    apple: "/images/aero-logo-icon.png"
  },
  title: {
    default: "Aero National | Integrated Construction Services",
    template: "%s | Aero National"
  },
  description:
    "Materials, equipment, containers, logistics, construction and development support through one dependable operating partner.",
  openGraph: {
    title: "Aero National",
    description:
      "Built to keep projects moving. Integrated construction services for contractors, developers and active job sites.",
    url: "https://aeronational.inc",
    siteName: "Aero National",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
