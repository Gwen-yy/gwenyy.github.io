// Through copilot change the image and text that originally appeared below the button to pop up a new page with the image and text-->

console.log("World Building Guide loaded.");

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleSystemBtn");
    const description = document.getElementById("systemDescription");
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");
    const step4 = document.getElementById("step4");

    const desc1 = document.getElementById("desc1");
    const desc2 = document.getElementById("desc2");
    const desc3 = document.getElementById("desc3");
    const desc4 = document.getElementById("desc4");

    if (step1) {
        step1.addEventListener("click", () => {
            desc1.style.display = "block";
            step2.style.display = "inline-block";
        });
    }

    if (step2) {
        step2.addEventListener("click", () => {
            desc2.style.display = "block";
            step3.style.display = "inline-block";
        });
    }

    if (step3) {
        step3.addEventListener("click", () => {
            desc3.style.display = "block";
            step4.style.display = "inline-block";
        });
    }

    if (step4) {
        step4.addEventListener("click", () => {
            desc4.style.display = "block";
        });
    }

    
    

});

window.showEffect = function(type) {
  const output = document.getElementById("effectOutput");
  const bar = document.getElementById("stabilityBar");

  let message = "";
  let value = 0;
  let color = "";

  switch (type) {
    case "neuro":
      message = "🧠 Switches quickly, adapts well, and behaves naturally. However, prone to blurring of personality boundaries and decreased long-term personality stability.";
      value = 80;
      color = "#81c784"; 
      break;
    case "hippocampus":
      message = "🧠 Memories are real and characters are immersed. However, it is easy to become attached to the personality and detached from reality.";
      value = 60;
      color = "#ffeb3b"; 
      break;
    case "emoreg":
      message = "⚠️ Emotions rebound, personality and behavioral disorders, and the risk of systemic collapse rises.";
      value = 20;
      color = "#e57373"; 
      break;
  }

  output.innerText = message;
  output.style.color = color; // from copilot
  bar.value = value;
  bar.style.setProperty('--bar-color', color);
  bar.style.backgroundColor = color;
};

window.selectAnswer = function(choice) {
  const feedback = document.getElementById("answer-feedback");
  if (choice === 'yes') {
    feedback.innerText = "✔️ You believe identity is unified, no matter the mode. Responsibility is continuous.";
  } else {
    feedback.innerText = "⚠️ You believe each persona carries its own weight — but that raises legal and ethical dilemmas.";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".narrative-btn");
  const contentBox = document.getElementById("narrative-content");

  const narratives = {
    work: `
      <p>They said the Personality Switching System was for me — my choice, my benefit. But somewhere along the line, it stopped being a choice.</p>
      <p>Last week, HR sent me a “schedule” — not of my meetings, but of which personalities I’m expected to run, hour by hour. 10 a.m. Negotiator mode for the client pitch. 1 p.m. Sales mode for the livestream. 4 p.m. Analyst mode for the quarterly report. They called it “optimizing productivity.” I call it outsourcing my self.</p>
      <p>Sometimes I wonder if they even see me anymore, or if they just see a series of profiles they can plug into their targets. The line between “I use the system” and “the system uses me” is thinner than I thought.</p>
    `,
    beyond: `
      <p>I used to think this tech was built for people like me — corporate workers, fast-paced jobs, constant context-switching. But lately I’ve seen it creeping into places it doesn’t belong.</p>
      <p>My friend Mia works in a community art center. She told me her manager hinted she’d be “more effective” if she uploaded the Social Connector personality. My cousin, a nurse, got a promotion — but only after installing the “Crisis Response” module.</p>
      <p>Maybe it started as a workplace tool, but it’s spilling into the rest of life. And when every role we play is optimized, I wonder: when do we stop working?</p>
    `,
    ownership: `
      <p>My father doesn’t understand the system. He says, “A person is whole, Lora. Not parts you can rent out to the highest bidder.” I laughed at first — it sounded old-fashioned. But then I remembered the last team meeting.</p>
      <p>My Negotiator persona closed a deal, my Sales persona handled the follow-up, my Emotional persona sent a thank-you note. Three versions of me did the work, but the paycheck went to one body. Which one of us earned it?</p>
      <p>Sometimes, I feel like I’m selling pieces of myself, one upload at a time. If a personality is just another asset, what stops the company from owning it?</p>
    `
  };

  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      contentBox.classList.remove("show");
      setTimeout(() => {
        contentBox.innerHTML = narratives[btn.dataset.target];
        contentBox.classList.add("show");
      }, 200);
    });
  });

  setTimeout(() => {
    contentBox.classList.add("show");
  }, 100);
});



