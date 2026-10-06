// app/layout.tsx or app/layout.jsx
export const revalidate = 0;
import { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Suspense } from "react";
import Loader from "@/components/Loader";
// import BaseUrl from '@/components/BaseUrl';
// import { getImageAltText } from "@/common/api";

const arr = ["madaskyFavicon.png", "logo2.png"];

const images: {
  success: string;
  message: string;
  data: {
    id: string;
    webimage: string;
    alt_text: string;
    created_date: string;
    created_time: string;
    created_at: string;
    created_by: string;
  }[];
} = {
  success: "",
  message: "",
  data: [],
};

const serverError = false;

// try {
//   images = await getImageAltText(arr);
// } catch (error) {
//   serverError = true;
// }

export const metadata: Metadata = {
  // openGraph: {
  title: "Madasky",
  description: "Business success through insights.",
  // siteName: 'Madasky',
  // images: [
  //   {
  //     url: `${BaseUrl().baseurl}/${images.data[1].webimage}`, // your OG image path
  //     width: 1200,
  //     height: 630,
  //   },
  // ],
  icons: {
    icon: "/hai.svg", // or .png
    shortcut: "/hai.svg",
    apple: "/hai.svg",
  },
  // locale: 'en_US',
  // type: 'website',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="a8DD7oYePN0kfjRg8AZA-YJzPih2Zfi9SvUJnQ_L1-o"
        />
      </head>

      <body style={{ fontFamily: `'Times New Roman', Times, serif` }}>
        {/* GTM <noscript> fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PMGG98L8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J36HT9GLD8"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J36HT9GLD8');
          `}
        </Script>

        {/* Google Tag Manager (GTM) */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PMGG98L8');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qtpgwp8f9t");
          `}
        </Script>

        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  );
}
