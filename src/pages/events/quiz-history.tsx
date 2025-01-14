const historyData = [
  {
    id: 1,
    quizName: "Mathematics Midterm Review",
    subject: "Mathematics",
    dateTaken: "2024-01-10",
    score: 85,
    timeSpent: "40 minutes",
    status: "Passed",
  },
  {
    id: 2,
    quizName: "Physics Fundamentals",
    subject: "Physics",
    dateTaken: "2024-01-08",
    score: 92,
    timeSpent: "55 minutes",
    status: "Passed",
  },
  {
    id: 3,
    quizName: "Chemistry Basics",
    subject: "Chemistry",
    dateTaken: "2024-01-05",
    score: 78,
    timeSpent: "28 minutes",
    status: "Failed",
  },
];

export default function QuizHistory() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Quiz History</h1>
        <p className="text-gray-600 mt-2">
          View your past quiz attempts and results
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quiz Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date Taken
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {historyData.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {item.quizName}
                    </div>
                    <div className="text-sm text-gray-500">{item.subject}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.dateTaken}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.score}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.timeSpent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          item.status === "Passed"
                            ? "bg-green-100 text-green-800"
                            : item.status === "Failed"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
