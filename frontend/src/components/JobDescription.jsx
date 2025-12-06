import { Badge } from './ui/badge'
import React from 'react'
import { Button } from './ui/button'

const JobDescription = () => {
    const isApplied = false;
  return (
    
    <div className='max-w-7xl mx-auto my-10'>
        <div className='flex items-center justify-between'>
        <div>
       <h1 className='font-bold text-xl'>Fronend Developer</h1>
        <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="text-blue-700 font-semibold border-blue-200 bg-blue-50 hover:bg-blue-100" variant="outline">
          12 Positions
        </Badge>
        <Badge className="text-[#F83002] font-semibold border-[#F83002]/20 bg-[#F83002]/10 hover:bg-[#F83002]/20" variant="outline">
          Part Time
        </Badge>
        <Badge className="text-[#7209B7] font-semibold border-[#7209B7]/20 bg-[#7209B7]/10 hover:bg-[#7209B7]/20" variant="outline">
          24LPA
        </Badge>
      </div>
       </div>
      <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209B7] hover:bg-[#5f32ad]'}`}>{ isApplied ? 'Already Applied' : 'Apply Now'}</Button>
        </div>
        <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
       <div>
<h1 className='font-bold my-4'>Role: <span className='py-4 font-normal text-gray-800'>Frontend Developer</span></h1>
<h1 className='font-bold my-4'>Location: <span className='py-4 font-normal text-gray-800'>Chittagong</span></h1>
<h1 className='font-bold my-4'>Description: <span className='py-4 font-normal text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, deleniti?</span></h1>
<h1 className='font-bold my-4'>Experience: <span className='py-4 font-normal text-gray-800'>2 Years</span></h1>
<h1 className='font-bold my-4'>Salary: <span className='py-4 font-normal text-gray-800'>12LPA</span></h1>
<h1 className='font-bold my-4'>Total Applicants: <span className='py-4 font-normal text-gray-800'>4</span></h1>
<h1 className='font-bold my-4'>Post Date: <span className='py-4 font-normal text-gray-800'>23-11-2025</span></h1>


       </div>
    </div>
  )
}

export default JobDescription