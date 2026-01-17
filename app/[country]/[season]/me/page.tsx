"use client";

import { use, useState } from "react";
import Link from "next/link";

type PageProps = {
  params: Promise<{ country: string; season: string }>;
};

export default function MyProfilePage({ params }: PageProps) {
  const { country, season } = use(params);
  
  // Mock user data
  const [profileVisibility] = useState<"Public" | "Community" | "Private">("Community");
  const [collectionVisibility] = useState<"Public" | "Community" | "Private">("Community");
  
  const mockUser = {
    name: "Alex N.",
    username: "alexn",
    level: "Active",
    country: "Norway",
    joinDate: "December 2025",
    cardsOwned: 12,
    totalActivated: 12,
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            My Collector Profile
          </h1>
          <Link
            href={`/${country}/${season}/collectors`}
            className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
          >
            ← Back to Collectors
          </Link>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
          Manage your collector profile, privacy settings, and digital card collection
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Profile Card */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8">
            <div className="mb-6 flex items-start gap-6">
              {/* Avatar */}
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-neutral-800 text-3xl font-bold text-neutral-300">
                {mockUser.name.charAt(0)}
              </div>
              
              {/* Profile Info */}
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">{mockUser.name}</h2>
                  <p className="text-sm text-neutral-400">@{mockUser.username}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                  <div>
                    <p className="text-xs text-neutral-500">Level</p>
                    <p className="mt-1 font-semibold text-neutral-200">{mockUser.level}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Country</p>
                    <p className="mt-1 font-semibold text-neutral-200">{mockUser.country}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Cards</p>
                    <p className="mt-1 font-semibold text-neutral-200">{mockUser.cardsOwned}</p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Joined</p>
                    <p className="mt-1 font-semibold text-neutral-200">{mockUser.joinDate}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-300">
                    {country.toUpperCase()}
                  </span>
                  <span className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs font-medium text-neutral-300">
                    {season}
                  </span>
                  <span className="rounded-full border border-green-900/50 bg-green-950/30 px-3 py-1 text-xs font-medium text-green-400">
                    {mockUser.totalActivated} Activated
                  </span>
                </div>
              </div>
            </div>

            <div className="h-px bg-neutral-800"></div>

            {/* Quick Actions */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Link
                href={`/${country}/${season}/me/collection`}
                className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-900/60"
              >
                <div className="mb-2 text-2xl">📚</div>
                <h3 className="font-semibold text-white">My Collection</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  View your digital card binder
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  {mockUser.cardsOwned} cards owned
                </p>
              </Link>

              <Link
                href={`/${country}/${season}/me/privacy`}
                className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 transition-all hover:border-neutral-700 hover:bg-neutral-900/60"
              >
                <div className="mb-2 text-2xl">🔒</div>
                <h3 className="font-semibold text-white">Privacy Settings</h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Control who can see your profile
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  Currently: {profileVisibility}
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Community Visibility */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
            <h3 className="mb-4 text-sm font-medium text-neutral-400">
              Community Visibility
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-neutral-800/50 bg-neutral-900/40 p-3">
                <span className="text-sm text-neutral-300">Profile</span>
                <span className="rounded-full bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-300">
                  {profileVisibility}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-neutral-800/50 bg-neutral-900/40 p-3">
                <span className="text-sm text-neutral-300">Collection</span>
                <span className="rounded-full bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-300">
                  {collectionVisibility}
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
            <h3 className="mb-4 text-sm font-medium text-neutral-400">
              Season Stats
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-neutral-500">Collection Progress</p>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-900">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500"
                    style={{ width: "48%" }}
                  />
                </div>
                <p className="mt-1 text-xs text-neutral-500">12 / 25 unique cards</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500">Community Rank</p>
                <p className="mt-1 text-2xl font-bold text-white">#42</p>
                <p className="text-xs text-neutral-500">out of 156 collectors</p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="rounded-lg border border-neutral-800/50 bg-neutral-950/40 p-4">
            <p className="text-xs text-neutral-500">
              <span className="font-medium text-neutral-400">Demo Profile</span> —
              Data is session-only. Production will include real user data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
