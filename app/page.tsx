import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CompassIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <main className="text-center px-4 max-w-4xl w-full">
        <div className="flex items-center justify-center mb-6">
          <CompassIcon className="w-12 h-12 text-primary mr-4" />
          <h1 className="text-5xl font-bold">Piériple</h1>
        </div>
        <p className="text-xl mb-12 text-gray-600">Laissez l'IA vous guider vers votre voyage idéal</p>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="destination" className="text-left block mb-2">Destination</Label>
              <Input id="destination" placeholder="Où allez-vous ?" className="input-primary" />
            </div>
            <div>
              <Label htmlFor="dates" className="text-left block mb-2">Dates</Label>
              <Input id="dates" placeholder="Quand ?" className="input-primary" />
            </div>
            <div>
              <Label htmlFor="travelers" className="text-left block mb-2">Voyageurs</Label>
              <Input id="travelers" placeholder="Combien ?" className="input-primary" />
            </div>
          </div>
          <Link href="/questionnaire" className="block mt-6">
            <Button className="btn-primary w-full">Commencer l'aventure</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}