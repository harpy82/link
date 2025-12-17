import React from 'react';
import { LinkItemData } from '../types';
import { 
  Github, 
  Instagram, 
  Youtube, 
  Mail, 
  Briefcase, 
  PenTool, 
  MessageCircle, 
  ExternalLink,
  Globe
} from 'lucide-react';

interface LinkCardProps {
  link: LinkItemData;
}

// Icon mapping helper
const getIcon = (iconName?: string) => {
  const className = "w-5 h-5 sm:w-6 sm:h-6 text-slate-600 group-hover:text-indigo-600 transition-colors";
  
  switch (iconName) {
    case 'github': return <Github className={className} />;
    case 'instagram': return <Instagram className={className} />;
    case 'youtube': return <Youtube className={className} />;
    case 'mail': return <Mail className={className} />;
    case 'briefcase': return <Briefcase className={className} />;
    case 'pencil': return <PenTool className={className} />;
    case 'message': return <MessageCircle className={className} />;
    default: return <Globe className={className} />;
  }
};

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full bg-white rounded-2xl p-4 mb-3 shadow-sm border border-slate-100 hover:border-indigo-100 hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 ease-out"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
            {getIcon(link.iconName)}
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-slate-800 text-sm sm:text-base group-hover:text-indigo-700 transition-colors">
              {link.title}
            </span>
            {link.description && (
              <span className="text-xs text-slate-500 mt-0.5 font-medium line-clamp-1">
                {link.description}
              </span>
            )}
          </div>
        </div>
        <div className="text-slate-300 group-hover:text-indigo-400 transition-colors pl-2">
           <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </div>
    </a>
  );
};