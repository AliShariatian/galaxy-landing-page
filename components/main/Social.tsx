import Image from "next/image";

interface SocialProps {
   link: string;
   name: string;
   src: string;
}

function Social({ socials }: any) {
   return (
      <>
         {socials.map((social: SocialProps) => (
            <a href={social.link} key={social.name} target="_blank" className="hover-scale">
               <Image src={social.src} width={30} height={30} alt={`Ali Shariatian ${social.name}`} title={`My ${social.name}`} className="invert cursor-pointer" />
            </a>
         ))}
      </>
   );
}

export default Social;
