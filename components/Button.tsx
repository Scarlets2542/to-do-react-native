import { Button } from "react-native";

// Define the type for your stack parameters
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

// Define the props for the ButtonNavigate component
type ButtonNavigateProps = {
  title: string;
  onPress: () => void;
};

// Component for the header button
export const ButtonNavigate = ({ title, onPress }: ButtonNavigateProps) => {
  return <Button title={title} onPress={onPress} />;
};