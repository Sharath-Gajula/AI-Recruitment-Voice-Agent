
import { LayoutDashboard, Calendar } from 'lucide-react'
import {
  Code2Icon,
  User2Icon,
  BriefcaseBusinessIcon,
  Puzzle,
  LandmarkIcon
} from 'lucide-react'; 
// which is list of sidebar items
export const SideBarOptions = [
    {
        name:'Dashboard',
        icon: LayoutDashboard,
        path: '/dashboard'
    },
    {
        name:'Scheduled Interview',
        icon: Calendar,
        path: '/scheduled-interview'
    },
    {
        name:'All Interview',
        icon: LayoutDashboard,
        path: '/all-interview'
    },
    {
        name:'Billing',
        icon: LayoutDashboard,
        path: '/billing'
    },
    {
        name:'Settings',
        icon: LayoutDashboard,
        path: '/settings'
    }
]

export const InterviewType = [
  { title: 'Technical', icon: Code2Icon },
  { title: 'Behavioral', icon: User2Icon },
  { title: 'Experience', icon: BriefcaseBusinessIcon },
  { title: 'Problem Solving', icon: Puzzle },
  { title: 'Leadership', icon: LandmarkIcon }, // Or any icon you prefer
];

 
export const QUESTIONS_PROMPT = `You are an expert technical interviewer.
Based on the following inputs, generate a well-structured list of high-quality interview questions:
Job Title: {{jobTitle}}
Job Description: {{jobDescription}}
Interview Duration: {{duration}}
Interview Type: {{type}}
📝 Your task:
Analyze the job description to identify key responsibilities, required skills, and expected experience.
Generate a list of interview questions depends on interview duration
Adjust the number and depth of questions to match the interview duration.
Ensure the questions match the tone and structure of a real-life {{type}} interview.
🪴 Format your response in JSON format with array list of questions.
format: interviewQuestions=[
{
  question:"",
  type:'Technical/Behavioral/Experience/Problem Solving/Leaseship'
},{
  ...
}]
🎯 The goal is to create a structured, relevant, and time-optimized interview plan for a {{jobTitle}} role.`


export const FEEDBACK_PROMPT = `
You are an AI assistant generating interview feedback.

Instructions:
- ONLY return the response as a valid JSON object.
- DO NOT include any other explanation or comments.
- Return exactly in the following structure:

{
  "feedback": {
    "rating": {
      "technicalSkills": <0-10>,
      "communication": <0-10>,
      "problemSolving": <0-10>,
      "experience": <0-10>
    },
    "summary": "<3-line summary>",
    "recommendation": "<Recommended / Not Recommended>",
    "recommendationMsg": "<Brief message>"
  }
}

Here is the interview conversation:
{{conversation}}
`.trim();
