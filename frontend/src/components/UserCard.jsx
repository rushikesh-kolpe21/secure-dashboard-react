
import React from "react";


const getInitials = (name = "") =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const UserCard = ({ user }) => {
  const website = user?.website?.startsWith("http")
    ? user.website
    : `https://${user.website}`;

  return (
    <article
      className="max-w-sm w-full bg-white rounded-2xl shadow-md overflow-hidden
                 transform transition duration-300 hover:scale-[1.015] hover:shadow-2xl
                 ring-1 ring-transparent focus-within:ring-blue-300"
      tabIndex={0}
      aria-label={`User card for ${user.name}`}
    >
      {/* top header */}
      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        {/* avatar */}
        <div
          className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center
                     bg-gradient-to-br from-white/20 to-white/10 text-xl font-bold"
          aria-hidden="true"
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))",
              backdropFilter: "blur(2px)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
              }}
            >
              {getInitials(user.name)}
            </div>
          </div>
        </div>

        {/* name + company */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-tight">{user.name}</h3>
          <p className="text-sm opacity-90">{user.username}</p>
        </div>

        {/* id badge */}
        <div className="text-right">
          <p className="text-xs opacity-80">ID</p>
          <div className="mt-1 inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
            #{user.id}
          </div>
        </div>
      </div>

      {/* body */}
      <div className="p-4 space-y-3">
        {/* company */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Company</p>
          <p className="text-sm font-medium text-gray-800">{user.company?.name}</p>
          {user.company?.catchPhrase && (
            <p className="text-xs text-gray-500 mt-1 italic">{user.company.catchPhrase}</p>
          )}
        </div>

        {/* contact grid */}
        <div className="grid grid-cols-1 gap-2 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <a
              href={`mailto:${user.email}`}
              className="text-gray-700 hover:text-blue-600 break-words"
            >
              {user.email}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M2 7a1 1 0 011-1h3l2 3 3-2 5 5-2 3 3 2v3a1 1 0 01-1 1h-1C7 21 2 16 2 7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a className="text-gray-700 hover:text-blue-600" href={`tel:${user.phone}`}>
              {user.phone}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
            <span className="text-gray-700">
              {user.address?.street}, {user.address?.suite}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M12 3v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M12 18v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M4 12h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M17 12h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="text-gray-700">{user.address?.city} — {user.address?.zipcode}</span>
          </div>

          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M21 12a9 9 0 11-9-9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
          </div>
        </div>
      </div>

      {/* footer actions */}
      <div className="px-4 py-3 border-t flex items-center justify-between gap-3">
        <button
          className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
          onClick={() => window.open(`mailto:${user.email}`)}
        >
          Message
        </button>

        <button
          className="flex-1 bg-white text-gray-700 border border-gray-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition"
          onClick={() => window.open(`https://${user.website}`, "_blank")}
        >
          Visit
        </button>
      </div>
    </article>
  );
}
