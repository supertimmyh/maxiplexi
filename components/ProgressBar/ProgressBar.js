import { v4 as uuid } from "uuid";

const progressData = 50; // Assuming the progress is at 50%

const milestonesData = [
    {
        id: uuid(),
        label: "Hatching",
        position: 0, // Positioned at the start (0%)
        note: null // No note for this milestone
    },
    {
        id: uuid(),
        label: "Where we at",
        position: 50, // Positioned at 50% where the progress currently is
        note: "The MaxiPlexi team is currently work hard to fine tune the product"
    },
    {
        id: uuid(),
        label: "In Beta",
        position: 75, // Positioned at 75%
        note: null // No note for this milestone
    },
    {
        id: uuid(),
        label: "Stable",
        position: 100, // Positioned at the end (100%)
        note: null // No note for this milestone
    }
];

// The main component that renders the progress bar and milestones
export const ProgressBar = () => {
    return (
        <div className="progress-container">
            <div className="release-date">
                <h2>PLATFORM RELEASE STATUS</h2>
            </div>
            <div className="progress-bar">
                {milestonesData.map((item) => (
                    <Milestone
                        key={item.id}
                        label={item.label}
                        position={item.position}
                        note={item.note}
                    />
                ))}
                <div
                    className="progress"
                    style={{ width: `${progressData}%` }}
                ></div>
            </div>
        </div>
    );
};

// The Milestone component that renders each milestone
const Milestone = ({ label, position, note }) => {
    return (
        <div className="milestone" style={{ left: `${position}%` }}>
            <div className="milestone-label">{label}</div>
            {note && <div className="milestone-note">{note}</div>}
            <div className="milestone-indicator"></div>
        </div>
    );
};
