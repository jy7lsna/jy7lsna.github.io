import './SpiralBinding.css';

const RING_COUNT = 20;

export default function SpiralBinding() {
    return (
        <div className="spiral-binding" aria-hidden="true">
            <div className="spiral-binding__spine" />
            {Array.from({ length: RING_COUNT }, (_, i) => (
                <div key={i} className="spiral-ring">
                    <div className="spiral-ring__metal" />
                    <div className="spiral-ring__highlight" />
                </div>
            ))}
        </div>
    );
}
