import AboutNavbar from '@/components/Header/AboutNavbar';
import AboutVideo from '@/components/AboutVideo';
import Jewellery from '@/components/Jewellery';
import CapabilitiesMainCard from '@/components/CapabilitiesMainCard';
import CapabilitiesMainCardSecond from '@/components/CapabilitiesMainCardSecond';
import BaseUrl from '@/components/BaseUrl';
import { getImageAltText, getImageData } from '@/common/api';

type TextilesCompoProps = {
  h1?: string;
};

const imageFiles = [
  'INDIAN MANFACTURING INDUSTRIES.png',
  'Keychallenges3.png',
  '326.jpg',
];

export default async function TextilesCompo({ h1 }: TextilesCompoProps) {
  let imgAltText = [
    'Textile manufacturing facility and operations',
    'Common challenges across selected textile manufacturing projects',
    'Textile manufacturing project and operations support',
  ];

  try {
    const images = await getImageAltText(imageFiles);
    const fetchedAltText = await getImageData(images);
    if (Array.isArray(fetchedAltText)) {
      imgAltText = fetchedAltText as string[];
    }
  } catch (error) {
    // Keep the page available with descriptive fallback alt text if the image API is unavailable.
    console.error('Unable to load Textiles image alt text:', error);
  }

  const imageBaseUrl = BaseUrl().imgurl.replace(/\/+$/, '');
  const industries = [
    'Factory Setup & Expansion',
    'Capacity & Layout Planning',
    'Warehouse & Material Flow',
    'Operations Excellence',
    'Production Planning',
    'MES & Digital Manufacturing',
  ];

  const intro =
    'Madasky’s core market remains Home Textiles and Apparel. We extend our capabilities into broader Textile manufacturing when the project requirement matches our expertise in facility planning, material flow, operations, planning, automation or digital manufacturing. Where specialized process expertise is needed, Madasky can integrate the right expert while retaining overall project coordination.';

  const challenges =
    'Assignments may include greenfield or brownfield setup, capacity and layout, warehouse and material flow, productivity improvement, production planning, MES, utilities coordination and digital transformation.';

  const solutions =
    'Madasky supports selected Textile manufacturing requirements through Turnkey Factory Projects, Operations Excellence, Production Planning & Scheduling, Digital Factory & MES, and selected material or process optimization depending on the manufacturing process. Scope and specialist requirements are confirmed after a technical fit assessment.';

  return (
    <div>
      <AboutNavbar />

      <AboutVideo
        vid1="assets/videos/364.mp4"
        title="Extended Manufacturing Capability Across Textiles"
        des="Apply Madasky’s project, operations and digital manufacturing capability to selected Textile manufacturing requirements."
        pageName="Textiles"
        h1={h1 || 'Extended Manufacturing Capability Across Textiles'}
      />

      <div className="mx-auto max-w-8xl max-md:px-0">
        <Jewellery
          details1={{
            title: 'Manufacturing Context',
            img: `${imageBaseUrl}/${imageFiles[0]}`,
            description: intro,
            altText: imgAltText[0] || 'Textile manufacturing facility and operations',
          }}
          industries={industries}
        />

        <CapabilitiesMainCard
          details1={{
            title: 'Common Manufacturing Challenges',
            des: challenges,
            img: `${imageBaseUrl}/${imageFiles[1]}`,
            altText:
              imgAltText[1] ||
              'Common challenges across selected textile manufacturing projects',
          }}
        />

        <CapabilitiesMainCardSecond
          details1={{
            title: 'How Madasky Helps',
            des: solutions,
            img: `${imageBaseUrl}/${imageFiles[2]}`,
            altText:
              imgAltText[2] || 'Textile manufacturing project and operations support',
          }}
        />
      </div>
    </div>
  );
}
