import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div className="p-4">
      <Table className="border-separate [border-spacing:0_0.75rem] w-full">
        <TableCaption>A List of Your Applied Jobs</TableCaption>

        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[1, 2, 3, 4].map((item, index) => (
            <TableRow
              key={index}
              className="bg-white shadow-sm hover:shadow-md transition-shadow rounded-lg"
            >
              <TableCell>11.11.2024</TableCell>
              <TableCell>Frontend Developer</TableCell>
              <TableCell>Google</TableCell>
              <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
