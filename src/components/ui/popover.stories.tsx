import type { Meta, StoryObj } from '@storybook/react'
import { CalendarIcon, InfoIcon, SettingsIcon } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const meta = {
  title: 'Primitives/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Popover title</PopoverTitle>
          <PopoverDescription>
            This is a popover with a title and description.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}

export const WithForm: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <SettingsIcon className="mr-2 size-4" />
          Settings
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <PopoverHeader>
          <PopoverTitle>Display settings</PopoverTitle>
          <PopoverDescription>
            Adjust your display preferences here.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid gap-4 pt-3">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="vanguarda_user" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="user@vanguarda.app" />
          </div>
          <Button size="sm" className="w-full">Save changes</Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const WithInfoTrigger: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="text-muted-foreground hover:text-foreground rounded-full transition-colors"
          aria-label="More information"
        >
          <InfoIcon className="size-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent side="right">
        <PopoverHeader>
          <PopoverTitle>About this field</PopoverTitle>
          <PopoverDescription>
            This value is automatically calculated based on your account settings and cannot be changed manually.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}

export const AlignStart: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Align start</Button>
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Left-aligned popover</PopoverTitle>
          <PopoverDescription>
            This popover is aligned to the start (left) of the trigger.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}

export const AlignEnd: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Align end</Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <PopoverHeader>
          <PopoverTitle>Right-aligned popover</PopoverTitle>
          <PopoverDescription>
            This popover is aligned to the end (right) of the trigger.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}

export const SideTop: Story = {
  render: () => (
    <div className="pt-32">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open above</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <PopoverHeader>
            <PopoverTitle>Popover above</PopoverTitle>
            <PopoverDescription>
              This popover appears above the trigger element.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  ),
  parameters: { layout: 'centered' },
}

export const DatePicker: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[240px] justify-start text-left font-normal">
          <CalendarIcon className="mr-2 size-4" />
          <span className="text-muted-foreground">Pick a date</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4 text-sm text-muted-foreground">
          Calendar component would render here.
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Controlled: Story = {
  render: () => {
    return (
      <Popover defaultOpen>
        <PopoverTrigger asChild>
          <Button variant="outline">Popover (open by default)</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Open by default</PopoverTitle>
            <PopoverDescription>
              This popover starts in the open state for demonstration purposes.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    )
  },
}
