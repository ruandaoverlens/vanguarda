# Storybook Expert — Agent Memory

## Story Coverage

### Completed story files (co-located in `src/components/ui/`)
- `accordion.stories.tsx` — done (SingleType, MultipleType, DefaultExpanded, ManyItems)
- `alert.stories.tsx` — done (Default, Destructive, DefaultWithIcon, DestructiveWithIcon, WithoutTitle, AllVariants)
- `alert-dialog.stories.tsx` — done (Default, Destructive, SmallSize, WithMedia)
- `aspect-ratio.stories.tsx` — done (Ratio16x9, Ratio4x3, Ratio1x1, Ratio21x9, AllRatios, WithImage)
- `avatar.stories.tsx` — done (WithImage, WithFallbackInitials, WithFallbackIcon, AllSizes, WithBadge, Group, GroupLarge, FallbackOnly)
- `badge.stories.tsx` — done (Default, Secondary, Destructive, Outline, Ghost, Link, AllVariants, WithIcon, StatusLabels, AsLink)
- `breadcrumb.stories.tsx` — done (Simple, ThreeLevels, WithEllipsis, WithHomeIcon, WithCustomSeparator, DeepNavigation)
- `button.stories.tsx` — done (13 stories incl. WithClickHandler + DisabledPreventClick interaction tests)
- `button-group.stories.tsx` — done (Default, TextAlignment, TextFormatting, Vertical, WithSeparator, WithInputPrefix/Suffix/AndButton, MixedContent, Sizes)
- `calendar.stories.tsx` — done (Default, WithSelectedDate, DateRange, MultipleMonths, DropdownCaption, WithWeekNumbers, DisabledDates, HideOutsideDays)
- `card.stories.tsx` — done (Default, WithFooter, WithAction, Complete, ContentOnly, Grid)
- `carousel.stories.tsx` — done (Default, MultipleItems, Vertical, WithLoop)
- `chart.stories.tsx` — done (BarChart, LineChart, WithLegend, TooltipIndicators)
- `checkbox.stories.tsx` — done (Default, Checked, Indeterminate, Disabled, DisabledChecked, WithLabel, WithLabelAndDescription, CheckboxGroup, Controlled, WithInteraction)
- `collapsible.stories.tsx` — done (Default, DefaultOpen, FAQ, WithInteraction)
- `combobox.stories.tsx` — done (Default, WithClear, WithGroups, WithLabel, MultipleWithChips, Disabled)
- `command.stories.tsx` — done (Default, WithShortcuts, EmptyState, AsDialog, WithInteraction)
- `native-select.stories.tsx` — done (Default, Small, WithDefaultSelected, Disabled, WithOptGroups, WithPlaceholder, AllSizes)
- `navigation-menu.stories.tsx` — done (Default, SimpleLinks, WithSingleDropdown, WithoutViewport)
- `pagination.stories.tsx` — done (Default, WithEllipsis, FirstPage, LastPage, FewPages, LargeSizeLinks)
- `popover.stories.tsx` — done (Default, WithForm, WithInfoTrigger, AlignStart, AlignEnd, SideTop, DatePicker, Controlled)
- `progress.stories.tsx` — done (Default, Empty, OneThird, TwoThirds, Complete, AllValues, WithLabel, Indeterminate, CustomHeight)
- `radio-group.stories.tsx` — done (Default, NoDefault, Disabled, SingleItemDisabled, Horizontal, WithDescriptions, AsFormField)
- `resizable.stories.tsx` — done (Default, WithHandle, ThreePanels, Vertical, NestedPanels, WithMinMaxSizes, CodeEditorLayout)
- `scroll-area.stories.tsx` — done (Vertical, Horizontal, BothAxes, WithLongText)
- `select.stories.tsx` — done (Default, WithGroupsAndLabels, WithDisabledItems, Disabled, SmallSize, WithDefaultValue, AllSizes)
- `separator.stories.tsx` — done (Horizontal, Vertical, InCard, Decorative, Semantic)
- `sheet.stories.tsx` — done (Default, FromRight, FromLeft, FromTop, FromBottom, AllSides, WithoutCloseButton) — interaction test on Default
- `sidebar.stories.tsx` — done (Default, WithSearch, WithSubMenu, LoadingState, Collapsed, MultipleGroups) — fullscreen layout, uses SidebarProvider wrapping
- `skeleton.stories.tsx` — done (Default, TextLines, Avatar, Card, UserCard, Table, StatCard, Shapes)
- `slider.stories.tsx` — done (Default, WithValue, Range, WithStep, Disabled, Vertical, CustomRange, InteractionTest)
- `sonner.stories.tsx` — done (Default, Success, Error, Warning, Info, Loading, WithAction, AllTypes) — Toaster added via decorator; `toast` imported from `sonner`
- `spinner.stories.tsx` — done (Default, Small, Medium, Large, ExtraLarge, AllSizes, WithColor, InlineWithText) — size via `className` (SVG component)
- `switch.stories.tsx` — done (Default, Checked, SmallSize, SmallChecked, Disabled, DisabledChecked, WithLabel, WithLabelChecked, AllSizes, SettingsGroup, Interactive)
- `table.stories.tsx` — done (Default, WithBadgeStatus, WithoutCaption, WithFooter, ManyColumns) — `layout: "padded"`
- `tabs.stories.tsx` — done (Default, LineVariant, WithIcons, LineVariantWithIcons, Vertical, VerticalLineVariant, WithDisabled, Interactive) — covers default/line variants and horizontal/vertical orientations
- `textarea.stories.tsx` — done (Default, WithValue, Disabled, DisabledWithValue, Invalid, WithLabel, WithLabelAndHelperText, WithCharacterCount, Interactive)
- `toggle.stories.tsx` — done (Default, Outline, Pressed, Disabled, IconOnly, IconWithLabel, AllVariants, AllSizes, AllSizesOutline, TextFormattingGroup, AlignmentGroup, Interactive)
- `toggle-group.stories.tsx` — done (SingleSelection, MultipleSelection, OutlineVariant, WithLabels, SmallSize, LargeSize, WithSpacing, AllSizes, Interactive) — `type="single"` items use role `radio` in interaction test
- `tooltip.stories.tsx` — done (Default, OnIconButton, TopSide, RightSide, BottomSide, LeftSide, AllPositions, WithHelperIcon, IconToolbar, OnDisabledButton) — `TooltipProvider` applied as story-level decorator
- `hover-card.stories.tsx` — done (Default, RichContent, AlignStart, AlignEnd, UserProfile)
- `input.stories.tsx` — done (Default, WithLabel, Disabled, ErrorState, AllTypes, States, WithIcon)
- `input-group.stories.tsx` — done (Default, WithPrefixText, WithSuffixText, WithPrefixIcon, WithSuffixButton, WithBothAddons, SearchWithKbd, WithCopyButton, WithAtSign, WithBlockAddon, ErrorState, AllVariants)
- `input-otp.stories.tsx` — done (Default, WithSeparator, FourDigit, SixDigitWithLabel, Disabled, TwoGroups, WithInteraction)
- `item.stories.tsx` — done (Default, AllVariants, Sizes, WithIconMedia, WithActions, WithBadge, WithHeader, WithFooter, GroupWithSeparators, SmallList) — full sub-component set covered
- `kbd.stories.tsx` — done (Default, SingleKeys, CommonShortcuts, WithIconKey, InlineWithText, KeyboardNavigationShortcuts, KbdGroupVariants)
- `label.stories.tsx` — done (Default, WithInput, Required, WithCheckbox, WithSwitch, WithRadioGroup, DisabledPeer, FormGroup)
- `menubar.stories.tsx` — done (Default, WithCheckboxItems, WithRadioItems, WithSubmenu, WithDestructiveItem, FullApplicationMenubar, WithGroupedItems)
- `context-menu.stories.tsx` — done (Default, WithSubmenus, WithCheckboxItems, WithRadioItems, WithGroups, WithDisabledItems, FullFeatured)
- `dialog.stories.tsx` — done (Default, WithForm, DestructiveAction, WithoutCloseButton, LongContent, FooterWithCloseButton) — `showCloseButton` prop on DialogContent + DialogFooter
- `direction.stories.tsx` — done (LeftToRight, RightToLeft, UsingDirectionAlias) — DirectionProvider; `direction` prop alias takes precedence over `dir`
- `drawer.stories.tsx` — done (Default, FromBottom, FromRight, FromLeft, FromTop, WithForm, WithScrollableContent) — Vaul; `direction` prop; bottom drawer auto-renders drag handle
- `dropdown-menu.stories.tsx` — done (Default, WithGroups, WithCheckboxItems, WithRadioItems, WithSubmenus, WithDisabledItems, WithCallbackItems) — interaction test on Default
- `empty.stories.tsx` — done (Default, WithIconMedia, WithAction, SearchEmpty, WithDefaultMedia, TeamEmpty, CartEmpty, WithoutBorder, Compact) — EmptyMedia variant `icon` vs `default`
- `field.stories.tsx` — done (Default, WithDescription, WithError, WithMultipleErrors, HorizontalOrientation, VerticalGroup, WithFieldSet, WithSeparator, WithSwitch, WithRadioGroup, WithCheckbox, FullFormLayout) — orientation: vertical|horizontal|responsive
- `form.stories.tsx` — done (Login, Profile, NotificationPreferences, Registration, WithValidationErrors) — react-hook-form + zod + zodResolver; zod v4 compatible

See `patterns.md` for reusable story patterns.

## Key Decisions
- All stories co-located next to component files in `src/components/ui/`
- Title hierarchy: `Primitives/<ComponentName>` for all `ui/` components
- `layout: "centered"` for small/atomic components; `"padded"` for larger compositions
