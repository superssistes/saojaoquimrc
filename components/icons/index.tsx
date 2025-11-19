
import React from 'react';

interface IconProps {
  className?: string;
}

const defaultClass = "h-full w-full";

// --- Definições Globais de Efeitos 3D (Gradientes e Sombras) ---
const Defs = () => (
  <defs>
    {/* Gradients */}
    <linearGradient id="grad-amber" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stopColor="#fbbf24" /> {/* Amber 400 */}
      <stop offset="100%" stopColor="#b45309" /> {/* Amber 700 */}
    </linearGradient>
    
    <linearGradient id="grad-amber-light" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stopColor="#fcd34d" />
      <stop offset="100%" stopColor="#f59e0b" />
    </linearGradient>

    <linearGradient id="grad-red" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stopColor="#f87171" />
      <stop offset="100%" stopColor="#991b1b" />
    </linearGradient>

    <linearGradient id="grad-blue" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stopColor="#60a5fa" />
      <stop offset="100%" stopColor="#1e40af" />
    </linearGradient>

    <linearGradient id="grad-teal" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stopColor="#2dd4bf" />
      <stop offset="100%" stopColor="#115e59" />
    </linearGradient>

    <linearGradient id="grad-stone" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stopColor="#e7e5e4" />
      <stop offset="100%" stopColor="#78716c" />
    </linearGradient>
    
    <linearGradient id="grad-stone-dark" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stopColor="#a8a29e" />
      <stop offset="100%" stopColor="#44403c" />
    </linearGradient>

    <linearGradient id="grad-purple" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stopColor="#c084fc" />
      <stop offset="100%" stopColor="#6b21a8" />
    </linearGradient>
    
    <linearGradient id="grad-white" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#ffffff" />
      <stop offset="100%" stopColor="#d4d4d4" />
    </linearGradient>

    {/* Filters for 3D Effect */}
    <filter id="filter-3d" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
      <feOffset in="blur" dx="2" dy="4" result="offsetBlur" />
      <feFlood floodColor="rgba(0,0,0,0.3)" result="colorBlur" />
      <feComposite in="colorBlur" in2="offsetBlur" operator="in" result="shadow" />
      
      {/* Inner Highlight for bevel effect */}
      <feSpecularLighting in="blur" surfaceScale="5" specularConstant="0.75" specularExponent="20" lightingColor="#ffffff" result="specular">
        <fePointLight x="-5000" y="-10000" z="20000" />
      </feSpecularLighting>
      <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular" />
      <feComposite in="SourceGraphic" in2="specular" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litGraphic" />
      
      <feMerge>
        <feMergeNode in="shadow" />
        <feMergeNode in="litGraphic" />
      </feMerge>
    </filter>

    <filter id="filter-3d-sm" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
      <feOffset in="blur" dx="1" dy="2" result="offsetBlur" />
      <feFlood floodColor="rgba(0,0,0,0.2)" result="colorBlur" />
      <feComposite in="colorBlur" in2="offsetBlur" operator="in" result="shadow" />
      <feMerge>
        <feMergeNode in="shadow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

const IconWrapper: React.FC<{ className?: string, children: React.ReactNode, viewBox?: string }> = ({ className, children, viewBox = "0 0 24 24" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox={viewBox} fill="none">
    <Defs />
    {children}
  </svg>
);

// --- UI Navigation ---

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="12" r="10" fill="url(#grad-white)" filter="url(#filter-3d-sm)" />
    <path d="M14 8l-4 4 4 4" stroke="url(#grad-amber)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </IconWrapper>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="12" r="10" fill="url(#grad-white)" filter="url(#filter-3d-sm)" />
    <path d="M10 8l4 4-4 4" stroke="url(#grad-amber)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </IconWrapper>
);

export const PlusIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="12" r="10" fill="url(#grad-amber-light)" filter="url(#filter-3d-sm)" />
    <path d="M12 7v10M7 12h10" stroke="#78350f" strokeWidth="3" strokeLinecap="round" />
  </IconWrapper>
);

export const MinusIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="12" r="10" fill="url(#grad-stone)" filter="url(#filter-3d-sm)" />
    <path d="M7 12h10" stroke="#44403c" strokeWidth="3" strokeLinecap="round" />
  </IconWrapper>
);

