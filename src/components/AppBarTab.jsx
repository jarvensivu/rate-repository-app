import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({ children }) => {
  return (
    <Pressable onPress={onPressFunction}>
      <Text color={"appBarTab"}>{children}</Text>
    </Pressable>
  );
}

const onPressFunction = () => {
  console.log("Tab pressed");
}

export default AppBarTab;