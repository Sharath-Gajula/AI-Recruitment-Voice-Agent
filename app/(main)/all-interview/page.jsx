"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';
import { useUser } from '@/app/provider';
import { supabase } from '@/services/supabaseClient';
import InterviewCard from '../dashboard/_components/InterviewCard';

function AllInterview() {
  const [interviewList, setInterviewList] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      GetInterviewList();
    }
  }, [user]);

  const GetInterviewList = async () => {
    const { data: interviews, error } = await supabase
      .from('interviews')
      .select('*')
      .eq('userEmail', user?.email)
      .order('id', { ascending: false });
 

    if (error) {
      console.error('Error fetching interviews:', error);
    } else {
      setInterviewList(interviews);
    }
  };

  return (
    <div className='my-5 px-4'>
      <h2 className='font-bold text-2xl'>All Previously Created Interviews</h2>

      {interviewList.length === 0 ? (
        <div className='p-5 flex flex-col gap-3 items-center mt-5 bg-white rounded shadow'>
          <Video className='h-10 w-10 text-primary' />
          <h2>You don’t have any interview created!</h2>
          <Button className='mt-2'>+ Create New Interview</Button>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
          {interviewList.map((interview, index) => (
            <InterviewCard key={index} interview={interview} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllInterview;
