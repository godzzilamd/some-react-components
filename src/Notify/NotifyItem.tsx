import * as React from "react";
import { makeBEM } from "../libs/make-bem";

import {
  UilCheckCircle,
  UilInfoCircle,
  UilExclamationCircle,
  UilExclamationTriangle,
  UilTimes,
} from "@iconscout/react-unicons";
import { NotificationTypes } from "./Notify.types";

const bem = makeBEM("notify__item");

export interface NotifyItemType {
  type?: NotificationTypes;
}

export interface NotifyItemProps extends NotifyItemType {
  title: string;
  description?: string;
  icon?: "string" | React.ReactNode;
  onClose?: () => void;
}

const notificationTypes = {
  [NotificationTypes.REGULAR]: "info",
  [NotificationTypes.PRIMARY]: "info",
  [NotificationTypes.SUCCESS]: "check",
  [NotificationTypes.DANGER]: "error",
  [NotificationTypes.INFO]: "info",
  [NotificationTypes.WARNING]: "warning",
};

const notificationIcons: { [key: string]: any } = {
  info: UilInfoCircle,
  check: UilCheckCircle,
  error: UilExclamationCircle,
  warning: UilExclamationTriangle,
};

export const NotifyItem = ({
  type = NotificationTypes.SUCCESS,
  title,
  description,
  icon,
  onClose,
}: NotifyItemProps) => {
  const Icon = !icon && notificationIcons[notificationTypes[type]];

  return (
    <div className={bem(null, [type])}>
      <Icon className={bem("icon")} size="25" color="#ffffff" />

      <div className={bem("text")}>
        {title && <p className={bem("title")}>{title}</p>}
        {description && <p className={bem("message")}>{description}</p>}
      </div>
      <UilTimes
        className={bem("close")}
        onClick={onClose}
        size="25"
        color="#ffffff"
      />
    </div>
  );
};
