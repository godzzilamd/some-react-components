import * as React from "react";
import { makeBEM } from "../libs/make-bem";

import {
  UilCheckCircle,
  UilInfoCircle,
  UilExclamationCircle,
  UilExclamationTriangle,
  UilTimes,
} from "@iconscout/react-unicons";

const bem = makeBEM("notify__item");

export interface NotifyItemType {
  type?: "regular" | "primary" | "success" | "danger" | "info" | "warning";
}

export interface NotifyItemProps extends NotifyItemType {
  title: string;
  description?: string;
  icon?: "string" | React.ReactNode;
  onClose?: () => void;
}

export const NotifyItem = ({
  type = "success",
  title,
  description,
  icon,
  onClose,
}: NotifyItemProps) => {
  if (!icon) {
    switch (type) {
      case "success":
        icon = "check";
        break;
      case "danger":
        icon = "error";
        break;
      case "info":
        icon = "info";
        break;
      case "warning":
        icon = "warning";
        break;
      case "regular":
        icon = "info";
        break;
      case "primary":
        icon = "info";
        break;
    }
  }

  return (
    <div className={bem(null, [type])}>
      {icon === "check" ? (
        <UilCheckCircle className={bem("icon")} size="25" color="#ffffff" />
      ) : icon === "error" ? (
        <UilExclamationCircle
          className={bem("icon")}
          size="25"
          color="#ffffff"
        />
      ) : icon === "warning" ? (
        <UilExclamationTriangle
          className={bem("icon")}
          size="25"
          color="#ffffff"
        />
      ) : (
        <UilInfoCircle className={bem("icon")} size="25" color="#ffffff" />
      )}
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
