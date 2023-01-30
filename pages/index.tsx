import { createStyles, Title, Text, Button, Container } from '@mantine/core';
import {Dots} from './Dots';


const useStyles = createStyles((theme) => ({
    wrapper: {
      position: 'relative',
      paddingTop: 120,
      paddingBottom: 80,
  
      '@media (max-width: 755px)': {
        paddingTop: 80,
        paddingBottom: 60,
      },
    },
  
    inner: {
      position: 'relative',
      zIndex: 1,
    },
  
    dots: {
      position: 'absolute',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },
  
    dotsRight: {
      position: 'absolute',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
  
      '@media (max-width: 520px)': {
        display: 'none'
      },
    },
  
    title: {
      textAlign: 'center',
      fontWeight: 800,
      fontSize: 65,
      letterSpacing: -1,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      marginBottom: theme.spacing.xs,
  
      '@media (max-width: 520px)': {
        fontSize: 40,
        textAlign: 'left',
      },
    },
  
    highlight: {
      //color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 4],
      color: theme.colors[theme.primaryColor][parseInt(theme.primaryShade.toString())],
    },
  
    description: {
      textAlign: 'center',
      fontSize: theme.fontSizes.lg,
  
      '@media (max-width: 520px)': {
        textAlign: 'left',
        fontSize: theme.fontSizes.md,
      },
    },
  
    controls: {
      marginTop: theme.spacing.lg,
      display: 'flex',
      justifyContent: 'center',
  
      '@media (max-width: 520px)': {
        flexDirection: 'column',
      },
    },
  
    control: {
      '&:not(:first-of-type)': {
        marginLeft: theme.spacing.md,
      },
  
      '@media (max-width: 520px)': {
        height: 42,
        fontSize: theme.fontSizes.md,
  
        '&:not(:first-of-type)': {
          marginTop: theme.spacing.md,
          marginLeft: 0,
        },
      },
    },
  
    break: {
      '@media (max-width: 580px)': {
        display: 'none',
      },
    }
  }));

export default function Home() {
    const { classes } = useStyles();

    return (
      <Container className={classes.wrapper} size={1500}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
        <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
  
        <Dots className={classes.dotsRight} style={{ right: 0, top: 60 }} />
        <Dots className={classes.dotsRight} style={{ right: 0, top: 140 }} />
        <Dots className={classes.dotsRight} style={{ right: 60, top: 140 }} />
  
        <div className={classes.inner}>
          <Title className={classes.title}>
            <Text component="span" className={classes.highlight} inherit>
              Open
            </Text>
            {' '}data for a{' '} {<br className={classes.break}></br>}
            <Text component="span" className={classes.highlight} inherit>
              better
            </Text>{' '}
              Auburn.
          </Title>
  
          <Container p={0} size={600}>
            <Text size="lg" color="dimmed" className={classes.description}>
            Create, research, and learn using Auburn University&apos;'s largest public datasets.
            Focus less on getting the data and more on the projects meaningful to you.
            </Text>
          </Container>
  
          <div className={classes.controls}>
            
            <Button className={classes.control} size="lg" component='a' href='/showcase'>
              See what&apos;'s possible
            </Button>
            <Button className={classes.control} size="lg" variant="default" color="gray" component='a' href='/data'>
              Discover the data
            </Button>
          </div>
        </div>
      </Container>
  )
}