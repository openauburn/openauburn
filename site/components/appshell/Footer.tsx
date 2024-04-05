import {
  Text,
  Container,
  ActionIcon,
  Group,
  UnstyledButton,
  px,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandDiscord,
} from "@tabler/icons-react";
import OpenAuburnLogo from "../branding/OpenAuburnLogo";
import classes from "./Footer.module.css";

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

const Footer = ({ data }: FooterLinksProps) => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text key={index} className={classes.link} component="a" href={link.link}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <UnstyledButton component="a" href="/">
            <OpenAuburnLogo includeTitle />
          </UnstyledButton>
          <Text size="xs" color="dimmed" className={classes.description}>
            Create, research, and learn using Auburn University's largest public
            datasets.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2023 Open Auburn. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="right" wrap="nowrap">
          <ActionIcon
            size="lg"
            component="a"
            href="https://github.com/openauburn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://www.linkedin.com/company/openauburn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://discord.gg/pjabvqrReR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandDiscord size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://twitter.com/OpenAuburn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            component="a"
            href="https://www.instagram.com/openauburn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
};

export default Footer;
