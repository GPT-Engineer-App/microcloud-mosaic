import { useQuery } from '@tanstack/react-query';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const fetchServices = async () => {
  const response = await fetch('https://api.example.com/services');
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }
  return response.json();
};

const Services = () => {
  const { data: services, error, isLoading, isError } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  });

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading services...</div>;
  }

  if (isError) {
    return (
      <Alert variant="destructive" className="max-w-md mx-auto mt-8">
        <AlertDescription>Error: {error.message}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <Card key={service.id}>
          <CardHeader>
            <CardTitle>{service.name}</CardTitle>
            <CardDescription>{service.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">Status: {service.status}</p>
            <p className="text-sm text-gray-500">Endpoint: {service.endpoint}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Services;
