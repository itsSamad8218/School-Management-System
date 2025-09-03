import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { schoolSchema, SchoolFormData } from '../lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

export default function SchoolForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<SchoolFormData>({
    resolver: zodResolver(schoolSchema)
  });

  const uploadImage = async (file: File): Promise<string> => {
    // For demo purposes, we'll create a local URL
    // In production, you'd upload to your server
    const url = URL.createObjectURL(file);
    return url;
  };

  const onSubmit = async (data: SchoolFormData) => {
    setIsSubmitting(true);
    
    try {
      let imageUrl = '';
      
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      const schoolData = {
        ...data,
        image: imageUrl
      };

      // For demo purposes, we'll store in localStorage
      // In production, you'd send to your API
      const existingSchools = JSON.parse(localStorage.getItem('schools') || '[]');
      const newSchool = {
        id: Date.now(),
        ...schoolData
      };
      existingSchools.push(newSchool);
      localStorage.setItem('schools', JSON.stringify(existingSchools));

      toast.success('School added successfully!');
      reset();
      setImageFile(null);
    } catch (error) {
      toast.error('Failed to add school. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Add New School</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">School Name *</Label>
              <Input
                id="name"
                {...register('name')}
                placeholder="Enter school name"
              />
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email_id">Email *</Label>
              <Input
                id="email_id"
                type="email"
                {...register('email_id')}
                placeholder="school@example.com"
              />
              {errors.email_id && (
                <p className="text-sm text-red-600">{errors.email_id.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address *</Label>
            <Textarea
              id="address"
              {...register('address')}
              placeholder="Enter complete address"
              rows={3}
            />
            {errors.address && (
              <p className="text-sm text-red-600">{errors.address.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                {...register('city')}
                placeholder="Enter city"
              />
              {errors.city && (
                <p className="text-sm text-red-600">{errors.city.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="state">State *</Label>
              <Input
                id="state"
                {...register('state')}
                placeholder="Enter state"
              />
              {errors.state && (
                <p className="text-sm text-red-600">{errors.state.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact">Contact Number *</Label>
            <Input
              id="contact"
              {...register('contact')}
              placeholder="Enter 10-digit contact number"
              maxLength={10}
            />
            {errors.contact && (
              <p className="text-sm text-red-600">{errors.contact.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">School Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                setImageFile(file || null);
              }}
            />
            <p className="text-sm text-gray-500">Upload an image of the school (optional)</p>
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding School...' : 'Add School'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}