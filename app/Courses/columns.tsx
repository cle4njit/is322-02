'use client'

import { ColumnDef } from '@tanstack/react-table'

import { MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export type User = {
 
  Courseid: string
  inviteLink?: string
  
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'Courseid',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          CourseID
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      )
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const user = row.original
      const inviteLink = user.inviteLink;
      return (
        <Button 
         onClick = {() => {
          if (inviteLink) {
            navigator.clipboard.writeText(inviteLink.toString());
          }
         }}
        variant='outline' className='ml-auto'>Copy Invite Link</Button>
      )
    }
  }
]