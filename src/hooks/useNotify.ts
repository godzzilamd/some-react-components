import * as React from "react";

import {NotifyContext} from "../Notify/Notify";
import {NotifyItemProps} from "../Notify/NotifyItem";
import {NotificationTypes} from "../Notify/Notify.types";

export interface NotifyProps {
  error: (item: NotifyItemProps) => void;
  success: (item: NotifyItemProps) => void;
  info: (item: NotifyItemProps) => void;
  primary: (item: NotifyItemProps) => void;
  regular: (item: NotifyItemProps) => void;
  warning: (item: NotifyItemProps) => void;
}

export const useNotify = (): NotifyProps => {
  const { push } = React.useContext(NotifyContext);

  return {
    error: (item) => push({ type: NotificationTypes.DANGER, ...item }),
    success: (item) => push({ type: NotificationTypes.SUCCESS, ...item }),
    info: (item) => push({ type: NotificationTypes.INFO, ...item }),
    primary: (item) => push({ type: NotificationTypes.PRIMARY, ...item }),
    regular: (item) => push({ type: NotificationTypes.REGULAR, ...item }),
    warning: (item) => push({ type: NotificationTypes.WARNING, ...item }),
  };
};
