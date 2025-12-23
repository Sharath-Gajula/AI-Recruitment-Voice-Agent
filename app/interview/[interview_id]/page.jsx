"use client";
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { Clock, Video, Info, Loader2Icon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useParams } from 'next/navigation';
import { supabase } from '@/services/supabaseClient';
import { InterviewDataContext } from '@/context/InterviewDataContext';
import { useRouter } from 'next/navigation'; // ✅ Correct



function Interview() {
  const { interview_id } = useParams();
  console.log(interview_id);
  
  const [interviewData,setInterviewData] = useState()
  const [userName,setUserName] = useState();
  const[userEmail,setUserEmail] = useState();
  const [loading,setLoading] = useState(false);
// const [interviewInfo,setInterviewInfo] = useContext(InterviewDataContext)
  const { setInterviewInfo } = useContext(InterviewDataContext);

  const router = useRouter();
  
  //when ever you have interview id on that time call  GetInterviewDetails
    useEffect(()=>{
        interview_id && GetInterviewDetails();
    },[interview_id]) 


    //get interview details from supabase  
    const GetInterviewDetails = async  ()=>{
        setLoading(true);
        try{
            let { data: interviews, error } = await supabase
            .from('interviews')
            .select("jobPosition,jobDescription, interviewDuration, type")
            .eq('interview_id', interview_id)
            setInterviewData(interviews[0])
            // console.log(interviews);

            setLoading(false);
            if(interviews?.length == 0){
                toast('Incorrect Interview Link');
                return;
            }
        }
        catch(e){
            setLoading(false);
            toast('Incorrect Interview Link')
        }
    }

    const onJoinInterview = async ()=>{
        let { data: interviews, error } = await supabase
        .from('interviews')
        .select("*")
        .eq('interview_id',interview_id)
       
        console.log(interviews[0]);
        //setInterviewInfo(interviews[0])
        setInterviewInfo({
          userName: userName,
          userEmail: userEmail,
          interviewData : interviews[0]
        })
        router.push('/interview/' + interview_id + '/start'); // ✅ Correct

    }

  return (
    <div className='px-10 md:px-28 lg:px-48 xl:px-64 mt-16'>
      <div className='flex flex-col items-center justify-center border rounded-lg bg-white p-7 lg:px-33 xl:px-52 mb-20'>
        <Image src={'/logo.png'} alt='logo' width={100} height={100} className='w-[140px]' />
        <h2 className='mt-3'>AI-Powered Interview Platform</h2>

        <Image src={'/interview.png'} alt='interview' width={500} height={500} className='w-[280px] my-6' />

        <h2 className='font-bold text-xl'>{interviewData?.jobPosition}</h2>
        <h2 className='flex gap-2 items-center text-gray-500 mt-3'>
          <Clock className='h-4 w-4' /> {interviewData?.interviewDuration}
        </h2>

        <div className='w-full'>
          <h2 className='font-medium ml-2'>Enter your full name</h2>
          <Input placeholder='e.g. John Smith' className='mt-2'
          onChange = {(event)=>setUserName(event.target.value)} />
        </div>

        <div className='w-full mt-2'>
          <h2 className='font-medium ml-2'>Enter your Email</h2>
          <Input placeholder='e.g. JohnSmith@gmail.com' className='mt-2'
          onChange = {(event)=>setUserEmail(event.target.value)} />
        </div>

        <div className="p-4 bg-blue-100 rounded-lg mt-6 flex items-start gap-3">
          <Info className="text-blue-600 mt-1" />
          <div>
            <h2 className="font-bold mb-2">Before you begin</h2>
            <ul className="list-disc list-inside space-y-1 text-blue-600 text-sm">
              <li>Test your camera and microphone</li>
              <li>Ensure you have a stable internet connection</li>
              <li>Find a quiet place for interview</li>
            </ul>
          </div>
        </div>

        <Button
        className='mt-5 w-full font-bold'
        disabled={loading || !userName}
        onClick={onJoinInterview} // <-- Move it here
        >
        <Video className='mr-2' />
        {loading && <Loader2Icon />}
        Join Interview
        </Button>

      </div>
    </div>
  );
}

export default Interview;
