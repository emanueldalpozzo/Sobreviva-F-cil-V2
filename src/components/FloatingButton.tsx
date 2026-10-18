import { Link, type Href } from "expo-router";
import { Pressable, Text } from "react-native";

interface FloatingButtonProps {
  href: Href;
  label: string;
}

export default function FloatingButton({ href, label }: FloatingButtonProps) {
  return (
    <Link href={href} asChild>
      <Pressable
        className="absolute bottom-6 right-5 h-14 w-14 items-center justify-center rounded-full bg-primary active:opacity-80"
        accessibilityRole="button"
        accessibilityLabel={label}
      >
        <Text className="text-title text-primary-foreground">+</Text>
      </Pressable>
    </Link>
  );
}
