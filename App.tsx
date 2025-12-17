import React, { useState, useMemo } from 'react';
import { PROFILE_DATA, LINKS_DATA } from './constants';
import { ProfileHeader } from './components/ProfileHeader';
import { SearchBar } from './components/SearchBar';
import { LinkCard } from './components/LinkCard';
import { Footer } from './components/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Search filter logic
  const filteredLinks = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return LINKS_DATA;

    return LINKS_DATA.filter(link => 
      link.title.toLowerCase().includes(term) || 
      link.category.toLowerCase().includes(term) ||
      link.description?.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 px-4 sm:px-6">
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        {/* Profile Section */}
        <header>
          <ProfileHeader profile={PROFILE_DATA} />
        </header>

        {/* Search Section */}
        <section className="sticky top-2 z-10 backdrop-blur-sm bg-slate-50/80 rounded-2xl py-2 -mx-2 px-2 transition-all">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
        </section>

        {/* Links List Section */}
        <main className="flex-grow flex flex-col space-y-1 pb-4">
          {filteredLinks.length > 0 ? (
            <div className="space-y-3">
              {filteredLinks.map((link) => (
                <LinkCard key={link.id} link={link} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center fade-in">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <p className="text-slate-600 font-medium">검색 결과가 없습니다.</p>
              <p className="text-slate-400 text-sm mt-1">다른 검색어를 입력해보세요.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 px-4 py-2 bg-indigo-50 text-indigo-600 text-sm font-semibold rounded-lg hover:bg-indigo-100 transition-colors"
              >
                전체 목록 보기
              </button>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;