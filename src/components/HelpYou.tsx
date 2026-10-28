
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
// import FooterItemHeader from '@/components/FooterItemHeader';
// import FooterItem from '@/components/FooterItem';
// import CustomButton from '@/components/CustomButton';
// import LogoCombo from '@/components/Header/LogoCombo';
import Link from 'next/link';

export default function HelpYou({ showDiagnosticCTA = false }: { showDiagnosticCTA?: boolean }) {
  return (
    <div className="flex min-h-96 flex-col items-center justify-center gap-6 bg-custom-gradient-2 px-5 py-14 text-white md:px-8">
      <h2 className="text-4xl font-bold text-center font-baskervville max-md:text-3xl">
        What Are You Trying to Build or Fix?
      </h2>
      <p className="text- max-md:text-md max-md:w-[90%] text-center w-[60%]">
        You do not need to decide which Madasky service you need before contacting us. Tell us the manufacturing problem,
        project or opportunity. We will help define the right starting point.
      </p>
      <p className="text- max-md:text-md max-md:w-[90%] text-center w-[60%]">
        For a new facility, share product, planned capacity, location and target start date. For an operating factory, share the
        performance gap you are trying to close - output, OTIF, fabric, manpower, planning, quality, lead time or digital visibility.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {showDiagnosticCTA && (
          <a href="https://calendar.app.google/UMVkRH1hG1f5nNcV7" target="_blank" rel="noopener noreferrer" className="rounded-md bg-[#e1340d] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#c02a0b]">
            Book a Factory Diagnostic
          </a>
        )}
        <Link href="/contact-us" className="rounded-md border border-white px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#051c2c]">
          Contact Us
        </Link>
      </div>
      <div className="flex items-center justify-center w-full ">
        <div className="w-[85%] h-full flex items-center justify-center text-white">

          <span className="flex gap-5 text-3xl">
            <a href="https://api.whatsapp.com/send/?phone=7304424496&text=Hi&type=phone_number&app_absent=0" target='_blank' className='hover:scale-110'>
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/company/68993529/admin/dashboard/" target='_blank' className='hover:scale-110'>
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/channel/UCG95pxF2SdRxLxDk_azEuIA" target='_blank' className='hover:scale-110'>
              <FiYoutube />
            </a>
            <a href="https://www.instagram.com/madasky_consulting/" target='_blank' className='hover:scale-110'>
              <FaInstagram />
            </a>

            <a href="https://www.facebook.com/madaskyconsulting" target='_blank' className='hover:scale-110'>
              <FaFacebookF />
            </a>

          </span>
        </div>
      </div>
    </div>
  )
}
