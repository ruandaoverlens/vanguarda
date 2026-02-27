import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "storybook/test";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Primitives/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "default-checkbox",
  },
};

export const Checked: Story = {
  args: {
    id: "checked-checkbox",
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    id: "indeterminate-checkbox",
    checked: "indeterminate",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-checkbox",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    id: "disabled-checked-checkbox",
    disabled: true,
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="with-label" />
      <Label htmlFor="with-label">Accept terms and conditions</Label>
    </div>
  ),
};

export const WithLabelAndDescription: Story = {
  render: () => (
    <div className="flex items-start gap-2">
      <Checkbox id="with-desc" className="mt-0.5" />
      <div className="grid gap-1">
        <Label htmlFor="with-desc">Marketing emails</Label>
        <p className="text-sm text-muted-foreground">
          Receive emails about new products, features, and more.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};

export const CheckboxGroup: Story = {
  render: () => {
    const items = [
      { id: "option-1", label: "Option 1" },
      { id: "option-2", label: "Option 2", defaultChecked: true },
      { id: "option-3", label: "Option 3" },
      { id: "option-4", label: "Option 4 (disabled)", disabled: true },
    ];
    return (
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <Checkbox
              id={item.id}
              defaultChecked={item.defaultChecked}
              disabled={item.disabled}
            />
            <Label htmlFor={item.id} className={item.disabled ? "opacity-50" : undefined}>
              {item.label}
            </Label>
          </div>
        ))}
      </div>
    );
  },
  parameters: {
    layout: "padded",
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = React.useState(false);
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Checkbox
            id="controlled"
            checked={checked}
            onCheckedChange={(value) => setChecked(value === true)}
          />
          <Label htmlFor="controlled">Toggle me</Label>
        </div>
        <p className="text-sm text-muted-foreground">
          State: <span className="font-medium">{checked ? "checked" : "unchecked"}</span>
        </p>
      </div>
    );
  },
};

export const WithInteraction: Story = {
  args: {
    id: "interaction-checkbox",
    onCheckedChange: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    await expect(args.onCheckedChange).toHaveBeenCalledOnce();
    await expect(args.onCheckedChange).toHaveBeenCalledWith(true);
  },
};
