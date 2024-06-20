import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What does BMS stand for?",
    "Should a BMS network be connected to the internet?",
    "If a user is required to perform maintenance of the system from a remote location, how should the user connect to the system without making the system vulnerable and exploitable?",
    "What are the best practices to follow while setting up a BACnet/IP controller?"
];

const GPT4V_EXAMPLES: string[] = [
    "Compare the topics that are in the EcoStruxure Building Management System Hardening Guide with the NIST 800-123 hardening guidelines",
    "Can a Webstation in an EBO be exposed to the internet?",
    "Consider the defense-in-depth security architecture for a DCS system suggested in the NIST. Can you compare it with Schneider Electric Machine Solutions architecture?"
    
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
