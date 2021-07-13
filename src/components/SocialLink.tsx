import styled from 'styled-components';
import { ReactComponent as LinkSvg } from 'assets/link.svg';

const Link = styled.a`
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin: 0 0 8px;
  color: black;
`;

const LinkIcon = styled(LinkSvg)`
  margin: 0 15px 0 10px;
`;

interface SocialLinkProps {
  name: string,
  value: string,
}

const SocialLink = ({ name, value }: SocialLinkProps): JSX.Element => (
  <>
    <Link href={value}>{name}</Link>
    <LinkIcon width={13} height={13} />
  </>
);

export default SocialLink;
