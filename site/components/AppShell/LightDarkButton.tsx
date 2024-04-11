import {
  useMantineColorScheme,
  ActionIcon,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

const LightDarkButton = () => {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="lg"
        style={{
          backgroundColor:
            colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            colorScheme === "dark"
              ? theme.colors.orange[4]
              : theme.colors.blue[6],
        }}
      >
        {colorScheme === "dark" ? (
          <IconSun size={18} />
        ) : (
          <IconMoonStars size={18} />
        )}
      </ActionIcon>
    </Group>
  );
};

export default LightDarkButton;
