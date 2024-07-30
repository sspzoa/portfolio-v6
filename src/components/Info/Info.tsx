import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';
import { ProfileSection } from './ProfileSection';
import { SkillsSection } from './SkillsSection';

export default function Info() {
  return (
    <div className="flex-shrink-0 h-auto w-full sm:w-[350px] sm:h-[100vh] px-[30px] py-[50px] sm:p-[50px] flex flex-col justify-between gap-[40px]">
      <div className="flex flex-col gap-[50px]">
        <ProfileSection />
        <SkillsSection />
        <AboutSection />
      </div>
      <ContactSection />
    </div>
  );
}
