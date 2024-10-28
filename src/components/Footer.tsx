import { Typography, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <StyledFooter>
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
            href="https://www.instagram.com/nurs_996__/"
            target="_blank"
            rel="noopener noreferrer">
            <StyledInstagramIcon fontSize="large" />
          </SocialLink>
          <Typography variant="caption">Instagram</Typography>
        </IconWithLabel>
        <IconWithLabel>
          <SocialLink
            href="https://wa.me/996706547119"
            target="_blank"
            rel="noopener noreferrer">
            <StyledWhatsAppIcon fontSize="large" />
          </SocialLink>
          <Typography variant="caption">WhatsApp</Typography>
        </IconWithLabel>
        <IconWithLabel>
          <SocialLink
            href="https://t.me/Nurs_06A"
            target="_blank"
            rel="noopener noreferrer">
            <StyledTelegramIcon fontSize="large" />
          </SocialLink>
          <Typography variant="caption">Telegram</Typography>
        </IconWithLabel>
      </IconContainer>
      <StyledTypography variant="body2">
        © 2024 My Portfolio. All Rights Reserved.
      </StyledTypography>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled("footer")(({}) => ({
  backgroundColor: "#282c34",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px 0",
  textAlign: "center",
  width: "100%",
  boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.2)",
  position: "relative",
  zIndex: 1,
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  paddingTop: "10px",
  fontSize: "1rem",
  fontWeight: "400",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
}));

const IconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginTop: "10px",
  flexWrap: "wrap", 
  [theme.breakpoints.down("sm")]: {
    gap: "15px", 
  },
  [theme.breakpoints.up("md")]: {
    gap: "25px", 
  },
}));

const IconWithLabel = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "white",
  [theme.breakpoints.down("sm")]: {
    gap: "4px", 
  },
  [theme.breakpoints.up("md")]: {
    gap: "6px", 
  },
}));

const SocialLink = styled("a")(({}) => ({
  textDecoration: "none",
  transition: "transform 0.3s ease, color 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    color: "#61dafb",
  },
}));

const StyledGitHubIcon = styled(GitHubIcon)(({}) => ({
  color: "#181717",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const StyledLinkedInIcon = styled(LinkedInIcon)(({}) => ({
  color: "#0077b5",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const StyledInstagramIcon = styled(InstagramIcon)(({}) => ({
  color: "#E1306C",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const StyledWhatsAppIcon = styled(WhatsAppIcon)(({}) => ({
  color: "#25D366",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const StyledTelegramIcon = styled(TelegramIcon)(({}) => ({
  color: "#0088CC",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));
