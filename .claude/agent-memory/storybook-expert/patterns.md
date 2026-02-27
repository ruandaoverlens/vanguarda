# Storybook Patterns — Vanguarda

## Chart component pattern
ChartContainer requires a `config` of type `ChartConfig` and `children` typed as `ResponsiveContainer["children"]`.
Pass chart elements (BarChart, LineChart, etc.) directly as `children`. Use brand color tokens as CSS vars:
`color: "var(--color-brand-kobold)"` — then reference as `fill="var(--color-desktop)"` via the config.

## Combobox multi-select (chips) pattern
`useComboboxAnchor()` must be called inside the render function (it returns a React ref).
Pass `ref={anchorRef}` to `ComboboxChips` and `anchor={anchorRef}` to `ComboboxContent`.
The `Combobox` root must have `multiple` prop.

## Collapsible interaction test pattern
The collapsible trigger renders as `button` with the given aria-label.
After clicking, query `[data-slot='collapsible-content']` to verify content exists.

## Calendar date range pattern
Use `mode="range"` with `selected` typed as `{ from: Date | undefined; to?: Date }`.
For `mode="single"` with `defaultChecked` style behavior, use `defaultMonth` + `disabled` props.

## Command (cmdk) filter pattern
The Command component auto-filters items as the user types in CommandInput.
In interaction tests, `userEvent.type(input, "set")` will filter visible items automatically.

## Combobox vs Command
- Combobox: `@base-ui/react` backed, structured select with search. Use for form fields.
- Command: `cmdk` backed, palette/search UI. Use for global search and command launchers.

## shadcn Checkbox checked state
Radix `CheckboxPrimitive.Root` uses `checked` with value `true | false | "indeterminate"`.
For interaction tests, `onCheckedChange` receives `true` (not an event object).

## Storybook render functions with hooks
When a story's render function needs React hooks (useState, useEffect, custom hooks),
write the render as an inline arrow function — Storybook treats each render as a React component.
Never call hooks in the story `args` or `argTypes` objects.

## Sidebar layout pattern
Sidebar stories require `layout: 'fullscreen'` and must wrap with `SidebarProvider`.
Combine `Sidebar` + `SidebarInset` inside `SidebarProvider` for a full-page layout.
Use `collapsible="icon"` + `defaultOpen={false}` on `SidebarProvider` for collapsed state.
The `SidebarRail` clickable rail strip is added as the last child of `Sidebar`.

## Sheet interaction test pattern
Sheet opens via `SheetTrigger`. After clicking trigger, query the open title via
`within(document.body).findByText(...)` — the sheet content is portalled outside the canvas.

## ScrollBar for horizontal scrolling
ScrollArea only shows vertical scrollbar by default. To enable horizontal scrolling,
import `ScrollBar` separately and add `<ScrollBar orientation="horizontal" />` as a sibling
inside the `ScrollArea` component (it renders inside the Root, outside Viewport).

## Slider interaction test pattern
Slider renders as `role="slider"`. Use `slider.focus()` then `userEvent.keyboard('{ArrowRight}')`
to test value changes via keyboard. Do not use `onValueChange: fn()` as Storybook cannot
serialize the Slider's complex value prop alongside it without extra render work.
