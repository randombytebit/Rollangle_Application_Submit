const URL = 'https://career.rollangle.com/cv-submit'
const facebookAnswer = "If my career is hackable, then the extremely fast pace of AI development should be the one of the biggest expoits which i can use it right now. Instead of seeing AI as a threadt that might replace junior developers. Probably treat it as a accelerator is better in the era and hack the timeline to learn faster."
const facebookExplanation = ""

const applicationData = {
    "name": "Wong Sin Ngai",
    "email": "cs.lwong4@gmail.com",
    "position": "Full-Stack Web Developer / Web Application Engineer",
    "cv_url": "https://drive.google.com/file/d/12uuYQ_FU9RvX-BPLLxSjAwsIkWkX66Jq/view?usp=sharing",
    "answer": facebookAnswer,
    "explanation": facebookExplanation,
    "code_url": "https://github.com/randombytebit/Rollangle_Application_Submit"
}

async function applciationSubmission(){
    try{
        const res = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applicationData)
        });
        const result = await res.json();
    } catch (e){
        console.error(e.message);
    }
}

applciationSubmission();