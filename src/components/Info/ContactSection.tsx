import type { ContactItemProps } from '@/types/ContactItem';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const ContactSection = () => (
  <div className="flex flex-col gap-[20px] items-center sm:items-start">
    <h1 className="text-itemTitle text-grayscale-600">Contact</h1>
    <div className="flex flex-col gap-[12px]">
      <ContactItem icon={faEnvelope} text="me@sspzoa.io" href="mailto:me@sspzoa.io" />
      <ContactItem icon={faGithub} text="sspzoa" href="https://github.com/sspzoa" />
      <ContactItem icon={faLinkedin} text="seungpyosuh" href="https://www.linkedin.com/in/seungpyosuh/" />
    </div>
  </div>
);

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href }) => (
  <Link href={href} target="_blank" rel="noreferrer" className="flex flex-row items-center gap-[8px]">
    <FontAwesomeIcon icon={icon} className="w-[14px] h-[14px] text-grayscale-800" />
    <p className="text-itemDescription text-grayscale-800">{text}</p>
  </Link>
);
