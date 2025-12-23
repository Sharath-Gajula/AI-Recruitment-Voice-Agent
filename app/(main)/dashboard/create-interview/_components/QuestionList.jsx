import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { Loader2, Loader2Icon } from 'lucide-react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import QuestionListContainer from './QuestionListContainer';
import { supabase } from '@/services/supabaseClient';
import { useUser } from '@/app/provider';
import { v4 as uuidv4 } from 'uuid';

function QuestionList({formData,onCreateLink}) {
  
  const [loading, setLoading] = useState(true);
  const [questionList, setQuestionList] = useState();
  const { user } = useUser();
  const [saveLoading, setSaveLoading] = useState(false);

  useEffect(() => {
    if (formData) {
      GenerateQuestionList();
    }
  }, [formData]);
  
  const onFinish = async () => {
    if (!formData || !questionList || !user?.email) {
      toast.error("Missing required data. Please ensure all fields are filled.");
      return;
    }
    setSaveLoading(true);
    const interview_id = uuidv4();
    const insertData = {
      ...formData,
      questionList: questionList,
      userEmail: user.email,
      interview_id: interview_id
    };

    console.log("Sending to Supabase:", insertData);

    const { data, error } = await supabase
      .from('interviews')
      .insert([insertData])
      .select();

      //update credits of a User    
      const userUpdate = await supabase
        .from('users')
        .update({ credits: Number(user?.credits)-1})
        .eq('email', 'email')
        .select();
      console.log(userUpdate);
          

    if (error) {
      console.error("Supabase insert error:", error);
      toast.error("Failed to create interview. Check console.");
      return;
    }
    
    setSaveLoading(false);
    // console.log("Inserted data:", data);
    toast.success("Interview saved successfully!");
    // for interview creation
    onCreateLink(interview_id);
  };

  const GenerateQuestionList = async () => {
    setLoading(true);
    try {
      const result = await axios.post('/api/ai-model', {
        ...formData
      });
      console.log("API data:", result.data);
      const Content = result.data.content;
      const FINAL_CONTENT = Content.replace("```json", "").replace("```", "");
      setQuestionList(JSON.parse(FINAL_CONTENT)?.interviewQuestions);
      setLoading(false);
    } catch (e) {
      toast('Server error. Try again later.');
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && (
        <div>
          <Loader2Icon className='animate-spin' />
          <div className='p-5 bg-blue-50 rounded-xl border border-primary flex gap-5 items-center'>
            <h2 className='font-medium'>Generating Interview Questions:</h2>
            <p className='text-primary'>Our AI is crafting personalized questions based on your job position</p>
          </div>
        </div>
      )}

      {questionList?.length > 0 && (
        <div>
          <QuestionListContainer questionList={questionList} />
        </div>
      )}

      <div className='flex justify-end mt-10'>
        <Button onClick={() => onFinish()} disabled = {saveLoading}>
          {saveLoading && <Loader2 className='animate-spin' />}
          Create Interview Link & Finish
          </Button>
      </div>
    </div>
  );
}

export default QuestionList;
