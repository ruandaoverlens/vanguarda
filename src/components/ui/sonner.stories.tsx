import type { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'

const meta = {
  title: 'Primitives/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Toast notification system powered by the sonner library. Render `<Toaster />` once at the root of your app, then call `toast()` from anywhere to trigger notifications.',
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster richColors position="bottom-right" />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast('Event has been created', { description: 'Monday, January 3rd at 6:00pm' })}
    >
      Show Toast
    </Button>
  ),
}

export const Success: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.success('Changes saved', {
          description: 'Your profile has been updated successfully.',
        })
      }
    >
      Success Toast
    </Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.error('Something went wrong', {
          description: 'Unable to save your changes. Please try again.',
        })
      }
    >
      Error Toast
    </Button>
  ),
}

export const Warning: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.warning('Unsaved changes', {
          description: 'You have unsaved changes that will be lost.',
        })
      }
    >
      Warning Toast
    </Button>
  ),
}

export const Info: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.info('New update available', {
          description: 'Version 2.0 is now available. Refresh to update.',
        })
      }
    >
      Info Toast
    </Button>
  ),
}

export const Loading: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => {
        const id = toast.loading('Uploading file…')
        setTimeout(() => {
          toast.success('Upload complete', { id, description: 'Your file has been uploaded.' })
        }, 2000)
      }}
    >
      Loading → Success Toast
    </Button>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast('Message deleted', {
          action: {
            label: 'Undo',
            onClick: () => toast.success('Message restored'),
          },
        })
      }
    >
      Toast with Action
    </Button>
  ),
}

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast('Default notification')}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success('Success!')}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error('Error!')}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.warning('Warning!')}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.info('Info!')}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.loading('Loading…')}>
        Loading
      </Button>
    </div>
  ),
}
