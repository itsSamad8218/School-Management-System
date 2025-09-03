import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { School, Users, Plus } from 'lucide-react';

export default function Index() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            School Management System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage school information efficiently with our easy-to-use platform. 
            Add new schools and browse existing ones with a modern, responsive interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Plus className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Add New School</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Register a new school with complete details including contact information and images.
              </p>
              <Link to="/addSchool">
                <Button className="w-full">
                  Add School
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl">View Schools</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Browse all registered schools in an organized, easy-to-navigate layout.
              </p>
              <Link to="/showSchools">
                <Button variant="outline" className="w-full">
                  View Schools
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-500">
            <School className="w-5 h-5" />
            <span>Build By Abdul Samad Khan</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}