import './PolaroidGallery.css';

const PHOTOS = [
    { id: 1, label: 'Hackathon \'24', rotation: -4, top: '3%', left: '8%' },
    { id: 2, label: 'College Fest', rotation: 3, top: '2%', left: '52%' },
    { id: 3, label: 'Team Project', rotation: -2, top: '33%', left: '28%' },
    { id: 4, label: 'Workshop', rotation: 5, top: '35%', left: '58%' },
    { id: 5, label: 'Competition', rotation: -3, top: '62%', left: '10%' },
    { id: 6, label: 'Campus Life', rotation: 2, top: '64%', left: '48%' },
];

export default function PolaroidGallery() {
    return (
        <div className="polaroid-gallery">
            <h3 className="polaroid-gallery__title">moments</h3>
            {PHOTOS.map(photo => (
                <div
                    key={photo.id}
                    className="polaroid-frame"
                    style={{
                        transform: `rotate(${photo.rotation}deg)`,
                        top: photo.top,
                        left: photo.left,
                    }}
                >
                    <div className="polaroid-frame__image">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="rgba(0,0,0,0.15)">
                            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                        </svg>
                    </div>
                    <div className="polaroid-frame__caption">{photo.label}</div>
                </div>
            ))}
        </div>
    );
}
