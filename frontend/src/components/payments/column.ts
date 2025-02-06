import type { ColumnDef } from '@tanstack/vue-table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

import { h } from 'vue'
import { ArrowUpDown } from 'lucide-vue-next'

export const columns: ColumnDef<Payment>[] = [
    {
        id: 'select',
        header: ({ table }) => h(Checkbox, {
          'checked': table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate'),
          'onUpdate:checked': value => table.toggleAllPageRowsSelected(!!value),
          'ariaLabel': 'Select all',
        }),
        cell: ({ row }) => h(Checkbox, {
          'checked': row.getIsSelected(),
          'onUpdate:checked': value => row.toggleSelected(!!value),
          'ariaLabel': 'Select row',
        }),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('status')),
      },
      {
        accessorKey: 'email',
        header: ({ column }) => {
          return h(Button, {
            variant: 'ghost',
            onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
          }, () => ['Email', h(ArrowUpDown, { class: 'ml-2 h-4 w-4' })])
        },
        cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email')),
      },
      {
        accessorKey: 'amount',
        header: () => h('div', { class: 'text-right' }, 'Amount'),
        cell: ({ row }) => {
          const amount = Number.parseFloat(row.getValue('amount'))
    
          // Format the amount as a dollar amount
          const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(amount)
    
          return h('div', { class: 'text-right font-medium' }, formatted)
        },
      },
]

export interface Payment {
    id: string
    amount: number
    status: 'pending' | 'processing' | 'success' | 'failed'
    email: string
  }