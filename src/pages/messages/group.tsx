export default function Messaging() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row h-screen bg-gray-100">
        {/* Sidebar for Chat List */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-white border-r border-gray-300 overflow-y-auto">
          <div className="p-4 border-b border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800">Chats</h2>
          </div>
          {/* Chat List */}
          <div className="p-4">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800">
                Group Messages
              </h1>
              <p className="text-gray-600 mt-2">
                You have ongoing conversations
              </p>
            </div>
            <div className="mb-4">
              <div className="p-2 border rounded-lg shadow hover:bg-gray-50 cursor-pointer">
                <p className="text-gray-800 font-semibold">John Doe</p>
                <p className="text-gray-600 text-sm">Hey, how are you?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col">
          <div className="bg-white p-4 border-b border-gray-300">
            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-600">Last seen 5 minutes ago</p>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat messages */}
            <div className="mb-4">
              <div className="bg-blue-100 p-3 rounded-lg max-w-md text-gray-800">
                Hi there!
              </div>
              <span className="text-xs text-gray-500">2:30 PM</span>
            </div>
            <div className="mb-4 text-right">
              <div className="bg-green-100 p-3 rounded-lg max-w-md text-gray-800 inline-block">
                Hello! How are you?
              </div>
              <span className="text-xs text-gray-500">2:31 PM</span>
            </div>
          </div>
          <div className="bg-white p-4 border-t border-gray-300">
            <div className="flex">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
