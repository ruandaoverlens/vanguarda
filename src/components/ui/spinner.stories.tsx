import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from '@/components/ui/spinner'

const meta = {
  title: 'Primitives/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A simple animated loading indicator built on top of the `Loader2` lucide icon. Accepts all standard SVG props. Control size via Tailwind `size-*` classes passed through `className`.',
      },
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: {
    className: 'size-3',
  },
}

export const Medium: Story = {
  args: {
    className: 'size-6',
  },
}

export const Large: Story = {
  args: {
    className: 'size-10',
  },
}

export const ExtraLarge: Story = {
  args: {
    className: 'size-16',
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
      <Spinner className="size-10" />
      <Spinner className="size-16" />
    </div>
  ),
}

export const WithColor: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner className="size-6 text-foreground" />
      <Spinner className="size-6 text-muted-foreground" />
      <Spinner className="size-6 text-brand-kobold" />
      <Spinner className="size-6 text-brand-midori" />
      <Spinner className="size-6 text-brand-carota" />
      <Spinner className="size-6 text-brand-cotta" />
    </div>
  ),
}

export const InlineWithText: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner className="size-4" />
        <span>Loading your data…</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner className="size-4" />
        <span>Saving changes…</span>
      </div>
    </div>
  ),
}
