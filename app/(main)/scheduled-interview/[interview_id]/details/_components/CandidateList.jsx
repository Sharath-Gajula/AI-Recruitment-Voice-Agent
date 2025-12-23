import moment from 'moment';
import React from 'react';
import { Button } from '@/components/ui/button';
import CandidateFeedbackDialoge from './CandidateFeedbackDialoge';


function CandidateList({ candidateList }) {
  const safeList = candidateList ?? [];

  return (
    <div className='space-y-4'>
      <h2 className='font-bold my-5'>Candidates ({safeList.length})</h2>
      {safeList.map((candidate, index) => (
        <div key={index} className='p-5 flex gap-3 items-center justify-between bg-white rounded-lg shadow-sm'>
          <div className='flex items-center gap-5'>
           <h2 className='bg-primary p-3 px-5 font-bold text-white rounded-full '>{candidate?.userName?.[0] ?? ''}</h2>
            <div>
                <h2 className='font-bold'>{candidate?.userName}</h2>
                <h2 className='text-sm text-gray-500 '> Completed On:{moment(candidate?.created_at).format('MMM DD, yyyy')}</h2>
            </div>
          </div>
           <div className='flex gap-2 items-center'>
            <h2 className='text-green-600'>8/10</h2>
             {/* <Button variant='outline' className='text-primary'>View Report</Button> */}
             {/* in stead of above button we wrap the entire file which it contains a dialog box */}
             <CandidateFeedbackDialoge candidate={candidate}/>
           </div>
        </div>
      ))}
    </div>
  );
}

export default CandidateList;
