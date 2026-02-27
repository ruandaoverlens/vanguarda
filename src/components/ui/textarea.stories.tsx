import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { expect, userEvent, within } from 'storybook/test'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const meta = {
  title: 'Primitives/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A multi-line text input that auto-sizes to its content via `field-sizing-content`. Supports `disabled`, `aria-invalid`, and all standard textarea attributes.',
      },
    },
  },
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    rows: { control: 'number' },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here…',
    className: 'w-80',
  },
}

export const WithValue: Story = {
  args: {
    defaultValue:
      'This is some pre-filled content. The textarea grows automatically to fit its content thanks to field-sizing-content.',
    className: 'w-80',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'This textarea is disabled.',
    disabled: true,
    className: 'w-80',
  },
}

export const DisabledWithValue: Story = {
  args: {
    defaultValue: 'This content cannot be edited.',
    disabled: true,
    className: 'w-80',
  },
}

export const Invalid: Story = {
  args: {
    placeholder: 'Enter a description…',
    'aria-invalid': true,
    className: 'w-80',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Write your message here…" />
    </div>
  ),
}

export const WithLabelAndHelperText: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" placeholder="Tell us a little bit about yourself…" rows={4} />
      <p className="text-xs text-muted-foreground">
        This will be displayed on your public profile.
      </p>
    </div>
  ),
}

export const WithCharacterCount: Story = {
  render: function CharacterCountTextarea() {
    const MAX = 280
    const [value, setValue] = useState('')
    const remaining = MAX - value.length
    const isNearLimit = remaining <= 40
    const isOverLimit = remaining < 0

    return (
      <div className="flex flex-col gap-2 w-80">
        <Label htmlFor="post">Post content</Label>
        <Textarea
          id="post"
          placeholder="What's on your mind?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-invalid={isOverLimit}
          rows={4}
        />
        <p
          className={`text-xs text-right ${
            isOverLimit
              ? 'text-destructive font-medium'
              : isNearLimit
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-muted-foreground'
          }`}
        >
          {remaining} characters remaining
        </p>
      </div>
    )
  },
}

export const Interactive: Story = {
  args: {
    placeholder: 'Type here to test…',
    className: 'w-80',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const textarea = canvas.getByPlaceholderText('Type here to test…')

    await userEvent.click(textarea)
    await userEvent.type(textarea, 'Hello, Storybook!')
    await expect(textarea).toHaveValue('Hello, Storybook!')
  },
}
