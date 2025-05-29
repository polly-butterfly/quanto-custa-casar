import React from 'react';
import { WeddingItem } from '../types';

interface WeddingItemRowProps {
  item: WeddingItem;
  onToggle: (id: string) => void;
  onCostChange: (id: string, cost: number) => void;
}

const WeddingItemRow: React.FC<WeddingItemRowProps> = ({ item, onToggle, onCostChange }) => {
  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCost = parseFloat(e.target.value);
    if (!isNaN(newCost) && newCost >= 0) {
      onCostChange(item.id, newCost);
    } else if (e.target.value === '') {
      onCostChange(item.id, 0); // Allow clearing the input
    }
  };

  return (
    <div className={`flex items-center justify-between p-4 border-b border-[#EAE6E1] transition-all duration-300 ease-in-out ${item.isSelected ? 'bg-[#FAF7F2] hover:bg-[#F0EBE5]' : 'bg-white hover:bg-[#FDFBF8]'}`}>
      <div className="flex items-center flex-grow mr-4">
        <input
          type="checkbox"
          id={`item-${item.id}`}
          checked={item.isSelected}
          onChange={() => onToggle(item.id)}
          className="form-checkbox h-5 w-5 text-[#8C6B72] border-[#A0878D] rounded focus:ring-[#8C6B72] cursor-pointer"
          aria-labelledby={`item-label-${item.id}`}
        />
        <label id={`item-label-${item.id}`} htmlFor={`item-${item.id}`} className="ml-3 text-gray-700 cursor-pointer flex-grow">
          {item.name}
          {item.notes && <span className="text-xs text-gray-500 ml-1">({item.notes})</span>}
        </label>
      </div>
      <div className="flex items-center">
        <span className="text-gray-500 mr-1">R$</span>
        <input
          type="number"
          value={item.cost}
          onChange={handleCostChange}
          min="0"
          aria-label={`Custo de ${item.name}`}
          className={`w-28 p-2 border rounded-md shadow-sm focus:ring-[#8C6B72] focus:border-[#8C6B72] text-right ${item.isSelected ? 'border-[#A0878D] bg-white text-gray-800' : 'border-gray-300 bg-gray-100 text-gray-500'}`}
          disabled={!item.isSelected && item.cost === 0} // Disable if not selected and cost is 0, otherwise allow editing even if not selected to preset value
        />
      </div>
    </div>
  );
};

export default WeddingItemRow;