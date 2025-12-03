
import "./globals.scss";

export default async function RootLayout({ children }) {
  const slug = process.env.SITE_SLUG;

  const res = await fetch(
    `https://blinkflo-backend.onrender.com/api/websites/${slug}`,
    { cache: "no-store" }
  );

  const site = await res.json();


  return (
    <html lang="en">
      <head>
        <title>${site.websiteName}</title>
        <link rel="icon" href="${site.favicon}" />
        <style>{`
          :root {
            --color-lime: ${site?.colors?.[0]?.code};
            --color-blue-500: ${site?.colors?.[1]?.code};
            --color-white: ${site?.colors?.[2]?.code };
            --color-blue-400: ${site?.colors?.[2]?.code};
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
