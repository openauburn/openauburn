import { Title, Text, Button, Container } from "@mantine/core";
import classes from "./index.module.css";

export default function Home() {
  return (
    <Container className={classes.wrapper} size={1500}>
      <div className={classes.inner}>
        {/* Circle and Hexagon Shapes */}
        <div className={`${classes.circle} ${classes.hiddenMobile}`}></div>
        <div className={`${classes.hexagon} ${classes.hiddenMobile}`}></div>
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
            href="/datasets"
          >
            Discover the data
          </Button>
          <Button
            className={classes.control}
            size="lg"
            component="a"
            variant="default"
            color="gray"
            href="/showcase"
          >
            See what's possible
          </Button>
        </div>
      </div>
    </Container>
  );
}
