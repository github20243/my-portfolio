import { Typography, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import vidio from "../assets/vid/98970-650472561_medium.mp4";

const Footer = () => {
  return (
    <StyledFooter>
      <VideoContainer>
        <video
          src={vidio}
          autoPlay
          loop
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </VideoContainer>
      <Overlay />
      <StyledTypography variant="body1">
        Designed and Developed by Abdmalicov Nurislam
      </StyledTypography>
      <IconContainer>
        <IconWithLabel>
          <SocialLink
            href="https://github.com/github20243"
            target="_blank"
            rel="noopener noreferrer">
            <StyledGitHubIcon fontSize="large" />
          </SocialLink>
          <Typography variant="caption">GitHub</Typography>
        </IconWithLabel>
        <IconWithLabel>
          <SocialLink
            href="https://www.linkedin.com/in/kgz-abdimalicov-940705331/"
            target="_blank"
            rel="noopener noreferrer">
            <StyledLinkedInIcon fontSize="large" />
          </SocialLink>
          <Typography variant="caption">LinkedIn</Typography>
        </IconWithLabel>
        <IconWithLabel>
          <SocialLink
            href="https://www.instagram.com/nurs_996__/?hl=ru"
            target="_blank"
            rel="noopener noreferrer">
            <StyledInstagramIcon fontSize="large" />
          </SocialLink>
          <Typography variant="caption">Instagram</Typography>
        </IconWithLabel>
        <IconWithLabel>
          <SocialLink
            href="https://wa.me/+996706547119/"
            target="_blank"
            rel="noopener noreferrer">
            <StyledWhatsAppIcon fontSize="large" />
          </SocialLink>
          <Typography variant="caption">WhatsApp</Typography>
        </IconWithLabel>
        <IconWithLabel>
          <SocialLink
            href="https://t.me/Nurs_06A/"
            target="_blank"
            rel="noopener noreferrer">
            <StyledTelegramIcon fontSize="large" />
          </SocialLink>
          <Typography variant="caption">Telegram</Typography>
        </IconWithLabel>
      </IconContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled('footer')({
  position: 'relative',
  padding: '20px',
  textAlign: 'center',
  color: '#fff',
  overflow: 'hidden',
});

const VideoContainer = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1,
});

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1,
});

const StyledTypography = styled(Typography)({
  position: 'relative',
  zIndex: 2,
  fontSize: '1rem',
  margin: '10px 0',
});

const IconContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  position: 'relative',
  zIndex: 2,
});

const IconWithLabel = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const SocialLink = styled('a')({
  color: '#fff',
  textDecoration: 'none',
});

const StyledGitHubIcon = styled(GitHubIcon)({
  color: '#white',
});

const StyledLinkedInIcon = styled(LinkedInIcon)({
  color: '#0077B5',
});

const StyledInstagramIcon = styled(InstagramIcon)({
  color: '#C13584',
});

const StyledWhatsAppIcon = styled(WhatsAppIcon)({
  color: '#25D366',
});

const StyledTelegramIcon = styled(TelegramIcon)({
  color: '#0088CC',
});