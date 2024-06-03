import { useState } from 'react';

const Tab = () => {
    const [activeTab, setActiveTab] = useState('SOFAS');

    const furnitureData = {
        SOFAS: [
            { img: 'https://via.placeholder.com/150', name: 'Sofa 1', price: '$200' },
            { img: 'https://via.placeholder.com/150', name: 'Sofa 2', price: '$250' },
            { img: 'https://via.placeholder.com/150', name: 'Sofa 3', price: '$300' },
            { img: 'https://via.placeholder.com/150', name: 'Sofa 4', price: '$350' },
            { img: 'https://via.placeholder.com/150', name: 'Sofa 5', price: '$400' },
            { img: 'https://via.placeholder.com/150', name: 'Sofa 6', price: '$450' },
        ],
        'WOOD CHAIR': [
            { img: 'https://via.placeholder.com/150', name: 'Wood Chair 1', price: '$50' },
            { img: 'https://via.placeholder.com/150', name: 'Wood Chair 2', price: '$60' },
            { img: 'https://via.placeholder.com/150', name: 'Wood Chair 3', price: '$70' },
            { img: 'https://via.placeholder.com/150', name: 'Wood Chair 4', price: '$80' },
            { img: 'https://via.placeholder.com/150', name: 'Wood Chair 5', price: '$90' },
            { img: 'https://via.placeholder.com/150', name: 'Wood Chair 6', price: '$100' },
        ],
        'COFFEE TABLES': [
            { img: 'https://via.placeholder.com/150', name: 'Coffee Table 1', price: '$120' },
            { img: 'https://via.placeholder.com/150', name: 'Coffee Table 2', price: '$130' },
            { img: 'https://via.placeholder.com/150', name: 'Coffee Table 3', price: '$140' },
            { img: 'https://via.placeholder.com/150', name: 'Coffee Table 4', price: '$150' },
            { img: 'https://via.placeholder.com/150', name: 'Coffee Table 5', price: '$160' },
            { img: 'https://via.placeholder.com/150', name: 'Coffee Table 6', price: '$170' },
        ],
        'BEDROOM FURNITURE': [
            { img: 'https://via.placeholder.com/150', name: 'Bed 1', price: '$500' },
            { img: 'https://via.placeholder.com/150', name: 'Bed 2', price: '$600' },
            { img: 'https://via.placeholder.com/150', name: 'Bed 3', price: '$700' },
            { img: 'https://via.placeholder.com/150', name: 'Bed 4', price: '$800' },
            { img: 'https://via.placeholder.com/150', name: 'Bed 5', price: '$900' },
            { img: 'https://via.placeholder.com/150', name: 'Bed 6', price: '$1000' },
        ],
    };

    const renderCards = (category) => {
        return furnitureData[category].map((item, index) => (
            <div key={index} className="p-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={item.img} alt={item.name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.name}</div>
                        <p className="text-gray-700 text-base">{item.price}</p>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center mb-8">
                {['SOFAS', 'WOOD CHAIR', 'COFFEE TABLES', 'BEDROOM FURNITURE'].map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 mx-2 text-lg font-semibold rounded-lg ${activeTab === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => setActiveTab(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderCards(activeTab)}
            </div>
        </div>
    );
};

export default Tab;
