import { View } from "react-native";
import type { ReactNode } from "react";

interface CardProps{
    children: ReactNode;
    className?: string;
}

export default function Card({children, className}: CardProps) {
  return (
  <View className={`bg-card border border-border rounded-card p-4 ${className ?? ''}`}>
    {children}
  </View>
  );
}
