const questions = [
    {
      verse: "In the beginning God created the heaven and the earth.",
      correct: "Genesis 1:1",
      options: ["Genesis 1:1", "John 1:1", "Psalm 24:1", "Romans 1:20"]
    },
    {
      verse: "For God so loved the world, that he gave his only begotten Son...",
      correct: "John 3:16",
      options: ["John 3:16", "1 John 4:9", "Romans 5:8", "Matthew 1:21"]
    },
    {
      verse: "The LORD is my shepherd; I shall not want.",
      correct: "Psalm 23:1",
      options: ["Psalm 23:1", "John 10:11", "Ezekiel 34:11", "Matthew 6:33"]
    },
    {
      verse: "I can do all things through Christ which strengtheneth me.",
      correct: "Philippians 4:13",
      options: ["Philippians 4:13", "2 Timothy 1:7", "Romans 8:37", "Hebrews 12:1"]
    },
    {
      verse: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.",
      correct: "Proverbs 3:5",
      options: ["Proverbs 3:5", "Psalm 37:5", "Isaiah 26:4", "Jeremiah 29:11"]
    },
    {
      verse: "But they that wait upon the LORD shall renew their strength...",
      correct: "Isaiah 40:31",
      options: ["Isaiah 40:31", "Psalm 27:14", "Exodus 15:2", "Lamentations 3:25"]
    },
    {
      verse: "Jesus wept.",
      correct: "John 11:35",
      options: ["John 11:35", "Luke 19:41", "Hebrews 5:7", "Matthew 26:38"]
    },
    {
      verse: "For all have sinned, and come short of the glory of God;",
      correct: "Romans 3:23",
      options: ["Romans 3:23", "1 John 1:8", "Ecclesiastes 7:20", "Galatians 3:22"]
    },
    {
      verse: "Thy word is a lamp unto my feet, and a light unto my path.",
      correct: "Psalm 119:105",
      options: ["Psalm 119:105", "Proverbs 6:23", "John 1:5", "Matthew 5:14"]
    },
    {
      verse: "Be strong and of a good courage; fear not, nor be afraid of them...",
      correct: "Deuteronomy 31:6",
      options: ["Deuteronomy 31:6", "Joshua 1:9", "Isaiah 41:10", "2 Chronicles 20:17"]
    },
    {
        verse: "And if men come unto me I will show unto them their weakness.",
        correct: "Ether 12:27",
        options: ["Ether 12:27", "2 Nephi 2:11", "Mosiah 4:30", "Moroni 7:33"]
      },
      {
        verse: "Adam fell that men might be; and men are, that they might have joy.",
        correct: "2 Nephi 2:25",
        options: ["2 Nephi 2:25", "Alma 12:24", "Moses 5:11", "Mosiah 3:19"]
      },
      {
        verse: "When ye are in the service of your fellow beings ye are only in the service of your God.",
        correct: "Mosiah 2:17",
        options: ["Mosiah 2:17", "Mosiah 4:27", "Alma 5:19", "3 Nephi 13:24"]
      },
      {
        verse: "Charity is the pure love of Christ, and it endureth forever...",
        correct: "Moroni 7:47",
        options: ["Moroni 7:47", "2 Nephi 26:30", "Mosiah 18:9", "Alma 37:6"]
      },
      {
        verse: "And now, as ye have begun to teach the word even so I would that ye should continue to teach...",
        correct: "Alma 37:6",
        options: ["Alma 37:6", "Alma 13:3", "Mosiah 23:18", "Jacob 2:18"]
      }
    
  ];

let shuffledQuestions = []
console.log(shuffledQuestions); 
let currentQuestion = 0;
let score = 0;

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function startGame() {
    shuffledQuestions = shuffle(questions);
    console.log(shuffledQuestions); 
    score = 0;
    currentQuestion = 0;
    document.getElementById('score').textContent = score;
    showQuestion();
}

function showQuestion() {
  const q = shuffledQuestions[currentQuestion];
  document.getElementById('verse-text').textContent = q.verse;

  // Shuffle answer choices
  const shuffled = q.options.sort(() => 0.5 - Math.random());

  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = ''; // clear previous options

  shuffled.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    choicesDiv.appendChild(btn);
  });

  document.getElementById('feedback').textContent = '';
}

function checkAnswer(selected) {
  const correct = shuffledQuestions[currentQuestion].correct;
  const feedback = document.getElementById('feedback');

  if (selected === correct) {
    score++;
    feedback.textContent = "Correct!";
  } else {
    feedback.textContent = `Incorrect. The right answer was ${correct}`;
  }

  document.getElementById('score').textContent = score;

  // Move to next question after a short delay
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      document.getElementById('verse-text').textContent = "Game Over!";
      document.getElementById('choices').innerHTML = '';
      feedback.textContent = `Final score: ${score}/${questions.length}`;
    }
  }, 1500);
}