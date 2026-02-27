import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from '@/components/ui/progress'

const meta = {
  title: 'Primitives/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The current progress value (0–100)',
    },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 60,
  },
  render: (args) => (
    <div className="w-[360px]">
      <Progress {...args} />
    </div>
  ),
}

export const Empty: Story = {
  args: {
    value: 0,
  },
  render: (args) => (
    <div className="w-[360px]">
      <Progress {...args} />
    </div>
  ),
}

export const OneThird: Story = {
  args: {
    value: 33,
  },
  render: (args) => (
    <div className="w-[360px]">
      <Progress {...args} />
    </div>
  ),
}

export const TwoThirds: Story = {
  args: {
    value: 66,
  },
  render: (args) => (
    <div className="w-[360px]">
      <Progress {...args} />
    </div>
  ),
}

export const Complete: Story = {
  args: {
    value: 100,
  },
  render: (args) => (
    <div className="w-[360px]">
      <Progress {...args} />
    </div>
  ),
}

export const AllValues: Story = {
  render: () => (
    <div className="flex w-[360px] flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">0%</span>
          <span className="text-muted-foreground font-medium">0</span>
        </div>
        <Progress value={0} />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">33%</span>
          <span className="text-muted-foreground font-medium">33</span>
        </div>
        <Progress value={33} />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">66%</span>
          <span className="text-muted-foreground font-medium">66</span>
        </div>
        <Progress value={66} />
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">100%</span>
          <span className="text-muted-foreground font-medium">100</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-[360px] space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span>Upload progress</span>
        <span>75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
}

export const Indeterminate: Story = {
  args: {
    value: undefined,
  },
  render: (args) => (
    <div className="w-[360px]">
      <Progress {...args} />
    </div>
  ),
}

export const CustomHeight: Story = {
  render: () => (
    <div className="flex w-[360px] flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <span className="text-muted-foreground text-xs">Thin (h-1)</span>
        <Progress value={60} className="h-1" />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-muted-foreground text-xs">Default (h-2)</span>
        <Progress value={60} />
      </div>
      <div className="flex flex-col gap-1.5">
        <span className="text-muted-foreground text-xs">Thick (h-4)</span>
        <Progress value={60} className="h-4" />
      </div>
    </div>
  ),
}
