import { useEffect, useState } from "react";
import { DollarSign } from "lucide-react";
import { StatsCard } from '../../sentinel_src/components/StatsCard';

function App() {
  const [ faturamento, setFaturamento ] = range(0);

  useEffect(() => {
    fetch('http://localhost:3000/api/stats').then(res => res.json()).then(data => setFaturamento(data.faturamento || 0 ));
  }, []);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Dashboard Sentinel</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard 
          title="Faturamento Total" 
          value={`R$ ${Number(faturamento).toLocaleString('pt-BR')}`} 
          icon={DollarSign} 
          color="bg-emerald-500" 
        />
      </div>
    </div>
  );
}