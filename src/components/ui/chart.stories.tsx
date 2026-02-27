import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart";

const meta = {
  title: "Primitives/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ChartContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

const barData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const barConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--color-brand-kobold)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--color-brand-midori)",
  },
} satisfies ChartConfig;

export const BarChartStory: Story = {
  name: "Bar Chart",
  args: {
    config: barConfig,
    className: "h-[300px] w-full max-w-[600px]",
    children: (
      <BarChart data={barData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    ),
  },
};

const lineData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
];

const lineConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--color-brand-kobold)",
  },
  expenses: {
    label: "Expenses",
    color: "var(--color-brand-cotta)",
  },
} satisfies ChartConfig;

export const LineChartStory: Story = {
  name: "Line Chart",
  args: {
    config: lineConfig,
    className: "h-[300px] w-full max-w-[600px]",
    children: (
      <LineChart data={lineData}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <YAxis tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="var(--color-revenue)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="expenses"
          stroke="var(--color-expenses)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    ),
  },
};

export const WithLegend: Story = {
  name: "Bar Chart with Legend",
  args: {
    config: barConfig,
    className: "h-[320px] w-full max-w-[600px]",
    children: (
      <BarChart data={barData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    ),
  },
};

export const TooltipIndicators: Story = {
  name: "Tooltip Indicator Variants",
  render: () => (
    <div className="flex flex-col gap-8">
      {(["dot", "line", "dashed"] as const).map((indicator) => (
        <div key={indicator} className="space-y-1">
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
            indicator: {indicator}
          </p>
          <ChartContainer
            config={barConfig}
            className="h-[200px] w-full max-w-[500px]"
          >
            <BarChart data={barData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip
                content={<ChartTooltipContent indicator={indicator} />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      ))}
    </div>
  ),
};
