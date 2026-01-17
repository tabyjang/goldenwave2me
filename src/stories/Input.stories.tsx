import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-[300px] gap-2">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const WithValue: Story = {
  args: {
    type: "text",
    defaultValue: "Pre-filled value",
  },
  decorators: [
    (Story) => (
      <div className="w-[300px]">
        <Story />
      </div>
    ),
  ],
}

export const Invalid: Story = {
  render: () => (
    <div className="grid w-[300px] gap-2">
      <Label htmlFor="invalid-email">Email</Label>
      <Input
        type="email"
        id="invalid-email"
        placeholder="Enter email"
        aria-invalid="true"
        defaultValue="invalid-email"
      />
      <p className="text-sm text-destructive">Please enter a valid email</p>
    </div>
  ),
}

export const File: Story = {
  render: () => (
    <div className="grid w-[300px] gap-2">
      <Label htmlFor="file">Upload file</Label>
      <Input type="file" id="file" />
    </div>
  ),
}

export const AllTypes: Story = {
  render: () => (
    <div className="grid w-[300px] gap-4">
      <div className="grid gap-2">
        <Label>Text</Label>
        <Input type="text" placeholder="Text input" />
      </div>
      <div className="grid gap-2">
        <Label>Email</Label>
        <Input type="email" placeholder="email@example.com" />
      </div>
      <div className="grid gap-2">
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </div>
      <div className="grid gap-2">
        <Label>Number</Label>
        <Input type="number" placeholder="0" />
      </div>
      <div className="grid gap-2">
        <Label>Search</Label>
        <Input type="search" placeholder="Search..." />
      </div>
    </div>
  ),
}
