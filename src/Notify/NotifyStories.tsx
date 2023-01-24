import * as React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { exportStory } from "../libs/stories";
import { useNotify } from "../hooks/useNotify";

import { NotifyContainer, NotifyProvider } from "./Notify";
import { NotifyItem, NotifyItemProps } from "./NotifyItem";

export default {
  title: exportStory("Notify", "feedback"),
  component: NotifyItem,
  subcomponents: { NotifyItem },
} as ComponentMeta<typeof NotifyItem>;

export const Regular: ComponentStory<typeof NotifyItem> = (args) => {
  const Notify: React.FC<NotifyItemProps> = ({ ...params }) => {
    const notify = useNotify();

    return (
      <div>
        <button onClick={() => notify.success(params)}>Success</button>
        <button onClick={() => notify.error(params)}>Error</button>
        <button onClick={() => notify.warning(params)}>Warning</button>
        <button onClick={() => notify.regular(params)}>Regular</button>
        <button onClick={() => notify.info(params)}>Info</button>
        <button onClick={() => notify.primary(params)}>Primary</button>
      </div>
    );
  };

  return (
    <NotifyProvider>
      <NotifyContainer />
      <Notify {...args} />
    </NotifyProvider>
  );
};

Regular.args = {
  title: "Example",
  description: "This is an example component",
};
