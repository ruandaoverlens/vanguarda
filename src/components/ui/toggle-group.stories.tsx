import type { Meta, StoryObj } from '@storybook/react'
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  ListIcon,
  UnderlineIcon,
} from 'lucide-react'
import { expect, userEvent, within } from 'storybook/test'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const meta = {
  title: 'Primitives/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A group of toggle buttons that can operate in `single` (radio-like) or `multiple` (checkbox-like) selection mode. Inherits `variant` and `size` from the group and passes them to each `ToggleGroupItem`.',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Selection mode',
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const SingleSelection: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        <AlignJustifyIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const MultipleSelection: Story = {
  render: () => (
    <ToggleGroup type="multiple" defaultValue={['bold', 'italic']}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const OutlineVariant: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="list">
      <ToggleGroupItem value="list" aria-label="List view">
        <ListIcon />
        List
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center view">
        <AlignCenterIcon />
        Grid
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const WithLabels: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
        Left
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
        Center
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
        Right
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const SmallSize: Story = {
  render: () => (
    <ToggleGroup type="single" size="sm" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const LargeSize: Story = {
  render: () => (
    <ToggleGroup type="single" size="lg" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const WithSpacing: Story = {
  render: () => (
    <ToggleGroup type="single" variant="outline" spacing={2} defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        <AlignJustifyIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div className="flex items-center gap-4">
        <span className="text-xs text-muted-foreground w-16">sm</span>
        <ToggleGroup type="single" size="sm" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left"><AlignLeftIcon /></ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center"><AlignCenterIcon /></ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right"><AlignRightIcon /></ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-muted-foreground w-16">default</span>
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left"><AlignLeftIcon /></ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center"><AlignCenterIcon /></ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right"><AlignRightIcon /></ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-xs text-muted-foreground w-16">lg</span>
        <ToggleGroup type="single" size="lg" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left"><AlignLeftIcon /></ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center"><AlignCenterIcon /></ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right"><AlignRightIcon /></ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
}

export const Interactive: Story = {
  render: () => (
    <ToggleGroup type="single" defaultValue="left">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const centerBtn = canvas.getByRole('radio', { name: 'Align center' })

    await userEvent.click(centerBtn)
    await expect(centerBtn).toHaveAttribute('data-state', 'on')

    const rightBtn = canvas.getByRole('radio', { name: 'Align right' })
    await userEvent.click(rightBtn)
    await expect(rightBtn).toHaveAttribute('data-state', 'on')
    await expect(centerBtn).toHaveAttribute('data-state', 'off')
  },
}
