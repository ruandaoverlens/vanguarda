import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";

const meta = {
  title: "Primitives/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "nuxt", label: "Nuxt" },
  { value: "angular", label: "Angular" },
];

export const Default: Story = {
  render: () => (
    <div className="w-[260px]">
      <Combobox>
        <ComboboxInput placeholder="Search frameworks..." />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxCollection>
              {frameworks.map((fw) => (
                <ComboboxItem key={fw.value} value={fw.value}>
                  {fw.label}
                </ComboboxItem>
              ))}
            </ComboboxCollection>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
};

export const WithClear: Story = {
  render: () => (
    <div className="w-[260px]">
      <Combobox defaultValue="next">
        <ComboboxInput placeholder="Search frameworks..." showClear />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxCollection>
              {frameworks.map((fw) => (
                <ComboboxItem key={fw.value} value={fw.value}>
                  {fw.label}
                </ComboboxItem>
              ))}
            </ComboboxCollection>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
};

export const WithGroups: Story = {
  render: () => {
    const grouped = {
      Frontend: [
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
        { value: "svelte", label: "Svelte" },
        { value: "angular", label: "Angular" },
      ],
      "Meta-frameworks": [
        { value: "next", label: "Next.js" },
        { value: "remix", label: "Remix" },
        { value: "astro", label: "Astro" },
        { value: "nuxt", label: "Nuxt" },
      ],
    };
    return (
      <div className="w-[260px]">
        <Combobox>
          <ComboboxInput placeholder="Select a framework..." />
          <ComboboxContent>
            <ComboboxList>
              <ComboboxCollection>
                {Object.entries(grouped).map(([group, items], i) => (
                  <React.Fragment key={group}>
                    {i > 0 && <ComboboxSeparator />}
                    <ComboboxGroup>
                      <ComboboxLabel>{group}</ComboboxLabel>
                      {items.map((item) => (
                        <ComboboxItem key={item.value} value={item.value}>
                          {item.label}
                        </ComboboxItem>
                      ))}
                    </ComboboxGroup>
                  </React.Fragment>
                ))}
              </ComboboxCollection>
              <ComboboxEmpty>No results found.</ComboboxEmpty>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="w-[260px] space-y-1.5">
      <Label htmlFor="framework-combobox">Framework</Label>
      <Combobox>
        <ComboboxInput
          id="framework-combobox"
          placeholder="Select framework..."
        />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxCollection>
              {frameworks.map((fw) => (
                <ComboboxItem key={fw.value} value={fw.value}>
                  {fw.label}
                </ComboboxItem>
              ))}
            </ComboboxCollection>
            <ComboboxEmpty>No framework found.</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
};

export const MultipleWithChips: Story = {
  render: () => {
    const anchorRef = useComboboxAnchor();
    return (
      <div className="w-[320px] space-y-1.5">
        <Label>Frameworks</Label>
        <Combobox multiple>
          <ComboboxChips ref={anchorRef}>
            <ComboboxChipsInput placeholder="Search..." />
          </ComboboxChips>
          <ComboboxContent anchor={anchorRef}>
            <ComboboxList>
              <ComboboxCollection>
                {frameworks.map((fw) => (
                  <ComboboxItem key={fw.value} value={fw.value}>
                    {fw.label}
                  </ComboboxItem>
                ))}
              </ComboboxCollection>
              <ComboboxEmpty>No framework found.</ComboboxEmpty>
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[260px]">
      <Combobox>
        <ComboboxInput placeholder="Disabled..." disabled />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxCollection>
              {frameworks.map((fw) => (
                <ComboboxItem key={fw.value} value={fw.value}>
                  {fw.label}
                </ComboboxItem>
              ))}
            </ComboboxCollection>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  ),
};
