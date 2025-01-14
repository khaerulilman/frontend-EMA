const quizData = [
  {
    id: 1,
    title: "Mathematics Midterm Review",
    duration: "45 minutes",
    questions: 30,
    expiresIn: "2 days",
    subject: "Mathematics",
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    duration: "60 minutes",
    questions: 40,
    expiresIn: "1 day",
    subject: "Physics",
  },
  {
    id: 3,
    title: "Chemistry Basics",
    duration: "30 minutes",
    questions: 20,
    expiresIn: "3 days",
    subject: "Chemistry",
  },
];

export default function LimitedQuiz() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Limited Time Quiz</h1>
        <p className="text-gray-600 mt-2">
          Complete these quizzes before they expire
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quizData.map((quiz) => (
          <QuizCard key={quiz.id} {...quiz} />
        ))}
      </div>
    </div>
  );
}

interface QuizCardProps {
  id: number;
  title: string;
  duration: string;
  questions: number;
  expiresIn: string;
  subject: string;
}

function QuizCard({
  title,
  duration,
  questions,
  expiresIn,
  subject,
}: QuizCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          {subject}
        </span>
        <span className="text-red-600 text-sm font-medium">
          Expires in {expiresIn}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <span className="mr-4">{duration}</span>
        <span>{questions} Questions</span>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        Start Quiz
      </button>
    </div>
  );
}
