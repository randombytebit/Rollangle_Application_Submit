const URL = 'https://career.rollangle.com/cv-submit'
const facebookAnswer = "If my career is hackable, then the extremely fast pace of AI development should be the one of the biggest expoits which i can use it right now. Instead of seeing AI as a threadt that might replace junior developers. Probably treat it as a accelerator is better in the era and hack the timeline to learn faster."
const facebookExplanation = "As a fresh Computer Science graduate, I view the rapid rise of AI as a major opportunity to accelerate my career. While it may feel intimidating as it automates some tasks, I treat AI as a powerful accelerator. I use tools like GitHub Copilot and Claude daily to learn faster and ship ReactJS & full-stack projects quicker. This hackable career mindset helps me focus on high-value skills AI can't easily replace, like system design and understanding client needs. I'm confident this approach will help me grow stronger and deliver real value.";

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

        if (res.ok){
            console.log("Success");
            console.log(result);
        } else {
            console.error("Error submission");
        }
    } catch (e){
        console.error(e.message);
    }
}

applciationSubmission();