import { Title, Text, Button, Container } from "@mantine/core";
import Dots from "./Dots";
import classes from "./index.module.css";

export default function Home() {
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
          </Text>{" "}
          data for a {<br className={classes.break}></br>}
          <Text component="span" className={classes.highlight} inherit>
            better
          </Text>{" "}
          Auburn.
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Create, research, and learn using Auburn University's largest public
            datasets. Focus less on getting the data and more on the projects
            meaningful to you.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            className={classes.control}
            size="lg"
            component="a"
            href="/showcase"
          >
            See what's possible
          </Button>
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
            component="a"
            href="/datasets"
          >
            Discover the data
          </Button>
        </div>
      </div>
    </Container>
  );
}
