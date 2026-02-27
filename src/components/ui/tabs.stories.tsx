import type { Meta, StoryObj } from '@storybook/react'
import { BellIcon, LayoutDashboardIcon, Settings2Icon, UserIcon } from 'lucide-react'
import { expect, userEvent, within } from 'storybook/test'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const meta = {
  title: 'Primitives/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A set of layered content panels built on Radix UI Tabs. Supports `default` (pill background) and `line` (underline indicator) list variants, plus horizontal and vertical orientations.',
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Direction of the tab list',
    },
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        <p className="text-sm text-muted-foreground">
          Manage your account settings and profile information.
        </p>
      </TabsContent>
      <TabsContent value="password" className="p-4">
        <p className="text-sm text-muted-foreground">
          Change your password and configure security options.
        </p>
      </TabsContent>
      <TabsContent value="notifications" className="p-4">
        <p className="text-sm text-muted-foreground">
          Choose how and when you receive notifications.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList variant="line">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="exports">Exports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="pt-4">
        <p className="text-sm text-muted-foreground">Overview of your dashboard metrics.</p>
      </TabsContent>
      <TabsContent value="analytics" className="pt-4">
        <p className="text-sm text-muted-foreground">Detailed analytics and trends.</p>
      </TabsContent>
      <TabsContent value="reports" className="pt-4">
        <p className="text-sm text-muted-foreground">Generated reports and exports.</p>
      </TabsContent>
      <TabsContent value="exports" className="pt-4">
        <p className="text-sm text-muted-foreground">Export data in multiple formats.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="dashboard" className="w-[440px]">
      <TabsList>
        <TabsTrigger value="dashboard">
          <LayoutDashboardIcon />
          Dashboard
        </TabsTrigger>
        <TabsTrigger value="profile">
          <UserIcon />
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings2Icon />
          Settings
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <BellIcon />
          Alerts
        </TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard" className="p-4">
        <p className="text-sm text-muted-foreground">Your dashboard overview.</p>
      </TabsContent>
      <TabsContent value="profile" className="p-4">
        <p className="text-sm text-muted-foreground">Manage your profile.</p>
      </TabsContent>
      <TabsContent value="settings" className="p-4">
        <p className="text-sm text-muted-foreground">Application settings.</p>
      </TabsContent>
      <TabsContent value="notifications" className="p-4">
        <p className="text-sm text-muted-foreground">Your notification preferences.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const LineVariantWithIcons: Story = {
  render: () => (
    <Tabs defaultValue="dashboard" className="w-[440px]">
      <TabsList variant="line">
        <TabsTrigger value="dashboard">
          <LayoutDashboardIcon />
          Dashboard
        </TabsTrigger>
        <TabsTrigger value="profile">
          <UserIcon />
          Profile
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings2Icon />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="dashboard" className="pt-4">
        <p className="text-sm text-muted-foreground">Your dashboard overview.</p>
      </TabsContent>
      <TabsContent value="profile" className="pt-4">
        <p className="text-sm text-muted-foreground">Manage your profile.</p>
      </TabsContent>
      <TabsContent value="settings" className="pt-4">
        <p className="text-sm text-muted-foreground">Application settings.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="account" orientation="vertical" className="w-[500px]">
      <TabsList>
        <TabsTrigger value="account">
          <UserIcon />
          Account
        </TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">
          <BellIcon />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="settings">
          <Settings2Icon />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        <p className="text-sm text-muted-foreground">Account configuration.</p>
      </TabsContent>
      <TabsContent value="password" className="p-4">
        <p className="text-sm text-muted-foreground">Change your password.</p>
      </TabsContent>
      <TabsContent value="notifications" className="p-4">
        <p className="text-sm text-muted-foreground">Notification settings.</p>
      </TabsContent>
      <TabsContent value="settings" className="p-4">
        <p className="text-sm text-muted-foreground">General settings.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const VerticalLineVariant: Story = {
  render: () => (
    <Tabs defaultValue="account" orientation="vertical" className="w-[500px]">
      <TabsList variant="line">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4">
        <p className="text-sm text-muted-foreground">Account configuration.</p>
      </TabsContent>
      <TabsContent value="password" className="p-4">
        <p className="text-sm text-muted-foreground">Change your password.</p>
      </TabsContent>
      <TabsContent value="notifications" className="p-4">
        <p className="text-sm text-muted-foreground">Notification settings.</p>
      </TabsContent>
      <TabsContent value="settings" className="p-4">
        <p className="text-sm text-muted-foreground">General settings.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="p-4">
        <p className="text-sm text-muted-foreground">This tab is active and interactive.</p>
      </TabsContent>
      <TabsContent value="another" className="p-4">
        <p className="text-sm text-muted-foreground">Another tab content.</p>
      </TabsContent>
    </Tabs>
  ),
}

export const Interactive: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">First</TabsTrigger>
        <TabsTrigger value="tab2">Second</TabsTrigger>
        <TabsTrigger value="tab3">Third</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="p-4">
        <p className="text-sm">Content for the first tab.</p>
      </TabsContent>
      <TabsContent value="tab2" className="p-4">
        <p className="text-sm">Content for the second tab.</p>
      </TabsContent>
      <TabsContent value="tab3" className="p-4">
        <p className="text-sm">Content for the third tab.</p>
      </TabsContent>
    </Tabs>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const secondTab = canvas.getByRole('tab', { name: 'Second' })
    await userEvent.click(secondTab)
    await expect(secondTab).toHaveAttribute('data-state', 'active')
    await expect(canvas.getByText('Content for the second tab.')).toBeVisible()

    const thirdTab = canvas.getByRole('tab', { name: 'Third' })
    await userEvent.click(thirdTab)
    await expect(thirdTab).toHaveAttribute('data-state', 'active')
    await expect(canvas.getByText('Content for the third tab.')).toBeVisible()
  },
}
