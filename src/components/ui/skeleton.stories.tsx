import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '@/components/ui/skeleton'

const meta = {
  title: 'Primitives/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <Skeleton className="h-4 w-48" />,
}

export const TextLines: Story = {
  render: () => (
    <div className="space-y-2 w-64">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/5" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  ),
}

export const Avatar: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Skeleton className="size-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  ),
}

export const Card: Story = {
  render: () => (
    <div className="flex flex-col space-y-3 w-72">
      <Skeleton className="h-40 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  ),
}

export const UserCard: Story = {
  render: () => (
    <div className="w-72 rounded-lg border p-4 space-y-4">
      <div className="flex items-center space-x-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="space-y-1.5">
          <Skeleton className="h-3.5 w-28" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-8 w-20 rounded-md" />
        <Skeleton className="h-8 w-20 rounded-md" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

export const Table: Story = {
  render: () => (
    <div className="w-full max-w-lg space-y-3">
      <div className="flex gap-4 pb-2 border-b">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-16" />
      </div>
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i} className="flex gap-4 items-center">
          <Skeleton className="h-3.5 w-24" />
          <Skeleton className="h-3.5 w-32" />
          <Skeleton className="h-3.5 w-20" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

export const StatCard: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 w-[600px]">
      {Array.from({ length: 3 }, (_, i) => (
        <div key={i} className="rounded-lg border p-4 space-y-3">
          <div className="flex justify-between items-start">
            <Skeleton className="h-3.5 w-20" />
            <Skeleton className="size-4 rounded" />
          </div>
          <Skeleton className="h-7 w-24" />
          <Skeleton className="h-3 w-28" />
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
}

export const Shapes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="size-12 rounded-none" />
        <span className="text-xs text-muted-foreground">Square</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="size-12 rounded-md" />
        <span className="text-xs text-muted-foreground">Rounded</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="size-12 rounded-full" />
        <span className="text-xs text-muted-foreground">Circle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="h-4 w-32 rounded-full" />
        <span className="text-xs text-muted-foreground">Pill</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="h-4 w-32" />
        <span className="text-xs text-muted-foreground">Bar</span>
      </div>
    </div>
  ),
}
