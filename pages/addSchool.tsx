import Layout from '../components/Layout';
import SchoolForm from '../components/SchoolForm';

export default function AddSchool() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SchoolForm />
      </div>
    </Layout>
  );
}