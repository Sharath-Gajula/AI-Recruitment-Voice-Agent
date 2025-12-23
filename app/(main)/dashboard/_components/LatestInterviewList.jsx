"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';
import { useUser } from '@/app/provider';
import { supabase } from '@/services/supabaseClient';
import InterviewCard from './InterviewCard';
import { toast } from 'sonner';

function LatestInterviewList() {
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
      .order('id', { ascending: false })
      .limit(6);

    if (error) {
      console.error('Error fetching interviews:', error);
    } else {
      console.log(interviews);
      setInterviewList(interviews);
    }
  };

  return (
    <div className='my-5'>
      <h2 className='font-bold text-2xl'>Previously Created Interviews</h2>

      {interviewList.length === 0 ? (
        <div className='p-5 flex flex-col gap-3 items-center mt-5 bg-white rounded'>
          <Video className='h-10 w-10 text-primary' />
          <h2>You don’t have any interview created!</h2>
          <Button>+ Create New Interview</Button>
        </div>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
        {interviewList.map((interview, index) => (
          <InterviewCard interview={interview} key={index} />
        ))}
      </div>

      )}
    </div>
  );
}

export default LatestInterviewList;
