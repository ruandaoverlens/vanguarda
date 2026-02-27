import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const meta = {
  title: 'Primitives/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A semantic HTML table built with composable primitives: `Table`, `TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell`, and `TableCaption`. Supports hover states, selected rows, and overflow scrolling.',
      },
    },
  },
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const invoices = [
  { id: 'INV-001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { id: 'INV-002', status: 'Pending', method: 'Bank Transfer', amount: '$150.00' },
  { id: 'INV-003', status: 'Unpaid', method: 'PayPal', amount: '$350.00' },
  { id: 'INV-004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
  { id: 'INV-005', status: 'Pending', method: 'Bank Transfer', amount: '$550.00' },
]

const statusVariant: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
  Paid: 'default',
  Pending: 'secondary',
  Unpaid: 'destructive',
}

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payment method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,750.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const WithBadgeStatus: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payment method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">{invoice.id}</TableCell>
            <TableCell>
              <Badge variant={statusVariant[invoice.status]}>{invoice.status}</Badge>
            </TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithoutCaption: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { name: 'Alice Martin', email: 'alice@example.com', role: 'Admin' },
          { name: 'Bob Smith', email: 'bob@example.com', role: 'Editor' },
          { name: 'Carol White', email: 'carol@example.com', role: 'Viewer' },
        ].map((user) => (
          <TableRow key={user.email}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Unit price</TableHead>
          <TableHead className="text-right">Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          { product: 'Widget A', qty: 3, price: '$10.00', total: '$30.00' },
          { product: 'Widget B', qty: 1, price: '$25.00', total: '$25.00' },
          { product: 'Widget C', qty: 5, price: '$8.00', total: '$40.00' },
        ].map((row) => (
          <TableRow key={row.product}>
            <TableCell>{row.product}</TableCell>
            <TableCell>{row.qty}</TableCell>
            <TableCell className="text-right">{row.price}</TableCell>
            <TableCell className="text-right">{row.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Order total</TableCell>
          <TableCell className="text-right">$95.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}

export const ManyColumns: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div className="p-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>First name</TableHead>
            <TableHead>Last name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Start date</TableHead>
            <TableHead className="text-right">Salary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[
            { id: '001', first: 'Alice', last: 'Martin', email: 'alice@co.com', dept: 'Engineering', location: 'Remote', start: '2022-01-10', salary: '$120,000' },
            { id: '002', first: 'Bob', last: 'Smith', email: 'bob@co.com', dept: 'Design', location: 'New York', start: '2021-06-15', salary: '$110,000' },
            { id: '003', first: 'Carol', last: 'White', email: 'carol@co.com', dept: 'Marketing', location: 'London', start: '2023-03-01', salary: '$95,000' },
          ].map((row) => (
            <TableRow key={row.id}>
              <TableCell className="font-mono text-xs">{row.id}</TableCell>
              <TableCell>{row.first}</TableCell>
              <TableCell>{row.last}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.dept}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.start}</TableCell>
              <TableCell className="text-right">{row.salary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
}
