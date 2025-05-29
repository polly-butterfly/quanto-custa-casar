
import React, { useState, useEffect, useCallback } from 'react';
import { WeddingItem, WeddingCategory } from './types';
import { INITIAL_WEDDING_ITEMS, CATEGORY_ORDER } from './constants';
import Header from './components/Header';
import WeddingCategorySection from './components/WeddingCategorySection';
import TotalCost from './components/TotalCost';
import Footer from './components/Footer';
// Removed import AITipGenerator from './components/AITipGenerator';

const App: React.FC = () => {
  const [weddingItems, setWeddingItems] = useState<WeddingItem[]>(
    () => INITIAL_WEDDING_ITEMS.map(item => ({...item})) // Deep copy for initial state
  );
  const [totalCost, setTotalCost] = useState<number>(0);

  const calculateTotalCost = useCallback(() => {
    const currentTotal = weddingItems
      .filter(item => item.isSelected)
      .reduce((sum, item) => sum + item.cost, 0);
    setTotalCost(currentTotal);
  }, [weddingItems]);

  useEffect(() => {
    calculateTotalCost();
  }, [weddingItems, calculateTotalCost]);

  const handleToggleItem = (id: string) => {
    setWeddingItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const handleCostChange = (id: string, newCost: number) => {
    setWeddingItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, cost: newCost } : item
      )
    );
  };

  const handleReset = () => {
    // Create new copies from INITIAL_WEDDING_ITEMS to ensure a true reset
    setWeddingItems(INITIAL_WEDDING_ITEMS.map(item => ({...item})));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F1EB]">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-end mb-6">
            <button
              onClick={handleReset}
              className="bg-[#8C6B72] hover:bg-[#7A5B60] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#A0878D] focus:ring-opacity-75"
              aria-label="Resetar calculadora para valores iniciais"
              title="Resetar itens e custos para os valores padrão"
            >
              <i className="fas fa-undo mr-2"></i>Resetar Calculadora
            </button>
        </div>

        {/* AI Tip Generator Section Removed */}

        {CATEGORY_ORDER.map(category => (
          <WeddingCategorySection
            key={category}
            category={category}
            items={weddingItems}
            onToggleItem={handleToggleItem}
            onCostChangeItem={handleCostChange}
          />
        ))}
      </main>
      <TotalCost totalCost={totalCost} />
      <Footer />
    </div>
  );
};

export default App;
