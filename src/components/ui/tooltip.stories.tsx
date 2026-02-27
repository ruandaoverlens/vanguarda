import type { Meta, StoryObj } from '@storybook/react'
import {
  CopyIcon,
  HelpCircleIcon,
  InfoIcon,
  PlusIcon,
  SettingsIcon,
  TrashIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const meta = {
  title: 'Primitives/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A floating label that appears on hover or focus built on Radix UI Tooltip. Always wrap your usage in `<TooltipProvider>`. Supports four side positions: `top`, `right`, `bottom`, `left`.',
      },
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const OnIconButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Copy to clipboard">
          <CopyIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Copy to clipboard</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const TopSide: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Top (default)</Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>Tooltip on top</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const RightSide: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Right side</Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>Tooltip on the right</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const BottomSide: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Bottom side</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>Tooltip on the bottom</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const LeftSide: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Left side</Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Tooltip on the left</p>
      </TooltipContent>
    </Tooltip>
  ),
}

export const AllPositions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 place-items-center w-72 h-36">
      <div />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top"><p>Top</p></TooltipContent>
      </Tooltip>
      <div />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left"><p>Left</p></TooltipContent>
      </Tooltip>
      <div />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right"><p>Right</p></TooltipContent>
      </Tooltip>

      <div />
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom"><p>Bottom</p></TooltipContent>
      </Tooltip>
      <div />
    </div>
  ),
}

export const WithHelperIcon: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">API Key</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <button aria-label="More information about API keys" className="text-muted-foreground hover:text-foreground transition-colors">
            <HelpCircleIcon className="size-4" />
          </button>
        </TooltipTrigger>
        <TooltipContent side="right" className="max-w-52">
          <p>Your API key grants access to the platform. Keep it confidential and regenerate it if compromised.</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
}

export const IconToolbar: Story = {
  render: () => (
    <div className="flex items-center gap-1 rounded-lg border p-1">
      {[
        { icon: <PlusIcon />, label: 'Add item' },
        { icon: <CopyIcon />, label: 'Duplicate' },
        { icon: <SettingsIcon />, label: 'Settings' },
        { icon: <InfoIcon />, label: 'View details' },
        { icon: <TrashIcon />, label: 'Delete' },
      ].map(({ icon, label }) => (
        <Tooltip key={label}>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label={label}>
              {icon}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  ),
}

export const OnDisabledButton: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        {/* Wrap in span to allow Tooltip to receive pointer events from a disabled button */}
        <span tabIndex={0} className="inline-flex">
          <Button disabled>Submit</Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>Complete all required fields to submit</p>
      </TooltipContent>
    </Tooltip>
  ),
}
