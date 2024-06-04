import { useState } from 'react';

const Tab = () => {
    const [activeTab, setActiveTab] = useState('SOFAS');

    const furnitureData = {
        SOFAS: [
            { img: 'https://i.ibb.co/khHhhLy/tabs1.jpg', name: 'Sofa 1', price: '$200' },
            { img: 'https://i.ibb.co/R4HKZW8/tabs2.webp', name: 'Sofa 2', price: '$250' },
            { img: 'https://i.ibb.co/xf9BGDy/tabs3.jpg', name: 'Sofa 3', price: '$300' },
            { img: 'https://i.ibb.co/F0b453N/tabs4.webp', name: 'Sofa 4', price: '$350' },
            { img: 'https://i.ibb.co/zsyBNjQ/tabs5.jpg', name: 'Sofa 5', price: '$400' },
            { img: 'https://i.ibb.co/mNwpGC4/tabs6.jpg', name: 'Sofa 6', price: '$450' },
        ],
        'WOOD CHAIR': [
            { img: 'https://i.ibb.co/Mg3Hd4Z/tabc1.webp', name: 'Wood Chair 1', price: '$50' },
            { img: 'https://i.ibb.co/Zgyr0Dd/tabc2.jpg', name: 'Wood Chair 2', price: '$60' },
            { img: 'https://i.ibb.co/3SZdQw6/tabc3.jpg', name: 'Wood Chair 3', price: '$70' },
            { img: 'https://i.ibb.co/nPrrPLY/tabc4.jpg', name: 'Wood Chair 4', price: '$80' },
            { img: 'https://i.ibb.co/PC64D5n/tabc5.jpg', name: 'Wood Chair 5', price: '$90' },
            { img: 'https://i.ibb.co/6N5jJKg/tabc6.jpg', name: 'Wood Chair 6', price: '$100' },
        ],
        'COFFEE TABLES': [
            { img: 'https://i.ibb.co/QJqpwR0/tabct1.jpg', name: 'Coffee Table 1', price: '$120' },
            { img: 'https://i.ibb.co/6bpPzfR/tabct2.webp', name: 'Coffee Table 2', price: '$130' },
            { img: 'https://i.ibb.co/vDyLtt9/tabct3.jpg', name: 'Coffee Table 3', price: '$140' },
            { img: 'https://i.ibb.co/GkDH5qF/tabct4.jpg', name: 'Coffee Table 4', price: '$150' },
            { img: 'https://i.ibb.co/99M6vXP/tabct5.jpg', name: 'Coffee Table 5', price: '$160' },
            { img: 'https://i.ibb.co/dQpz5Dq/tabct6.webp', name: 'Coffee Table 6', price: '$170' },
        ],
        'BEDROOM FURNITURE': [
            { img: 'https://i.ibb.co/kMzXYJk/tabb1.jpg', name: 'Bed 1', price: '$500' },
            { img: 'https://i.ibb.co/sJQgqKH/tabb2.jpg', name: 'Bed 2', price: '$600' },
            { img: 'https://i.ibb.co/J50SFjH/tabb3.jpg', name: 'Bed 3', price: '$700' },
            { img: 'https://i.ibb.co/php6NDb/tabb4.jpg', name: 'Bed 4', price: '$800' },
            { img: 'https://i.ibb.co/mc8BNYs/tabb5.jpg', name: 'Bed 5', price: '$900' },
            { img: 'https://i.ibb.co/CBsMWjP/tabb6.jpg', name: 'Bed 6', price: '$1000' },
        ],
    };

    const renderCards = (category) => {
        return furnitureData[category].map((item, index) => (
            <div key={index} className="p-4">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="h-[200px] w-full" src={item.img} alt={item.name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.name}</div>
                        <p className="text-gray-700 text-base">{item.price}</p>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div className="container md:mx-auto lg:mx-auto px-4 py-8">
            <div className="flex justify-center mb-8">
                {['SOFAS', 'WOOD CHAIR', 'COFFEE TABLES', 'BEDROOM FURNITURE'].map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 mx-2 text-base font-semibold rounded-lg ${activeTab === category ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800'}`}
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
