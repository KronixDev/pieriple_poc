"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

export default function Results() {
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDestination({
        city: "Bali",
        country: "Indonésie",
        description: "Bali est l'endroit parfait pour votre voyage. Avec ses plages de sable blanc, sa culture riche et son climat tropical, c'est une destination idéale pour se détendre et explorer.",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80"
      });
      setLoading(false);
    }, 2000);
  }, []);

  const handleGenerateItinerary = () => {
    console.log("Generating itinerary...");
  };

  if (loading) {
    return (
      <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Votre destination idéale</CardTitle>
          </CardHeader>
          <CardContent>
            <Skeleton className="w-full h-[200px] mb-4" />
            <Skeleton className="w-[250px] h-[30px] mb-4" />
            <Skeleton className="w-full h-[100px]" />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-2xl bg-white overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.city}, ${destination.country}`}
          width={800}
          height={400}
          className="w-full h-[300px] object-cover"
        />
        <CardContent className="p-6">
          <h2 className="text-3xl font-bold mb-4">{destination.city}, {destination.country}</h2>
          <p className="text-lg mb-6 text-gray-600">{destination.description}</p>
          <Button onClick={handleGenerateItinerary} className="btn-primary text-lg">
            Générer un itinéraire
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}