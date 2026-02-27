import type { Meta, StoryObj } from '@storybook/react'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable'

const meta = {
  title: 'Primitives/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof ResizablePanelGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel A</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel B</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const WithHandle: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel A</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Panel B</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const ThreePanels: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-xl rounded-lg border"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="font-semibold">Main Content</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="font-semibold">Details</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="vertical"
      className="min-h-[400px] max-w-sm rounded-lg border"
    >
      <ResizablePanel defaultSize={33}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Top</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={67}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Bottom</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const NestedPanels: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[400px] max-w-2xl rounded-lg border"
    >
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="bg-muted/30 flex h-full items-center justify-center p-4">
          <span className="font-semibold">Navigation</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="font-semibold">Editor</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={30} minSize={10}>
            <div className="bg-muted/30 flex h-full items-center justify-center p-4">
              <span className="font-semibold">Terminal</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const WithMinMaxSizes: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-xl rounded-lg border"
    >
      <ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
        <div className="flex h-full flex-col items-center justify-center gap-1 p-4">
          <span className="font-semibold">Constrained</span>
          <span className="text-muted-foreground text-xs">20%–50% width</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
        <div className="flex h-full items-center justify-center p-4">
          <span className="font-semibold">Flexible</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const CodeEditorLayout: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[480px] w-full max-w-4xl rounded-lg border"
    >
      <ResizablePanel defaultSize={20} minSize={10} maxSize={30}>
        <div className="bg-muted/20 flex h-full flex-col">
          <div className="border-b px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Explorer
          </div>
          <div className="flex flex-1 flex-col gap-0.5 p-2">
            {['src/', 'components/', 'pages/', 'styles/', 'utils/'].map((item) => (
              <div
                key={item}
                className="hover:bg-accent rounded px-2 py-1 text-xs cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={55}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full flex-col">
              <div className="border-b px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Editor
              </div>
              <div className="flex-1 p-4">
                <pre className="text-xs text-muted-foreground font-mono">
                  {`// Component code here\nexport function MyComponent() {\n  return <div>Hello</div>\n}`}
                </pre>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={25} minSize={10}>
            <div className="bg-muted/20 flex h-full flex-col">
              <div className="border-b px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Terminal
              </div>
              <div className="p-3">
                <span className="text-xs font-mono text-muted-foreground">$ npm run dev</span>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-full flex-col">
          <div className="border-b px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Preview
          </div>
          <div className="flex flex-1 items-center justify-center p-4">
            <span className="text-sm text-muted-foreground">Live preview</span>
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
  parameters: { layout: 'fullscreen' },
}
