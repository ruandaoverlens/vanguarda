import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@/components/ui/calendar";

const meta = {
  title: "Primitives/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: "single",
  },
};

export const WithSelectedDate: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
      />
    );
  },
};

export const DateRange: Story = {
  render: () => {
    const [range, setRange] = React.useState<
      { from: Date | undefined; to?: Date | undefined } | undefined
    >({
      from: new Date(new Date().setDate(new Date().getDate() - 3)),
      to: new Date(new Date().setDate(new Date().getDate() + 4)),
    });
    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
      />
    );
  },
  parameters: {
    layout: "padded",
  },
};

export const MultipleMonths: Story = {
  args: {
    mode: "single",
    numberOfMonths: 2,
  },
  parameters: {
    layout: "padded",
  },
};

export const DropdownCaption: Story = {
  args: {
    mode: "single",
    captionLayout: "dropdown",
    fromYear: 2020,
    toYear: 2030,
  },
};

export const WithWeekNumbers: Story = {
  args: {
    mode: "single",
    showWeekNumber: true,
  },
};

export const DisabledDates: Story = {
  render: () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return (
      <Calendar
        mode="single"
        disabled={{ before: today }}
        defaultMonth={today}
      />
    );
  },
};

export const HideOutsideDays: Story = {
  args: {
    mode: "single",
    showOutsideDays: false,
  },
};
