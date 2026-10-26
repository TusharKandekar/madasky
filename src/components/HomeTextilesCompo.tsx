import AboutNavbar from '@/components/Header/AboutNavbar';
import AboutVideo from '@/components/AboutVideo';
import Jewellery from '@/components/Jewellery';
import CapabilitiesMainCard from '@/components/CapabilitiesMainCard';
import CapabilitiesMainCardSecond from '@/components/CapabilitiesMainCardSecond';
import BaseUrl from '@/components/BaseUrl';
import { getImageAltText, getImageData } from '@/common/api';

type HomeTextilesCompoProps = {
  h1?: string;
};

const imageFiles = [
  '/assets/images/home-textile.jpg',
  'Keychallenges3.png',
  '326.jpg',
];

export default async function HomeTextilesCompo({
  h1,
}: HomeTextilesCompoProps) {
  let imgAltText = [
    'Home textile manufacturing operations',
    'Common home textile manufacturing challenges',
    'Home textile manufacturing improvement solutions',
  ];

  try {
    const images = await getImageAltText(imageFiles);
    const fetchedAltText = await getImageData(images);
    if (Array.isArray(fetchedAltText)) {
      imgAltText = fetchedAltText as string[];
    }
  } catch (error) {
    // Keep the page available with descriptive fallback alt text if the image API is unavailable.
    console.error('Unable to load Home Textiles image alt text:', error);
  }

  const imageBaseUrl = BaseUrl().imgurl.replace(/\/+$/, '');
  const industries = [
    'Bedding',
    'Made-ups',
    'Towels & Bath',
    'Soft Furnishings',
    'Quilts & Comforters',
    'Integrated Home Textile Manufacturing',
  ];

  const intro =
    "Home Textiles is Madasky’s deepest manufacturing domain. Product variety, fabric cost, cutting, stitching, quilting, finishing, packing, customer-specific specifications and export delivery create cross-functional complexity that cannot be solved department by department. Madasky works across new factory projects, existing operations and manufacturing intelligence so product, process, people and systems reinforce each other.";

  const challenges =
    'Typical challenges include new facility setup, brownfield expansion, poor capacity utilization, cutting and fabric losses, high overtime, line imbalance, WIP, long lead time, unstable planning, packing and dispatch bottlenecks, manpower gaps and fragmented production visibility.';

  const solutions =
    'Madasky helps Home Textile manufacturers through Turnkey Factory Projects; Operations Excellence; Fabric & Raw Material Optimization; Production Planning & Scheduling; Digital Factory & MES; and Workforce Readiness & Key Talent Support. The right starting point depends on the factory’s constraints, business goals and implementation needs.';

  return (
    <div>
      <AboutNavbar />

      <AboutVideo
        vid1="/assets/videos/364.mp4"
        title="Home Textiles"
        des="Build, improve and digitize Home Textile factories with a team that understands the complete manufacturing system."
        pageName="Home Textiles"
        h1={h1 || 'Manufacturing Transformation for Home Textiles'}
      />

      <div className="mx-auto max-w-8xl max-md:px-0">
        
<CapabilitiesMainCardSecond
          details1={{
            title: 'Manufacturing Context',
            des: intro,
            img: `${imageFiles[0]}`,
            altText: imgAltText[0] || 'Home textile manufacturing improvement solutions',
          }}
        />
        <CapabilitiesMainCard
          details1={{
            title: 'Common Manufacturing Challenges',
            des: challenges,
            img: `${imageBaseUrl}/${imageFiles[1]}`,
            altText: imgAltText[1] || 'Common home textile manufacturing challenges',
          }}
        />

        <CapabilitiesMainCardSecond
          details1={{
            title: 'How Madasky Helps',
            des: solutions,
            img: `${imageBaseUrl}/${imageFiles[2]}`,
            altText: imgAltText[2] || 'Home textile manufacturing improvement solutions',
          }}
        />
      </div>
    </div>
  );
}
