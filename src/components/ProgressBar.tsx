import { View } from "react-native";

interface ProgressBarProps {
  value: number;
  variant?: "primary" | "positive";
  className?: string;
}

const fillColor = {
  primary: "bg-primary",
  positive: "bg-positive",
};

export default function ProgressBar({ value, variant = "primary", className }: ProgressBarProps) {
  const progress = Math.min(Math.max(value, 0), 1);
  const percent = Math.round(progress * 100);

  return (
    <View
      className={`h-2 w-full overflow-hidden rounded-full bg-secondary ${className ?? ""}`}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: percent }}
    >
      <View className={`h-full rounded-full ${fillColor[variant]}`} style={{ width: `${percent}%` }} />
    </View>
  );
}
