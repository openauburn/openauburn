import {
  AppShell,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  ActionIcon,
  useMantineTheme,
  useMantineColorScheme,
  getThemeColor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import LightDarkButton from "../LightDarkButton";
import OpenAuburnLogo from "../../branding/OpenAuburnLogo";
import { base } from "@/utils/api";
import { Metadata } from "@/utils/types";
import { useEffect, useState } from "react";
import FetchIcon from "@/components/FetchIcon";
import { IconBrandInstagram } from "@tabler/icons";
import { IconBrandTwitter } from "@tabler/icons";
import { IconBrandDiscord } from "@tabler/icons";
import { IconBrandLinkedin } from "@tabler/icons";
import { IconBrandGithub } from "@tabler/icons";
import classes from "./NavHeader.module.css";

const NavHeader = () => {
  const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const [metadata, setMetadata] = useState<Array<Metadata>>([]);
  const [links, setLinks] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    fetch(base + "/metadata")
      .then((res) => res.json())
      .then((data) => setMetadata(data.splice(0, 4)));
  }, []);

  useEffect(() => {
    setLinks(getLinks(metadata));
  }, [metadata, theme]);

  function getLinks(metadata: Array<Metadata>) {
    return metadata.map((item) => (
      <UnstyledButton
        className={classes.subLink}
        key={Date.now() + Math.random()}
        component={"a"}
        href={`/datasets/${item._id}`}
      >
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <FetchIcon
              name={item.portal_icon}
              size={22}
              color={getThemeColor(theme.primaryColor, theme)}
            ></FetchIcon>
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.summary}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  }

  return (
    <Box>
      <AppShell.Header style={{ height: 60 }} px="md">
        <Group justify="space-between" style={{ height: "100%" }}>
          <UnstyledButton component="a" href="/">
            <OpenAuburnLogo />
          </UnstyledButton>

          <Group
            style={{ height: "100%" }}
            gap={0}
            className={classes.hiddenMobile}
          >
            <Link href="/" className={classes.link}>
              Home
            </Link>

            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <Link href="/datasets" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Datasets
                    </Box>
                    <IconChevronDown
                      size={16}
                      color={getThemeColor(theme.primaryColor, theme)}
                    />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Datasets</Text>
                  <Anchor href="/datasets" size="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={colorScheme === "dark" ? "dark.5" : "gray.1"}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} size="sm">
                        Start exploring
                      </Text>
                      <Text size="xs" color="dimmed">
                        Explore datasets and gain insights with the open data
                        portal.
                      </Text>
                    </div>
                    <Button variant="default" component="a" href="/datasets">
                      Explore data
                    </Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Link href="/showcase" className={classes.link}>
              Showcase
            </Link>
            <Link href="/docs" className={classes.link}>
              Documentation
            </Link>
            <Link href="/about" className={classes.link}>
              About
            </Link>
          </Group>

          <Group className={classes.hiddenMobile}>
            {/* <Group>
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group> */}
            <LightDarkButton />
          </Group>

          <Group className={classes.hiddenDesktop}>
            <div>
              <LightDarkButton />
            </div>
            <Burger opened={drawerOpened} onClick={toggleDrawer} />
          </Group>
        </Group>
      </AppShell.Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea style={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Link href="#" className={classes.link}>
            Home
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Datasets
              </Box>
              <IconChevronDown
                size={16}
                color={getThemeColor(theme.primaryColor, theme)}
              />
            </Center>
          </UnstyledButton>
          <Collapse
            in={linksOpened}
            style={{ maxWidth: "90vw", margin: "auto" }}
          >
            {links}
          </Collapse>
          <Link href="/showcase" className={classes.link}>
            Showcase
          </Link>
          <Link href="/documentation" className={classes.link}>
            Documentation
          </Link>
          <Link href="/about" className={classes.link}>
            About
          </Link>
          <Divider
            my="sm"
            color={colorScheme === "dark" ? "dark.5" : "gray.1"}
          />
          <Group
            gap={0}
            style={{ margin: "auto", width: "100%" }}
            wrap="nowrap"
            justify="center"
          >
            <ActionIcon
              variant="transparent"
              size="lg"
              component="a"
              href="https://github.com/openauburn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithub size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              size="lg"
              component="a"
              href="https://www.linkedin.com/company/openauburn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              size="lg"
              component="a"
              href="https://discord.gg/pjabvqrReR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandDiscord size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              size="lg"
              component="a"
              href="https://twitter.com/OpenAuburn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              size="lg"
              component="a"
              href="https://www.instagram.com/openauburn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
          </Group>

          {/* <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group> */}
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default NavHeader;
