import { Title, Text, Button, Container } from "@mantine/core";
import Dots from "./Dots";
import classes from "./index.module.css";

export default function Home() {
  return (
    <Container className={classes.wrapper} size={1500}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          <span className={classes.highlight}>Open</span> data for a{" "}
          {<br className={classes.break}></br>}
          <span className={classes.highlight}>better</span> Auburn.
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
