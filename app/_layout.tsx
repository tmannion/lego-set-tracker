import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { SetsProvider } from "@/context/SetsContext";

export default function RootLayout() {
  return (
    <>
      <SetsProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="dark" />
      </SetsProvider>
    </>
  );
}
