import { School } from '../lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone } from 'lucide-react';

interface SchoolCardProps {
  school: School;
}

export default function SchoolCard({ school }: SchoolCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative bg-gray-200">
        {school.image ? (
          <img
            src={school.image}
            alt={school.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-blue-200">
            <div className="text-blue-600 text-4xl font-bold">
              {school.name.charAt(0).toUpperCase()}
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{school.name}</h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <div>
              <p className="line-clamp-2">{school.address}</p>
              <p className="font-medium">{school.city}, {school.state}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{school.contact}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{school.email_id}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}