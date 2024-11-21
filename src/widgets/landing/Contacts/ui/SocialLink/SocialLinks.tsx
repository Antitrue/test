import { SocialLinkProps } from './SocialLinkTypes';

export default function SocialLink({ href, title, logo, alt }: SocialLinkProps) {
  return (
    <li>
      <a href={href} title={title} target='_blank' rel='noopener'>
        <img src={logo} alt={alt} />
      </a>
    </li>
  );
}
