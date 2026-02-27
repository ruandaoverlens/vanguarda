import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "storybook/test";
import { ChevronsUpDown, Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const meta = {
  title: "Primitives/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @radix-ui/colors
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Installed packages</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        {["react", "next", "tailwindcss", "typescript"].map((pkg) => (
          <div
            key={pkg}
            className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm"
          >
            {pkg}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const FAQ: Story = {
  render: () => {
    const faqs = [
      {
        question: "What is Vanguarda?",
        answer:
          "Vanguarda is a modern fullstack web application built with Next.js, Supabase, and Tailwind CSS.",
      },
      {
        question: "How do I get started?",
        answer:
          "Clone the repository, install dependencies with npm install, and run npm run dev to start the development server.",
      },
      {
        question: "What design system is used?",
        answer:
          "Vanguarda uses shadcn/ui built on Radix UI primitives with custom design tokens in oklch color format.",
      },
    ];
    return (
      <div className="w-[400px] space-y-2">
        {faqs.map((faq, i) => (
          <Collapsible key={i}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between font-medium"
              >
                {faq.question}
                <Plus className="size-4 transition-transform duration-200 [[data-state=open]_&]:rotate-45" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="px-4 pt-1 pb-3 text-sm text-muted-foreground">
                {faq.answer}
              </p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    );
  },
};

export const WithInteraction: Story = {
  render: () => (
    <Collapsible className="w-[350px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Expandable section</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" aria-label="toggle section">
            <ChevronsUpDown className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <p className="px-4 text-sm text-muted-foreground">
          This content is revealed when the trigger is clicked.
        </p>
      </CollapsibleContent>
    </Collapsible>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /toggle section/i });
    await expect(trigger).toBeInTheDocument();
    await userEvent.click(trigger);
    const content = canvasElement.querySelector("[data-slot='collapsible-content']");
    await expect(content).toBeInTheDocument();
  },
};
