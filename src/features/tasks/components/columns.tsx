import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { activityTypes } from '../data/data'
import { Task } from '../data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Activity ID' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'cloneName',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Clone' />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex items-center space-x-2'>
          <div className='flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500'>
            <span className='text-xs font-semibold text-white'>
              {row.getValue<string>('cloneName').charAt(0)}
            </span>
          </div>
          <span className='font-medium'>{row.getValue('cloneName')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'userQuery',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='User Query' />
    ),
    cell: ({ row }) => {
      const activityType = activityTypes.find(
        (type) => type.value === row.original.activityType
      )

      return (
        <div className='flex space-x-2'>
          {activityType && (
            <Badge variant='outline'>{activityType.label}</Badge>
          )}
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('userQuery')}
          </span>
        </div>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
