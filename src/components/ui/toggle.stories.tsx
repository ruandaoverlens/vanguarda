import type { Meta, StoryObj } from '@storybook/react'
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from 'lucide-react'
import { expect, userEvent, within } from 'storybook/test'

import { Toggle } from '@/components/ui/toggle'

const meta = {
  title: 'Primitives/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A two-state button built on Radix UI Toggle. Supports `default` and `outline` variants, three sizes, pressed/unpressed states, and icon-only usage.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'Visual style of the toggle',
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
      description: 'Size of the toggle',
    },
    pressed: {
      control: 'boolean',
      description: 'Controlled pressed state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
    },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Toggle',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Toggle',
  },
}

export const Pressed: Story = {
  args: {
    defaultPressed: true,
    children: 'Active',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}

export const IconOnly: Story = {
  args: {
    'aria-label': 'Toggle bold',
    children: <BoldIcon />,
  },
}

export const IconWithLabel: Story = {
  args: {
    children: (
      <>
        <BoldIcon />
        Bold
      </>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-3">
      <Toggle>Default</Toggle>
      <Toggle defaultPressed>Default (on)</Toggle>
      <Toggle variant="outline">Outline</Toggle>
      <Toggle variant="outline" defaultPressed>
        Outline (on)
      </Toggle>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Toggle size="sm">
        <BoldIcon />
        Small
      </Toggle>
      <Toggle size="default">
        <BoldIcon />
        Default
      </Toggle>
      <Toggle size="lg">
        <BoldIcon />
        Large
      </Toggle>
    </div>
  ),
}

export const AllSizesOutline: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Toggle size="sm" variant="outline">
        <BoldIcon />
        Small
      </Toggle>
      <Toggle size="default" variant="outline">
        <BoldIcon />
        Default
      </Toggle>
      <Toggle size="lg" variant="outline">
        <BoldIcon />
        Large
      </Toggle>
    </div>
  ),
}

export const TextFormattingGroup: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Toggle bold" defaultPressed>
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic">
        <ItalicIcon />
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <UnderlineIcon />
      </Toggle>
    </div>
  ),
}

export const AlignmentGroup: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Toggle variant="outline" aria-label="Align left" defaultPressed>
        <AlignLeftIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Align center">
        <AlignCenterIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Align right">
        <AlignRightIcon />
      </Toggle>
    </div>
  ),
}

export const Interactive: Story = {
  args: {
    'aria-label': 'Toggle bold',
    children: <BoldIcon />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = canvas.getByRole('button', { name: 'Toggle bold' })

    await expect(toggle).toHaveAttribute('data-state', 'off')
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('data-state', 'on')
    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('data-state', 'off')
  },
}
