import {
  createStyles,
  Header,
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
  px,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconChevronDown,
  IconFlame,
  IconPrison,
} from '@tabler/icons-react';
import Link from 'next/link';
import LightDarkButton from './LightDarkButton';
import OpenAuburnLogo from '../branding/OpenAuburnLogo';
import { base } from '@/utils/api';
import { Metadata } from '@/utils/types';
import { useEffect, useState } from 'react';
import FetchIcon from '../FetchIcon';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${px(theme.spacing.xs)}px ${px(theme.spacing.md)}px`,
    borderRadius: px(theme.radius.md),

    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },
  dropdownFooter: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
    margin: -px(theme.spacing.md),
    marginTop: px(theme.spacing.sm),
    padding: `${px(theme.spacing.md)}px ${px(theme.spacing.md) * 2}px`,
    paddingBottom: px(theme.spacing.xl),
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}));


const NavHeader = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const [metadata, setMetadata] = useState<Array<Metadata>>([]);
  const [links, setLinks] = useState<Array<JSX.Element>>([])

  useEffect(() => {
    console.log(base + "/metadata")
    fetch(base + "/metadata")
      .then((res) => res.json())
      .then((data) => setMetadata(data.splice(0,4)) )
  }, [])

  useEffect(() => {
    setLinks(getLinks(metadata))
  }, [metadata, theme])

  function getLinks(metadata: Array<Metadata>){
    return  metadata.map((item) => (
      <UnstyledButton className={classes.subLink} key={Date.now() + Math.random()} component={'a'} href={`/datasets/${item.id}`}>
        <Group noWrap align="flex-start">
            <ThemeIcon size={34} variant="default" radius="md">
              <FetchIcon name={item.icon} size={22} color={theme.fn.primaryColor()}></FetchIcon>
            </ThemeIcon>
          <div>
            <Text size="sm" weight={500}>
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
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: '100%' }}>
            <UnstyledButton component="a" href="/">
              <OpenAuburnLogo/>
            </UnstyledButton>

          <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
            <Link href="/" className={classes.link}>
              Home
            </Link>

            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Link href="/datasets" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Datasets
                    </Box>
                    <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                  </Center>
                </Link>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                <Group position="apart" px="md">
                  <Text weight={500}>Datasets</Text>
                  <Anchor href="/datasets" size="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart">
                    <div>
                      <Text weight={500} size="sm">
                        Start exploring
                      </Text>
                      <Text size="xs" color="dimmed">
                        Explore datasets and gain insights with the open data portal.
                      </Text>
                    </div>
                    <Button variant="default" component='a' href='/datasets'>Explore data</Button>
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
            <LightDarkButton/>
          </Group>

          <Group className={classes.hiddenDesktop}>
            <div>
              <LightDarkButton/>
            </div>
            <Burger opened={drawerOpened} onClick={toggleDrawer}/>
          </Group>

        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          <Link href="#" className={classes.link}>
            Home
          </Link>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link href="#" className={classes.link}>
            Learn
          </Link>
          <Link href="#" className={classes.link}>
            Academy
          </Link>

          <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

          {/* <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group> */}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

export default NavHeader;