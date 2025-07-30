import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SupportHero = ({ onSearchSubmit, searchQuery, setSearchQuery }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
  };

  return (
    <div className="relative bg-gradient-to-br from-brand-navy via-action-blue to-brand-navy overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-brand-amber rounded-2xl flex items-center justify-center shadow-2xl">
              <Icon name="HelpCircle" size={40} color="white" strokeWidth={2} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            How can we help you today?
          </h1>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get instant support from our electrical experts, access technical resources, or connect with our community of professionals
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="relative glass-effect rounded-2xl p-2">
              <div className="flex items-center">
                <Icon name="Search" size={24} color="white" className="ml-4" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help articles, products, or ask a question..."
                  className="flex-1 bg-transparent text-white placeholder-white/70 px-4 py-4 text-lg focus:outline-none"
                />
                <Button
                  type="submit"
                  variant="default"
                  className="bg-brand-amber hover:bg-brand-amber/90 text-brand-navy font-semibold px-8 py-3 rounded-xl"
                >
                  Search
                </Button>
              </div>
            </div>
          </form>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              "Product Installation",
              "Warranty Claims",
              "Technical Specs",
              "Code Compliance",
              "Bulk Orders"
            ].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium brand-transition backdrop-blur-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHero;