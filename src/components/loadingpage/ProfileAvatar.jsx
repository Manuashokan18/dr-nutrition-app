export default function ProfileAvatar() {
    return (
      <a href="#" className="group block flex-shrink-0">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-28 w-28 rounded-t-xl"
              src="/static/profile-avatar.jpg"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-[#202A39] group-hover:text-gray-900 text-lg">Libin George</p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700 text-lg">Fitness Enthusiast</p>
          </div>
        </div>
      </a>
    )
  }
  