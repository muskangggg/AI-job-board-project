import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
  const navigate = useNavigate();
  

  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>2 Days Ago</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
      </div>

      <div>
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg" />

          </Avatar>
        </Button>
        
        <div>
          <h1 className='font-medium text-lg'>{job?.companyName}</h1>
          <p className='text-sm text-gray-700'>{job?.location}</p>
        </div>
      </div>
        <div>
          <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
          <p className='text-sm text-gray-600'>{job?.description}</p>
          
        </div>
        <div>
        <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="text-blue-700 font-semibold border-blue-200 bg-blue-50 hover:bg-blue-100" variant="outline">
        {`${job?.position} Positions`}
        </Badge>
        <Badge className="text-[#F83002] font-semibold border-[#F83002]/20 bg-[#F83002]/10 hover:bg-[#F83002]/20" variant="outline">
        {job?.jobType}
        </Badge>
        <Badge className="text-[#7209B7] font-semibold border-[#7209B7]/20 bg-[#7209B7]/10 hover:bg-[#7209B7]/20" variant="outline">
        {`${job?.salary}LPA`}
        </Badge>
      </div>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <Button onClick={() => navigate(`/description/${job?._id}`)}  variant="outline">Details</Button>
            <Button className="bg-[#7209B7]">Save for later</Button>
          </div>
    </div>
  )
}

export default Job