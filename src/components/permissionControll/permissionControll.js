import { hasPermission } from "../../utils/permission.utils";
import { NoMatch } from "../noMatch/noMatch";

const PermissionControll = ({permission, children}) => {
  if (hasPermission(permission)) {
    return children;
  } else {
    return undefined;
  }
};
export default PermissionControll;
