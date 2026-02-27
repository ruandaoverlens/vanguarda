import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

const meta = {
  title: 'Primitives/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Radix UI',
  'shadcn/ui',
  'React',
  'Storybook',
  'Vite',
  'ESLint',
  'Prettier',
  'Zod',
  'React Hook Form',
  'Supabase',
  'PostgreSQL',
  'Vercel',
  'GitHub',
  'VS Code',
  'Figma',
  'Lucide',
  'clsx',
]

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }, (_, i) => (
          <figure key={i} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <div className="bg-muted h-24 w-24 rounded-md flex items-center justify-center text-muted-foreground text-xs">
                {i + 1}
              </div>
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Image {i + 1}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export const BothAxes: Story = {
  render: () => (
    <ScrollArea className="h-72 w-96 rounded-md border">
      <div className="p-4" style={{ width: '600px' }}>
        <h4 className="mb-4 text-sm font-medium leading-none">
          Wide and Tall Content
        </h4>
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="mb-2 text-sm whitespace-nowrap">
            Row {i + 1}: This is a very long line of text that extends well
            beyond the viewport width to demonstrate horizontal scrolling.
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}

export const WithLongText: Story = {
  render: () => (
    <ScrollArea className="h-48 w-72 rounded-md border p-4">
      <p className="text-sm text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
        error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit.
      </p>
    </ScrollArea>
  ),
}
