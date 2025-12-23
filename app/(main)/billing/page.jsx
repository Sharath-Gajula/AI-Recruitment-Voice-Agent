"use client"
import { useUser } from '@/app/provider'
import { Button } from '@/components/ui/button';
import { CreditCard, Plus } from 'lucide-react'
import React from 'react'

function Billing() {
  const { user } = useUser();

  return (
    <div>
      <h2 className='font-medium text-3xl'>Billing</h2>
      <p className='text-gray-400'>Manage your payment and credits</p>

      {/* Flex container instead of grid */}
      <div className="flex flex-col lg:flex-row gap-4 mt-5 min-h-[400px]">

        {/* Your Credits Card */}
        <div className='bg-white shadow-sm rounded-xl p-5 w-full lg:max-w-sm'>
          <h2 className='font-semibold'>Your Credits</h2>
          <p className='text-sm text-gray-400'>Current usage and remaining credits</p>

          <div className='mt-5 rounded-xl border border-gray-200 p-4 flex items-center gap-3'>
            <div className="p-2 bg-blue-100 rounded-full">
              <CreditCard className='h-7 w-7 text-primary' />
            </div>
            <span className='font-bold text-2xl text-primary'>
              {user?.credits} interviews left
            </span>
          </div>

          <div className='mt-5'>
            <Button className='bg-blue-600 text-white w-full h-[38px] rounded-xl'>
              <Plus className="mr-2 h-5 w-5" /> Add More Credits
            </Button>
          </div>
        </div>

        {/* Purchase Credits Card */}
        <div className='bg-white shadow-sm rounded-xl p-5 flex-1'>
          <h2 className='font-semibold'>Purchase Credits</h2>
          <p className='text-sm text-gray-400'>Add more interview credits to your account</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
            {/* Basic Plan */}
            <div className="border rounded-xl p-5 bg-white hover:shadow-md transition">
              <h2 className="font-semibold text-lg">Basic</h2>
              <div className="mt-4">
                <h2 className="font-bold text-2xl">$5</h2>
                <p className="text-sm text-gray-500">20 interviews</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="text-blue-600">• Basic interview templates</li>
                <li className="text-blue-600">• Email support</li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md">
                Purchase Credits
              </button>
            </div>

            {/* Standard Plan */}
            <div className="border rounded-xl p-5 bg-blue-200 hover:shadow-md transition">
              <h2 className="font-semibold text-lg">Standard</h2>
              <div className="mt-4">
                <h2 className="font-bold text-2xl">$12</h2>
                <p className="text-sm text-gray-500">50 interviews</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="text-blue-600">• All interview templates</li>
                <li className="text-blue-600">• Priority support</li>
                <li className="text-blue-600">• Basic analytics</li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md">
                Purchase Credits
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border rounded-xl p-5 bg-white hover:shadow-md transition">
              <h2 className="font-semibold text-lg">Pro</h2>
              <div className="mt-4">
                <h2 className="font-bold text-2xl">$25</h2>
                <p className="text-sm text-gray-500">120 interviews</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="text-blue-600">• All interview templates</li>
                <li className="text-blue-600">• 24/7 support</li>
                <li className="text-blue-600">• Advanced analytics</li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md">
                Purchase Credits
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;
