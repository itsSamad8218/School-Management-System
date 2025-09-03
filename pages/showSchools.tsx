import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SchoolCard from '../components/SchoolCard';
import { School } from '../lib/types';
import { Input } from '@/components/ui/input';
import { Search, Loader2 } from 'lucide-react';

export default function ShowSchools() {
  const [schools, setSchools] = useState<School[]>([]);
  const [filteredSchools, setFilteredSchools] = useState<School[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchSchools();
  }, []);

  useEffect(() => {
    const filtered = schools.filter(school =>
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSchools(filtered);
  }, [schools, searchTerm]);

  const fetchSchools = async () => {
    try {
      // For demo purposes, we'll use localStorage
      // In production, you'd fetch from your API
      const storedSchools = JSON.parse(localStorage.getItem('schools') || '[]');
      setSchools(storedSchools);
    } catch (error) {
      console.error('Error fetching schools:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading schools...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Schools</h1>
          
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search schools by name, city, or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {filteredSchools.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              {searchTerm ? 'No schools found' : 'No schools yet'}
            </h3>
            <p className="text-gray-600">
              {searchTerm 
                ? 'Try adjusting your search terms' 
                : 'Start by adding your first school'
              }
            </p>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredSchools.length} of {schools.length} schools
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSchools.map((school) => (
                <SchoolCard key={school.id} school={school} />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}