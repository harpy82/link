import React from 'react';
import { ProfileData } from '../types';

interface ProfileHeaderProps {
  profile: ProfileData;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8 pt-8">
      <div className="relative mb-4">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg ring-2 ring-slate-100">
          <img 
            src={profile.avatarUrl} 
            alt={`${profile.name} 프로필`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full" title="접속 중"></div>
      </div>
      <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
        {profile.name}
      </h1>
      <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xs px-4 leading-relaxed">
        {profile.bio}
      </p>
    </div>
  );
};