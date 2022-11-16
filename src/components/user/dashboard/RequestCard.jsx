import React from 'react'

const RequestCard = () => {
  return (
    <div>
      <div className="border border-1-solid rounded-[12px] p-5 w-[300px]">
        <div className="flex flex-row items-center justify-between">
          <button type="button" className="text-[#fff] bg-[#17a2b8] px-2 rounded-[8px] py-1">Request Item</button>
          <button type="button" className="bg-[#A03] text-[#fff] px-2 rounded-[8px] py-1 ">View All</button>
        </div>
      </div>
    </div>
  )
}

export default RequestCard