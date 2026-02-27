import type { Meta, StoryObj } from '@storybook/react'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const meta = {
  title: 'Primitives/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Vanguarda
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      A modern full-stack web application built with Next.js.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                  >
                    <div className="text-sm font-medium leading-none">Introduction</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      Overview of the design system and components.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs/installation"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                  >
                    <div className="text-sm font-medium leading-none">Installation</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      How to install and configure the project.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/docs/typography"
                    className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                  >
                    <div className="text-sm font-medium leading-none">Typography</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                      Font families, sizes, and weights used in the project.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {[
                { title: 'Button', href: '/docs/button', description: 'Displays a button or a component that looks like a button.' },
                { title: 'Input', href: '/docs/input', description: 'Displays a form input field.' },
                { title: 'Select', href: '/docs/select', description: 'Displays a list of options for the user to pick from.' },
                { title: 'Dialog', href: '/docs/dialog', description: 'A window overlaid on either the primary window.' },
                { title: 'Card', href: '/docs/card', description: 'Displays a card with header, content, and footer.' },
                { title: 'Badge', href: '/docs/badge', description: 'Displays a badge or a component that looks like a badge.' },
              ].map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                    >
                      <div className="text-sm font-medium leading-none">{item.title}</div>
                      <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {item.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href="/docs"
          >
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  parameters: { layout: 'padded' },
}

export const SimpleLinks: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/dashboard">
            Dashboard
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/settings">
            Settings
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/docs">
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  parameters: { layout: 'padded' },
}

export const WithSingleDropdown: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-4 w-[220px]">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/products/analytics"
                    className="hover:bg-accent hover:text-accent-foreground block select-none rounded-md p-2 text-sm no-underline outline-none transition-colors"
                  >
                    Analytics
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/products/automation"
                    className="hover:bg-accent hover:text-accent-foreground block select-none rounded-md p-2 text-sm no-underline outline-none transition-colors"
                  >
                    Automation
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/products/reporting"
                    className="hover:bg-accent hover:text-accent-foreground block select-none rounded-md p-2 text-sm no-underline outline-none transition-colors"
                  >
                    Reporting
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/contact">
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  parameters: { layout: 'padded' },
}

export const WithoutViewport: Story = {
  render: () => (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 p-3 w-[200px]">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/profile"
                    className="hover:bg-accent block select-none rounded-md p-2 text-sm no-underline outline-none transition-colors"
                  >
                    Profile
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/settings"
                    className="hover:bg-accent block select-none rounded-md p-2 text-sm no-underline outline-none transition-colors"
                  >
                    Settings
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="/logout"
                    className="hover:bg-accent block select-none rounded-md p-2 text-sm no-underline outline-none transition-colors"
                  >
                    Log out
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
  parameters: { layout: 'padded' },
}
