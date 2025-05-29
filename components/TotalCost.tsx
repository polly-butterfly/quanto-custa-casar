import React from 'react';

interface TotalCostProps {
  totalCost: number;
}

const TotalCost: React.FC<TotalCostProps> = ({ totalCost }) => {
  return (
    <div className="sticky bottom-0 bg-gradient-to-r from-[#A0878D] to-[#8C6B72] text-white p-6 shadow-top-lg z-10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0">Custo Total Estimado:</h2>
        <p className="text-3xl sm:text-4xl font-bold">
          R$ {totalCost.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
};

export default TotalCost;