// --- Programs & Mission ---

export const HeartIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <path 
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
      fill="url(#grad-red)" 
      filter="url(#filter-3d)" 
    />
    {/* Highlight */}
    <ellipse cx="7" cy="7" rx="2" ry="1" fill="white" fillOpacity="0.4" transform="rotate(-45 7 7)" />
  </IconWrapper>
);

export const HomeIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <path d="M2 12l10-9 10 9" fill="url(#grad-amber)" filter="url(#filter-3d)" />
    <rect x="4" y="11" width="16" height="11" rx="2" fill="url(#grad-stone)" filter="url(#filter-3d)" />
    <rect x="9" y="15" width="6" height="7" rx="1" fill="url(#grad-amber-light)" />
  </IconWrapper>
);

export const UserGroupIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="8" r="4" fill="url(#grad-amber)" filter="url(#filter-3d)" />
    <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="url(#grad-stone)" filter="url(#filter-3d)" />
    {/* Background figures */}
    <circle cx="6" cy="10" r="3" fill="url(#grad-stone-dark)" />
    <circle cx="18" cy="10" r="3" fill="url(#grad-stone-dark)" />
  </IconWrapper>
);

export const BrainIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <path d="M12 4a6 6 0 0 0-6 6c0 1.5.5 3 1.5 4l.5.5v4h8v-4l.5-.5c1-1 1.5-2.5 1.5-4a6 6 0 0 0-6-6z" fill="url(#grad-purple)" filter="url(#filter-3d)" />
    <path d="M8 10c0-1.5 1.5-2.5 2-2.5M14 7.5c.5 0 2 1 2 2.5" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
  </IconWrapper>
);

export const SparklesIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <path d="M12 2l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" fill="url(#grad-amber)" filter="url(#filter-3d)" />
    <circle cx="12" cy="11" r="2" fill="white" fillOpacity="0.5" />
  </IconWrapper>
);

export const PuzzleIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <path 
      d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z" 
      fill="url(#grad-teal)" 
      filter="url(#filter-3d)" 
    />
  </IconWrapper>
);

// --- Contact ---

export const UserIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="8" r="5" fill="url(#grad-blue)" filter="url(#filter-3d)" />
    <path d="M20 21c0-4.4-3.6-8-8-8s-8 3.6-8 8" fill="url(#grad-stone)" filter="url(#filter-3d)" />
  </IconWrapper>
);

export const EnvelopeIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <rect x="2" y="6" width="20" height="12" rx="2" fill="url(#grad-amber)" filter="url(#filter-3d)" />
    <path d="M2 8l10 7 10-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
  </IconWrapper>
);

export const PencilIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <rect x="14" y="2" width="6" height="16" rx="1" transform="rotate(45 14 2)" fill="url(#grad-amber)" filter="url(#filter-3d)" />
    <path d="M4 20l-2 2 2-2 4-4-4 4z" fill="#333" />
    <path d="M2 22l5-1" stroke="#333" strokeWidth="2" />
  </IconWrapper>
);

// --- Dependencies & Stats ---

export const CommunityIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="12" r="10" fill="url(#grad-stone)" filter="url(#filter-3d)" />
    <path d="M7 14l2.5-2.5 2.5 2.5 5-5" stroke="url(#grad-amber)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </IconWrapper>
);

export const SupportIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <circle cx="12" cy="12" r="9" fill="url(#grad-red)" filter="url(#filter-3d)" />
    <circle cx="12" cy="12" r="4" fill="#f3f4f6" filter="url(#filter-3d-sm)" /> 
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" stroke="white" strokeWidth="3" strokeLinecap="round" />
  </IconWrapper>
);

