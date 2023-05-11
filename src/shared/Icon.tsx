import { Icon } from "@rneui/themed";

type iconTypes = {
  name: string;
  size?: number;
  color?: string;
  style?: any;
  type: string;
};

export const CustomIcon = (props: iconTypes) => {
  return <Icon {...props} />;
};

export default CustomIcon;
