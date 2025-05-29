import React from 'react';
import { WeddingItem, WeddingCategory } from '../types';
import WeddingItemRow from './WeddingItemRow';

interface WeddingCategorySectionProps {
  category: WeddingCategory;
  items: WeddingItem[];
  onToggleItem: (id: string) => void;
  onCostChangeItem: (id: string, cost: number) => void;
}

const WeddingCategorySection: React.FC<WeddingCategorySectionProps> = ({ category, items, onToggleItem, onCostChangeItem }) => {
  const categoryItems = items.filter(item => item.category === category);

  if (categoryItems.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 bg-white shadow-xl rounded-lg overflow-hidden border border-[#D1C7C0]">
      <h2 className="bg-[#EAE6E1] text-[#6A5256] p-4 text-2xl font-semibold tracking-wide">
        {category}
      </h2>
      <div>
        {categoryItems.map(item => (
          <WeddingItemRow
            key={item.id}
            item={item}
            onToggle={onToggleItem}
            onCostChange={onCostChangeItem}
          />
        ))}
      </div>
    </div>
  );
};

export default WeddingCategorySection;