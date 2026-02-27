import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const meta = {
  title: "Primitives/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This is the main content of the card. Add any content here.
        </p>
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Subscription Plan</CardTitle>
        <CardDescription>You are on the free plan.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Upgrade to unlock unlimited projects, priority support, and advanced analytics.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="default" size="sm">Upgrade</Button>
        <Button variant="ghost" size="sm">Learn more</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage your notification preferences.</CardDescription>
        <CardAction>
          <Badge variant="secondary">3 new</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          You have 3 unread notifications waiting for your attention.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Complete: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardHeader>
        <CardTitle>Project Summary</CardTitle>
        <CardDescription>Overview of the Vanguarda project.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">Edit</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Status</span>
            <Badge>Active</Badge>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Components</span>
            <span>56</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Last updated</span>
            <span>Today</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <Card className="w-[360px]">
      <CardContent>
        <p className="text-sm text-muted-foreground">
          A card with content only, no header or footer. Useful for simple data display.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {["Analytics", "Users", "Revenue"].map((title, i) => (
        <Card key={title}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Monthly overview</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{(i + 1) * 1234}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
