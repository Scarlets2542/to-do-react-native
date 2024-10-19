import { Button } from "react-native";

type ButtonNavigateProps = {
  title: string;
  onPress: () => void;
};

export const ButtonNavigate = ({ title, onPress }: ButtonNavigateProps) => {
  return <Button title={title} onPress={onPress} />;
};
