"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { DatePickerWithRange } from '@/components/date-range-picker';
import { addDays } from 'date-fns';

const steps = [
  { id: 'dates', title: 'Quand souhaitez-vous partir ?' },
  { id: 'environment', title: 'Quel type d\'environnement préférez-vous ?' },
  { id: 'climate', title: 'Quel climat recherchez-vous ?' },
  { id: 'travelType', title: 'Comment voyagez-vous ?' },
  { id: 'budget', title: 'Quel est votre budget ?' },
];

export default function Questionnaire() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    dateRange: {
      from: new Date(),
      to: addDays(new Date(), 7),
    },
    environment: '',
    climate: '',
    travelType: '',
    budget: '',
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log(formData);
    router.push('/results');
  };

  const renderStep = () => {
    const step = steps[currentStep];
    return (
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-6">{step.title}</h2>
        {step.id === 'dates' && (
          <div className="flex justify-center">
            <DatePickerWithRange
              date={formData.dateRange}
              setDate={(newDate) => setFormData(prev => ({ ...prev, dateRange: newDate }))}
            />
          </div>
        )}
        {step.id === 'environment' && (
          <RadioGroup
            onValueChange={(value) => setFormData(prev => ({ ...prev, environment: value }))}
            className="grid grid-cols-2 gap-4"
          >
            {['Plage', 'Montagne', 'Ville', 'Campagne'].map((env) => (
              <Card key={env} className="flex items-center space-x-3 p-4 cursor-pointer hover:border-primary">
                <RadioGroupItem value={env} id={env} className="text-primary" />
                <Label htmlFor={env} className="text-lg cursor-pointer">{env}</Label>
              </Card>
            ))}
          </RadioGroup>
        )}
        {step.id === 'climate' && (
          <RadioGroup
            onValueChange={(value) => setFormData(prev => ({ ...prev, climate: value }))}
            className="grid grid-cols-3 gap-4"
          >
            {['Chaud', 'Tempéré', 'Froid'].map((climate) => (
              <Card key={climate} className="flex items-center space-x-3 p-4 cursor-pointer hover:border-primary">
                <RadioGroupItem value={climate} id={climate} className="text-primary" />
                <Label htmlFor={climate} className="text-lg cursor-pointer">{climate}</Label>
              </Card>
            ))}
          </RadioGroup>
        )}
        {step.id === 'travelType' && (
          <RadioGroup
            onValueChange={(value) => setFormData(prev => ({ ...prev, travelType: value }))}
            className="grid grid-cols-2 gap-4"
          >
            {['Solo', 'En groupe'].map((type) => (
              <Card key={type} className="flex items-center space-x-3 p-4 cursor-pointer hover:border-primary">
                <RadioGroupItem value={type} id={type} className="text-primary" />
                <Label htmlFor={type} className="text-lg cursor-pointer">{type}</Label>
              </Card>
            ))}
          </RadioGroup>
        )}
        {step.id === 'budget' && (
          <div className="space-y-4">
            <Label htmlFor="budget" className="text-lg">Budget (en euros)</Label>
            <Input
              id="budget"
              type="number"
              placeholder="Entrez votre budget"
              onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
              className="input-primary text-lg"
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-2xl p-8 bg-white">
        {renderStep()}
        <div className="flex justify-between mt-12">
          <Button
            onClick={handleBack}
            disabled={currentStep === 0}
            className="btn-secondary"
          >
            Retour
          </Button>
          <Button
            onClick={handleNext}
            className="btn-primary"
          >
            {currentStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
          </Button>
        </div>
      </Card>
    </div>
  );
}