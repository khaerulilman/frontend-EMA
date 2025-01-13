interface ClassSchedule {
  day: string;
  instructor: string;
  time: string;
  studentCount: number;
}

interface MyClass extends ClassSchedule {
  startSubscription: string;
  endSubscription: string;
}

const myClassData: MyClass[] = [
  {
    day: "Monday",
    instructor: "John Smith",
    time: "9:00 AM",
    studentCount: 25,
    startSubscription: "2024-01-20",
    endSubscription: "2025-01-20",
  },
  {
    day: "Wednesday",
    instructor: "Mike Wilson",
    time: "10:00 AM",
    studentCount: 30,
    startSubscription: "2024-03-10",
    endSubscription: "2025-03-10",
  },
];

const classScheduleData: ClassSchedule[] = [
  {
    day: "Monday",
    instructor: "John Smith",
    time: "9:00 AM",
    studentCount: 25,
  },
  {
    day: "Tuesday",
    instructor: "Sarah Johnson",
    time: "9:00 AM",
    studentCount: 18,
  },
  {
    day: "Wednesday",
    instructor: "Mike Wilson",
    time: "10:00 AM",
    studentCount: 30,
  },
  {
    day: "Thursday",
    instructor: "Emily Brown",
    time: "11:00 AM",
    studentCount: 22,
  },
  {
    day: "Friday",
    instructor: "David Lee",
    time: "12:00 PM",
    studentCount: 28,
  },
  {
    day: "Saturday",
    instructor: "Jessica Clark",
    time: "1:00 PM",
    studentCount: 35,
  },
];

export default function MyClass() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">My Classes</h1>
        <p className="text-gray-600 mt-2">
          Your enrolled classes and subscription details
        </p>
      </div>

      {/* My Class Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-8">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Day
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Instructor
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Time
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Student Count
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Start Subscription
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                End Subscription
              </th>
            </tr>
          </thead>
          <tbody>
            {myClassData.map((schedule, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-6 py-4 text-sm text-gray-700">
                  {schedule.day}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {schedule.instructor}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {schedule.time}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {schedule.studentCount}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {schedule.startSubscription}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {schedule.endSubscription}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-800 mt-2 mb-2">
          Classes Schedule
        </h1>
      </div>

      {/* Class Schedule Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Day
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Instructor
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Time
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Student Count
              </th>
            </tr>
          </thead>
          <tbody>
            {classScheduleData.map((schedule, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="px-6 py-4 text-sm text-gray-700">
                  {schedule.day}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {schedule.instructor}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {schedule.time}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {schedule.studentCount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
