import type { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

const meta = {
  title: 'Primitives/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleType: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Vanguarda?</AccordionTrigger>
        <AccordionContent>
          Vanguarda is a modern fullstack web application built with Next.js, TypeScript, and Supabase.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Which design system does it use?</AccordionTrigger>
        <AccordionContent>
          It uses shadcn/ui with Radix UI primitives and a custom Tailwind CSS 4 token system.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it open source?</AccordionTrigger>
        <AccordionContent>
          The project is currently in a greenfield phase and not yet publicly released.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleType: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Frontend stack</AccordionTrigger>
        <AccordionContent>
          Next.js App Router, React, TypeScript, Tailwind CSS 4, shadcn/ui.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Backend stack</AccordionTrigger>
        <AccordionContent>
          Supabase (PostgreSQL, Auth, Storage) as the single BaaS layer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Tooling</AccordionTrigger>
        <AccordionContent>
          Node.js v25, npm 11, ESLint, Prettier, and Storybook 8 for component development.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultExpanded: Story = {
  args: {
    type: 'single',
    defaultValue: 'item-1',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>This item starts expanded</AccordionTrigger>
        <AccordionContent>
          The accordion opens with this item already visible because{' '}
          <code>defaultValue="item-1"</code> was passed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second item</AccordionTrigger>
        <AccordionContent>
          Click to expand this item and collapse the first one.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const ManyItems: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => (
    <Accordion {...args} className="w-full max-w-md">
      {Array.from({ length: 6 }, (_, i) => (
        <AccordionItem key={i} value={`item-${i + 1}`}>
          <AccordionTrigger>Section {i + 1}</AccordionTrigger>
          <AccordionContent>
            Content for section {i + 1}. This demonstrates how the accordion handles many items stacked together.
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ),
};