export const UsersIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <circle cx="8" cy="14" r="5" fill="url(#grad-stone-dark)" filter="url(#filter-3d)" />
    <circle cx="16" cy="14" r="5" fill="url(#grad-stone-dark)" filter="url(#filter-3d)" />
    <circle cx="12" cy="10" r="6" fill="url(#grad-amber)" filter="url(#filter-3d)" />
  </IconWrapper>
);

export const PlateIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <ellipse cx="12" cy="14" rx="10" ry="6" fill="url(#grad-white)" filter="url(#filter-3d)" />
    <ellipse cx="12" cy="14" rx="6" ry="3" fill="#e5e5e5" />
  </IconWrapper>
);

export const MedicalIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <rect x="2" y="5" width="20" height="14" rx="3" fill="url(#grad-white)" filter="url(#filter-3d)" />
    <path d="M12 4v2" stroke="url(#grad-stone)" strokeWidth="3" />
    <rect x="9" y="9" width="6" height="6" rx="1" fill="url(#grad-red)" />
    <rect x="11" y="8" width="2" height="8" fill="white" />
    <rect x="8" y="11" width="8" height="2" fill="white" />
  </IconWrapper>
);

export const FamilyIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <rect x="5" y="9" width="6" height="12" rx="3" fill="url(#grad-stone)" filter="url(#filter-3d)" />
    <circle cx="8" cy="7" r="3" fill="url(#grad-stone)" filter="url(#filter-3d)" />
    <rect x="13" y="11" width="6" height="10" rx="3" fill="url(#grad-blue)" filter="url(#filter-3d)" />
    <circle cx="16" cy="8" r="3" fill="url(#grad-blue)" filter="url(#filter-3d)" />
    <circle cx="12" cy="18" r="2" fill="url(#grad-amber)" />
  </IconWrapper>
);

// --- Payment ---

export const PixIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <rect x="4" y="4" width="16" height="16" rx="4" fill="url(#grad-teal)" filter="url(#filter-3d)" />
    <path d="M8 8l4 4 4-4M8 16l4-4 4 4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </IconWrapper>
);

export const CardIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <rect x="2" y="6" width="20" height="13" rx="2" fill="url(#grad-amber)" filter="url(#filter-3d)" />
    <rect x="2" y="9" width="20" height="3" fill="#92400e" />
    <rect x="4" y="14" width="5" height="2" rx="1" fill="white" fillOpacity="0.8" />
  </IconWrapper>
);

// --- AI / Chat ---

export const BotIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <rect x="4" y="6" width="16" height="14" rx="4" fill="url(#grad-stone)" filter="url(#filter-3d)" />
    <path d="M6 8h4v4h-4z" fill="url(#grad-blue)" />
    <path d="M14 8h4v4h-4z" fill="url(#grad-blue)" />
    <rect x="8" y="15" width="8" height="2" rx="1" fill="#333" />
    <circle cx="12" cy="3" r="2" fill="url(#grad-amber)" filter="url(#filter-3d-sm)" />
    <line x1="12" y1="5" x2="12" y2="6" stroke="gray" strokeWidth="2" />
  </IconWrapper>
);

export const SendIcon: React.FC<IconProps> = ({ className = defaultClass }) => (
  <IconWrapper className={className}>
    <path d="M22 2L11 13" stroke="white" strokeWidth="0" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="url(#grad-blue)" filter="url(#filter-3d)" />
    <path d="M11 13L22 2" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
  </IconWrapper>
);

export const CloseIcon: React.FC<IconProps> = ({ className = "h-6 w-6" }) => (
    <IconWrapper className={className}>
        <circle cx="12" cy="12" r="10" fill="url(#grad-red)" filter="url(#filter-3d-sm)" />
        <path d="M8 8l8 8M16 8l-8 8" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </IconWrapper>
);
