"use client";

import { use, useState } from "react";
import Link from "next/link";

type PageProps = {
  params: Promise<{ country: string; season: string }>;
};

type VisibilityOption = "Public" | "Community" | "Private";

export default function PrivacySettingsPage({ params }: PageProps) {
  const { country, season } = use(params);
  
  const [profileVisibility, setProfileVisibility] = useState<VisibilityOption>("Community");
  const [collectionVisibility, setCollectionVisibility] = useState<VisibilityOption>("Community");
  const [showActivityFeed, setShowActivityFeed] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const visibilityOptions: { value: VisibilityOption; label: string; description: string }[] = [
    {
      value: "Public",
      label: "Public",
      description: "Visible to everyone, including non-members"
    },
    {
      value: "Community",
      label: "Community",
      description: "Visible to ICONZ community members only"
    },
    {
      value: "Private",
      label: "Private",
      description: "Only visible to you"
    }
  ];

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      {/* Header */}
      <div className="mb-12 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Privacy Settings
          </h1>
          <Link
            href={`/${country}/${season}/me`}
            className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
          >
            ← Back to Profile
          </Link>
        </div>
        <p className="max-w-2xl text-base leading-relaxed text-neutral-300">
          Control who can see your profile, collection, and activity
        </p>
      </div>

      <div className="space-y-8">
        {/* Profile Visibility */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Profile Visibility
          </h2>
          <p className="mb-6 text-sm text-neutral-400">
            Choose who can view your collector profile and basic information
          </p>
          
          <div className="space-y-3">
            {visibilityOptions.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-colors ${
                  profileVisibility === option.value
                    ? "border-neutral-600 bg-neutral-900/60"
                    : "border-neutral-800 bg-neutral-950/40 hover:border-neutral-700"
                }`}
              >
                <input
                  type="radio"
                  name="profileVisibility"
                  value={option.value}
                  checked={profileVisibility === option.value}
                  onChange={(e) => setProfileVisibility(e.target.value as VisibilityOption)}
                  className="mt-1 h-4 w-4 accent-neutral-500"
                />
                <div className="flex-1">
                  <p className="font-medium text-white">{option.label}</p>
                  <p className="mt-1 text-sm text-neutral-400">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Collection Visibility */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Collection Visibility
          </h2>
          <p className="mb-6 text-sm text-neutral-400">
            Choose who can view your digital card collection and binder
          </p>
          
          <div className="space-y-3">
            {visibilityOptions.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition-colors ${
                  collectionVisibility === option.value
                    ? "border-neutral-600 bg-neutral-900/60"
                    : "border-neutral-800 bg-neutral-950/40 hover:border-neutral-700"
                }`}
              >
                <input
                  type="radio"
                  name="collectionVisibility"
                  value={option.value}
                  checked={collectionVisibility === option.value}
                  onChange={(e) => setCollectionVisibility(e.target.value as VisibilityOption)}
                  className="mt-1 h-4 w-4 accent-neutral-500"
                />
                <div className="flex-1">
                  <p className="font-medium text-white">{option.label}</p>
                  <p className="mt-1 text-sm text-neutral-400">{option.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-8">
          <h2 className="mb-4 text-xl font-semibold text-white">
            Activity Feed
          </h2>
          <p className="mb-6 text-sm text-neutral-400">
            Show your collection activity in the community feed
          </p>
          
          <label className="flex cursor-pointer items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950/40 p-4 transition-colors hover:border-neutral-700">
            <div>
              <p className="font-medium text-white">Show Activity</p>
              <p className="mt-1 text-sm text-neutral-400">
                Display when you activate or burn cards
              </p>
            </div>
            <input
              type="checkbox"
              checked={showActivityFeed}
              onChange={(e) => setShowActivityFeed(e.target.checked)}
              className="h-5 w-5 accent-neutral-500"
            />
          </label>
        </div>

        {/* Save Button */}
        <div className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950/60 p-6">
          <div>
            <p className="text-sm text-neutral-300">
              Changes are saved automatically in this demo
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Production will save to your account
            </p>
          </div>
          <button
            onClick={handleSave}
            className={`rounded-lg border px-6 py-3 font-medium transition-colors ${
              saved
                ? "border-green-900/50 bg-green-950/40 text-green-400"
                : "border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700"
            }`}
          >
            {saved ? "✓ Saved" : "Save Changes"}
          </button>
        </div>

        {/* Info Note */}
        <div className="rounded-lg border border-neutral-800/50 bg-neutral-950/40 p-4">
          <p className="text-xs text-neutral-500">
            <span className="font-medium text-neutral-400">Privacy Demo</span> —
            Settings are stored in component state only. Production will include persistent privacy controls.
          </p>
        </div>
      </div>
    </div>
  );
}
